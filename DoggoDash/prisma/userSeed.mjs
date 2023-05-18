import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = 

[
    {
      "userType": "dogSitter",
      "firstName": "Emily",
      "lastName": "Johnson",
      "streetAddress": "789 Maple Street",
      "city": "Vancouver",
      "province": "BC",
      "postalCode": "V6B 2X3",
      "email": "emily.johnson@gmail.com",
      "rate": 18
    },
    {
      "userType": "dogSitter",
      "firstName": "Michael",
      "lastName": "Brown",
      "streetAddress": "321 Oak Avenue",
      "city": "Burnaby",
      "province": "BC",
      "postalCode": "V5H 1Z5",
      "email": "michael.brown@gmail.com",
      "rate": 22
    },
    {
      "userType": "dogSitter",
      "firstName": "Sophia",
      "lastName": "Lee",
      "streetAddress": "456 Elm Street",
      "city": "Richmond",
      "province": "BC",
      "postalCode": "V7C 2T9",
      "email": "sophia.lee@gmail.com",
      "rate": 20
    },
    {
      "userType": "dogSitter",
      "firstName": "Ethan",
      "lastName": "Garcia",
      "streetAddress": "987 Birch Road",
      "city": "Surrey",
      "province": "BC",
      "postalCode": "V3S 2L3",
      "email": "ethan.garcia@gmail.com",
      "rate": 25
    },
    {
      "userType": "dogSitter",
      "firstName": "Olivia",
      "lastName": "Smith",
      "streetAddress": "567 Willow Avenue",
      "city": "Coquitlam",
      "province": "BC",
      "postalCode": "V3B 4J1",
      "email": "olivia.smith@gmail.com",
      "rate": 19
    },

    {
        userType: "dogSitter",
        firstName: "Liam",
        lastName: "Wilson",
        streetAddress: "789 Cedar Lane",
        city: "Vancouver",
        province: "BC",
        postalCode: "V6B 3Y8",
        email: "liam.wilson@gmail.com",
        rate: 21
      },
      {
        userType: "dogSitter",
        firstName: "Isabella",
        lastName: "Martinez",
        streetAddress: "321 Pine Street",
        city: "Burnaby",
        province: "BC",
        postalCode: "V5H 2S7",
        email: "isabella.martinez@gmail.com",
        rate: 24
      },
      {
        userType: "dogSitter",
        firstName: "Noah",
        lastName: "Taylor",
        streetAddress: "456 Spruce Avenue",
        city: "Richmond",
        province: "BC",
        postalCode: "V7C 3T2",
        email: "noah.taylor@gmail.com",
        rate: 19
      },
      {
        userType: "dogSitter",
        firstName: "Mia",
        lastName: "Anderson",
        streetAddress: "987 Oak Street",
        city: "Surrey",
        province: "BC",
        postalCode: "V3S 3L9",
        email: "mia.anderson@gmail.com",
        rate: 23
      },
      {
        userType: "dogSitter",
        firstName: "Aiden",
        lastName: "Gonzalez",
        streetAddress: "567 Elm Avenue",
        city: "Coquitlam",
        province: "BC",
        postalCode: "V3B 4J7",
        email: "aiden.gonzalez@gmail.com",
        rate: 20
      }
  ];

  async function seedUsers() {
    for (let user of users) {
      await prisma.user.create({ data: user });
    }
  }

  seedUsers()
  .catch((error) => {
    console.error(error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  
  