import { PrismaClient } from '@prisma/client'
import cookieSession from 'cookie-session'

const prisma = new PrismaClient()

const session = cookieSession({
  name: 'cookie-session',
  keys: ['secret'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
})

export default async function handler(req, res) {
  await new Promise((resolve, reject) => {
    session(req, res, resolve)
  })

  if (req.method === 'POST') {
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

    // set user ID in session cookie
    req.session.userId = user.id

    return res.status(200).json({ message: 'Login successful' })
  }
}
