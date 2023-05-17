import { PrismaClient } from "@prisma/client";
import { useUser } from "@auth0/nextjs-auth0/client";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const prisma = new PrismaClient();
    console.log(req.body);
    const name = req.body.data.name;
    const ownerId = 5
    const weight = req.body.data.weight;
    const temperament = req.body.data.temperament;
    const breedId = req.body.data.breedId;
    const comments = req.body.data.comments;
    const yearOfBirth = req.body.data.date
    await prisma.dog.create({
      data: {
        name,
        yearOfBirth,
        weight,
        temperament,
        breedId,
        ownerId,
        comments,
      },
    });
  }
}