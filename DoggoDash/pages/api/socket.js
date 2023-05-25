import { Server } from "socket.io";
import messageHandler from "../../utils/sockets/messageHandler";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function socketHandler(req, res) {
  // It means that socket server was already initialized
  if (res.socket.server.io) {
    console.log("Already set up");
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  const activeUsers = new Set(); // Create a Set to store the active users

  const onConnection = (socket) => {
    messageHandler(io, socket);
  };

  // Emit the list of active users to all connected clients
  const emitActiveUsers = () => {
    io.emit("activeUsers", Array.from(activeUsers));
  };

  // Define actions inside
  io.on("connection", async (socket) => {
    // Retrieve the user's email from the query parameters
    const { email } = socket.handshake.query;

    try {
      // Fetch the user record from the database using the email
      const user = await prisma.user.findUnique({
        where: {
          email: email.toLowerCase(),
        },
      });

      if (user) {
        // Join the socket to a room using the user's ID
        socket.join(user.id.toString());

        // Add the user to the list of active users
        activeUsers.add(user.username);

        // Emit the updated list of active users
        emitActiveUsers();

        onConnection(socket);
      } else {
        console.error(`User not found for email: ${email}`);
      }
    } catch (error) {
      console.error("Error retrieving user:", error);
    }

    // Remove the user from the list of active users when they disconnect
    socket.on("disconnect", () => {
      activeUsers.delete(user.username);
      emitActiveUsers();
    });
  });

  console.log("Setting up socket");
  res.end();
}
