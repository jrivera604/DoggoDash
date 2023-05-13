import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: 'Name parameter is required' });
  }

  const sitters = await prisma.user.findMany({
    where: {
      AND: [
        {
          user_type: 'Dog Sitter',
        },
        {
          OR: [
            {
              firstname: {
                contains: name,
                mode: 'insensitive',
              },
            },
            {
              lastname: {
                contains: name,
                mode: 'insensitive',
              },
            },
            {
              AND: [
                {
                  firstname: {
                    contains: name.split(' ')[0],
                    mode: 'insensitive',
                  },
                },
                {
                  lastname: {
                    contains: name.split(' ')[1],
                    mode: 'insensitive',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  });

  res.json(sitters);
}
