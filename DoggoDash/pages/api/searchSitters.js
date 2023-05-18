import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { city } = req.query;

  console.log('Searching dog sitters for city:', city);

  const dogSitters = await prisma.user.findMany({
    where: {
      userType: 'dogSitter',
      city: city, // Filter based on the specified city
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      city: true,
      rate: true, // Include the rate field
    },
  });

  res.status(200).json(dogSitters);
}
