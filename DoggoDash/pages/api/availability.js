import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { day, startTime, endTime, userId } = req.body;

  try {
    const availability = await prisma.availability.create({
      data: {
        day,
        startTime,
        endTime,
        userId,
      },
    });

    res.status(201).json({ availability });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
