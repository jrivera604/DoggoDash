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
