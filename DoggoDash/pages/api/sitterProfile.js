import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
  const  {id}  = req.query;

  const dogSitter = await prisma.user.findUnique({
    where: {
      id: 4,
    },
    select: {
      id: true,
      firstName: true,
      lastName: true,
      city: true,
      availabilityStart: true,
      availabilityEnd: true,
      rating: true,
      description:true,
      streetAddress: true,
      province: true,
      postalCode: true,
      rate: true,
    },
  }); 
  res.status(200).json(dogSitter);
}
 