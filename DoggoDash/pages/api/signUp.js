<<<<<<< HEAD
=======
import { PrismaClient } from "@prisma/client"

// export default async function handler(req, res) {
// //res.status(200).json({ name: 'John Doe' })
//     if(req.method === "POST") {
//         const prisma = new PrismaClient()
//         const data = req.body
//         console.log(data)
//         console.log(prisma.user)
//     }
// }
  

>>>>>>> 8f75ca4cd4a142528afdb535bd49fc8b943717be
export default async function handler(req, res) {
  if (req.method === "POST") {
    const prisma = new PrismaClient();
    console.log(req.body);
    const userType = req.body.data.userType;
    const firstName = req.body.data.firstName;
    const lastName = req.body.data.lastName;
    const streetAddress = req.body.data.streetAddress;
    const city = req.body.data.city;
    const postalCode = req.body.data.postalCode;
    const province = req.body.data.province;
    const email = req.body.data.email;
    const password = req.body.data.password;
    const user = await prisma.user.create({
      data: {
        userType,
        firstName,
        lastName,
        streetAddress,
        city,
        postalCode,
        province,
        email,
        password,
      },
    });
  }
}
