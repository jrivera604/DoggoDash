import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { senderId, receiverId } = req.body;

  try {
    // Convert senderId and receiverId to integers
    const parsedSenderId = parseInt(senderId);
    const parsedReceiverId = parseInt(receiverId);

    // Check if the sender and receiver exist
    const sender = await prisma.user.findUnique({
      where: { id: parsedSenderId },
    });
    const receiver = await prisma.user.findUnique({
      where: { id: parsedReceiverId },
    });

    if (!sender || !receiver) {
      return res.status(404).json({ message: 'Sender or receiver not found' });
    }

    // Create the booking
    const booking = await prisma.booking.create({
      data: {
        sender: { connect: { id: parsedSenderId } },
        receiver: { connect: { id: parsedReceiverId } },
        date: new Date(),
        status: 'pending',
        // Additional booking data if needed
      },
    });

    console.log('Booking created:', booking);

    res.status(201).json({ booking });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
