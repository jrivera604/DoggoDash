import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

module.exports = async (req, res) => {
  try {
    const { email, secret } = JSON.parse(req.body);

    if (secret === process.env.AUTH0_HOOK_SECRET) {
      const user = await prisma.user.create({
        data: { email },
      });

      console.log("created user");
    } else {
      console.log("You forgot to send me your secret!");
    }
  } catch (err) {
    console.log(err);
  } finally {
    await prisma.$disconnect();

    res.send({ received: true });
  }
}