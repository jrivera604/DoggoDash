<<<<<<< HEAD
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
//res.status(200).json({ name: 'John Doe' })
    if(req.method === "POST") {
        const prisma = new PrismaClient()
        const data = req.body
        console.log(data)
        console.log(prisma.user)
    }
}
  
=======
export default async function handler(req, res) {
  if (req.method === "POST") {
    const prisma = new PrismaClient();
    const {
      user_type,
      firstName,
      lastName,
      streetAddress,
      city,
      province,
      postalCode,
      email,
      password,
    } = req.body;
    const result = await prisma.user.create({
      User: {
        user_type,
        firstName,
        lastName,
        streetAddress,
        city,
        province,
        postalCode,
        email,
        password,
      },
    });
    res.json(result);
  }
}
>>>>>>> origin
