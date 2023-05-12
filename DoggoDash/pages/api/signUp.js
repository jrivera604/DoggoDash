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
  