import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const { id } = req.query;
    const parsedId = parseInt(id, 10); // Parse the id as an integer

    if (isNaN(parsedId)) {
      throw new Error('Invalid id');
    }

    const dogSitter = await prisma.user.findUnique({
      where: {
        id: parsedId,
      },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        city: true,
        availabilityStart: true,
        availabilityEnd: true,
        rating: true,
        description: true,
        streetAddress: true,
        province: true,
        postalCode: true,
        rate: true,
      },
    });

    res.status(200).json(dogSitter);
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Invalid id' });
  }
}
