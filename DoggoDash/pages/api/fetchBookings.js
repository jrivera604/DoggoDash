import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { senderId } = req.query; // Assuming the sender's email address is passed as a query parameter

  console.log('Received senderId:', senderId); // Log the received senderId

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: senderId,
      },
    });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('Fetched senderId:', user.id); // Log the fetched senderId

    const bookings = await prisma.booking.findMany({
      where: {
        OR: [
          { senderId: user.id },
          { receiverId: user.id },
        ],
      },
      include: {
        sender: { select: { firstName: true, lastName: true } },
        receiver: { select: { firstName: true, lastName: true } },
      },
    });

    console.log('Fetched bookings:', bookings); // Log the fetched bookings

    res.status(200).json({ bookings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
