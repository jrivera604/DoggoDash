import { PrismaClient } from '@prisma/client'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const prisma = new PrismaClient()
    const data = req.body

    const user = await prisma.user.findUnique({
      where: {
        email: data.email,
      },
    })

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    if (user.password !== data.password) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    return res.status(200).json({ message: 'Login successful' })
  }
}
