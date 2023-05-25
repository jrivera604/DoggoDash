import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default (io, socket, activeUsers) => {
  const createdMessage = async (msg) => {
    console.log("Message Received:", msg);

    try {
      // Emit the new message only to the sender and receiver
      io.to(msg.senderId).to(msg.receiverId).emit("newIncomingMessage", msg);

      // Update the list of active users
      const sender = await prisma.user.findUnique({
        where: {
          id: msg.senderId,
        },
      });
      const receiver = await prisma.user.findUnique({
        where: {
          id: msg.receiverId,
        },
      });

      if (sender) {
        activeUsers.add(sender.username);
      }
      if (receiver) {
        activeUsers.add(receiver.username);
      }

      // Emit the updated list of active users
      io.emit("activeUsers", Array.from(activeUsers));
    } catch (error) {
      console.error("Error emitting message:", error);
    }
  };

  socket.on("createdMessage", createdMessage);
};
