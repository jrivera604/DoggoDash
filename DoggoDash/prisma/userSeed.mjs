import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const users = 

[
    // {
    //   "userType": "dogSitter",
    //   "firstName": "Emily",
    //   "lastName": "Johnson",
    //   "streetAddress": "789 Maple Street",
    //   "city": "Vancouver",
    //   "province": "BC",
    //   "postalCode": "V6B 2X3",
    //   "email": "emily.johnson@gmail.com",
    //   "rate": 30
    // },
    // {
    //   "userType": "dogSitter",
    //   "firstName": "Michael",
    //   "lastName": "Brown",
    //   "streetAddress": "321 Oak Avenue",
    //   "city": "Burnaby",
    //   "province": "BC",
    //   "postalCode": "V5H 1Z5",
    //   "email": "michael.brown@gmail.com",
    //   "rate": 22
    // },
    // {
    //   "userType": "dogSitter",
    //   "firstName": "Sophia",
    //   "lastName": "Li",
    //   "streetAddress": "456 Elm Street",
    //   "city": "Richmond",
    //   "province": "BC",
    //   "postalCode": "V7C 2T9",
    //   "email": "sophia.li@gmail.com",
    //   "rate": 18
    // },
    // {
    //   "userType": "dogSitter",
    //   "firstName": "Ethan",
    //   "lastName": "Garcia",
    //   "streetAddress": "987 Birch Road",
    //   "city": "Surrey",
    //   "province": "BC",
    //   "postalCode": "V3S 2L3",
    //   "email": "ethan.garcia@gmail.com",
    //   "rate": 40
    // },
    // {
    //   "userType": "dogSitter",
    //   "firstName": "Olivia",
    //   "lastName": "Smith",
    //   "streetAddress": "567 Willow Avenue",
    //   "city": "Coquitlam",
    //   "province": "BC",
    //   "postalCode": "V3B 4J1",
    //   "email": "olivia.smith@gmail.com",
    //   "rate": 55
    // },

    // {
    //     userType: "dogSitter",
    //     firstName: "Liam",
    //     lastName: "Wilson",
    //     streetAddress: "789 Cedar Lane",
    //     city: "Vancouver",
    //     province: "BC",
    //     postalCode: "V6B 3Y8",
    //     email: "liam.wilson@gmail.com",
    //     rate: 20
    //   },
    //   {
    //     userType: "dogSitter",
    //     firstName: "Isabella",
    //     lastName: "Martinez",
    //     streetAddress: "321 Pine Street",
    //     city: "Burnaby",
    //     province: "BC",
    //     postalCode: "V5H 2S7",
    //     email: "isabella.martinez@gmail.com",
    //     rate: 29
    //   },
    //   {
    //     userType: "dogSitter",
    //     firstName: "Noah",
    //     lastName: "Taylor",
    //     streetAddress: "456 Spruce Avenue",
    //     city: "Richmond",
    //     province: "BC",
    //     postalCode: "V7C 3T2",
    //     email: "noah.taylor@gmail.com",
    //     rate: 45
    //   },
    //   {
    //     userType: "dogSitter",
    //     firstName: "Mia",
    //     lastName: "Anderson",
    //     streetAddress: "987 Oak Street",
    //     city: "Surrey",
    //     province: "BC",
    //     postalCode: "V3S 3L9",
    //     email: "mia.anderson@gmail.com",
    //     rate: 50
    //   },
    //   {
    //     userType: "dogSitter",
    //     firstName: "Aiden",
    //     lastName: "Gonzalez",
    //     streetAddress: "567 Elm Avenue",
    //     city: "Coquitlam",
    //     province: "BC",
    //     postalCode: "V3B 4J7",
    //     email: "aiden.gonzalez@gmail.com",
    //     rate: 27
    //   },

    //   {
    //     userType: "dogSitter",
    //     firstName: "Emma",
    //     lastName: "Robinson",
    //     streetAddress: "123 Oak Street",
    //     city: "Burnaby",
    //     province: "BC",
    //     postalCode: "V5G 2B3",
    //     email: "emma.robinson@gmail.com",
    //     rate: 25
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Liam",
    //     lastName: "Nguyen",
    //     streetAddress: "789 Maple Avenue",
    //     city: "Richmond",
    //     province: "BC",
    //     postalCode: "V6Y 1R2",
    //     email: "liam.nguyen@gmail.com",
    //     rate: 18
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Olivia",
    //     lastName: "Liu",
    //     streetAddress: "456 Elm Street",
    //     city: "Surrey",
    //     province: "BC",
    //     postalCode: "V3S 6A7",
    //     email: "olivia.liu@gmail.com",
    //     rate: 22
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Noah",
    //     lastName: "Chen",
    //     streetAddress: "321 Cedar Road",
    //     city: "North Vancouver",
    //     province: "BC",
    //     postalCode: "V7P 1T6",
    //     email: "noah.chen@gmail.com",
    //     rate: 34
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Ava",
    //     lastName: "Singh",
    //     streetAddress: "890 Birch Lane",
    //     city: "Coquitlam",
    //     province: "BC",
    //     postalCode: "V3B 5K9",
    //     email: "ava.singh@gmail.com",
    //     rate: 47
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Isabella",
    //     lastName: "Wong",
    //     streetAddress: "567 Oak Avenue",
    //     city: "Burnaby",
    //     province: "BC",
    //     postalCode: "V5G 3N8",
    //     email: "isabella.wong@gmail.com",
    //     rate: 26
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Sophia",
    //     lastName: "Patel",
    //     streetAddress: "234 Cedar Street",
    //     city: "Richmond",
    //     province: "BC",
    //     postalCode: "V6Y 2M4",
    //     email: "sophia.patel@gmail.com",
    //     rate: 21
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Charlotte",
    //     lastName: "Kim",
    //     streetAddress: "901 Maple Road",
    //     city: "Surrey",
    //     province: "BC",
    //     postalCode: "V3S 9L1",
    //     email: "charlotte.kim@gmail.com",
    //     rate: 24
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Mia",
    //     lastName: "Gupta",
    //     streetAddress: "678 Birch Lane",
    //     city: "North Vancouver",
    //     province: "BC",
    //     postalCode: "V7P 2K5",
    //     email: "mia.gupta@gmail.com",
    //     rate: 18
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Liam",
    //     lastName: "Johnson",
    //     streetAddress: "123 Oak Street",
    //     city: "Coquitlam",
    //     province: "BC",
    //     postalCode: "V3B 4J7",
    //     email: "liam.johnson@gmail.com",
    //     rate: 20
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Ethan",
    //     lastName: "Wilson",
    //     streetAddress: "456 Elm Avenue",
    //     city: "Toronto",
    //     province: "ON",
    //     postalCode: "M4B 1V2",
    //     email: "ethan.wilson@gmail.com",
    //     rate: 50
    //     },

    //     {
    //     userType: "dogSitter",
    //     firstName: "Sophia",
    //     lastName: "Lee",
    //     streetAddress: "789 Maple Street",
    //     city: "Mississauga",
    //     province: "ON",
    //     postalCode: "L5B 2C9",
    //     email: "sophia.lee@gmail.com",
    //     rate: 23
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Liam",
    //     lastName: "Jackson",
    //     streetAddress: "234 Oak Road",
    //     city: "Brampton",
    //     province: "ON",
    //     postalCode: "L6T 1R7",
    //     email: "liam.jackson@gmail.com",
    //     rate: 29
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Emma",
    //     lastName: "Taylor",
    //     streetAddress: "567 Cedar Lane",
    //     city: "Markham",
    //     province: "ON",
    //     postalCode: "L3R 3P9",
    //     email: "emma.taylor@gmail.com",
    //     rate: 30
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Noah",
    //     lastName: "Martinez",
    //     streetAddress: "890 Birch Avenue",
    //     city: "Vaughan",
    //     province: "ON",
    //     postalCode: "L4K 5R6",
    //     email: "noah.martinez@gmail.com",
    //     rate: 19
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Olivia",
    //     lastName: "Gonzalez",
    //     streetAddress: "321 Maple Street",
    //     city: "Richmond Hill",
    //     province: "ON",
    //     postalCode: "L4B 3P7",
    //     email: "olivia.gonzalez@gmail.com",
    //     rate: 21
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Liam",
    //     lastName: "Smith",
    //     streetAddress: "901 Elm Road",
    //     city: "Oakville",
    //     province: "ON",
    //     postalCode: "L6H 6P1",
    //     email: "liam.smith@gmail.com",
    //     rate: 32
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Ava",
    //     lastName: "Anderson",
    //     streetAddress: "678 Cedar Lane",
    //     city: "Whitby",
    //     province: "ON",
    //     postalCode: "L1N 5W8",
    //     email: "ava.anderson@gmail.com",
    //     rate: 20
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Oliver",
    //     lastName: "Clark",
    //     streetAddress: "123 Oak Avenue",
    //     city: "Ajax",
    //     province: "ON",
    //     postalCode: "L1S 6L9",
    //     email: "oliver.clark@gmail.com",
    //     rate: 31
    //     },
        
    //     {
    //     userType: "dogSitter",
    //     firstName: "Charlotte",
    //     lastName: "Robinson",
    //     streetAddress: "456 Elm Street",
    //     city: "Pickering",
    //     province: "ON",
    //     postalCode: "L1V 1X6",
    //     email: "charlotte.robinson@gmail.com",
    //     rate: 34
    //     },


        // {
        //   userType: "dogSitter",
        //   firstName: "Emily",
        //   lastName: "Smith",
        //   streetAddress: "789 Oak Street",
        //   city: "Vancouver",
        //   province: "BC",
        //   postalCode: "V6B 2X3",
        //   email: "emily.smith@gmail.com",
        //   rate: 28,
        // },
        // {
        //   userType: "dogSitter",
        //   firstName: "Jackson",
        //   lastName: "Wilson",
        //   streetAddress: "321 Cedar Lane",
        //   city: "Vancouver",
        //   province: "BC",
        //   postalCode: "V5H 1Z5",
        //   email: "jackson.wilson@gmail.com",
        //   rate: 30,
        // },
        // {
        //   userType: "dogSitter",
        //   firstName: "Sophie",
        //   lastName: "Johnson",
        //   streetAddress: "456 Elm Avenue",
        //   city: "Vancouver",
        //   province: "BC",
        //   postalCode: "V7C 2T9",
        //   email: "sophie.johnson@gmail.com",
        //   rate: 26,
        // },
        // {
        //   userType: "dogSitter",
        //   firstName: "Oliver",
        //   lastName: "Brown",
        //   streetAddress: "987 Maple Street",
        //   city: "Vancouver",
        //   province: "BC",
        //   postalCode: "V3S 2L3",
        //   email: "oliver.brown@gmail.com",
        //   rate: 32,
        // },
        // {
        //   userType: "dogSitter",
        //   firstName: "Ella",
        //   lastName: "Garcia",
        //   streetAddress: "567 Pine Avenue",
        //   city: "Vancouver",
        //   province: "BC",
        //   postalCode: "V3B 4J1",
        //   email: "ella.garcia@gmail.com",
        //   rate: 29,
        // },

        {
          userType: "dogSitter",
          firstName: "Liam",
          lastName: "Anderson",
          streetAddress: "123 Elm Street",
          city: "Vancouver",
          province: "BC",
          postalCode: "V6K 2A2",
          email: "liam.anderson@gmail.com",
          rate: 31,
        },
        {
          userType: "dogSitter",
          firstName: "Ava",
          lastName: "Wilson",
          streetAddress: "456 Oak Avenue",
          city: "Vancouver",
          province: "BC",
          postalCode: "V6J 1G8",
          email: "ava.wilson@gmail.com",
          rate: 27,
        },
        {
          userType: "dogSitter",
          firstName: "Oliver",
          lastName: "Garcia",
          streetAddress: "789 Maple Street",
          city: "Vancouver",
          province: "BC",
          postalCode: "V6R 1V3",
          email: "oliver.garcia@gmail.com",
          rate: 33,
        },
        {
          userType: "dogSitter",
          firstName: "Sophie",
          lastName: "Brown",
          streetAddress: "321 Cedar Lane",
          city: "Vancouver",
          province: "BC",
          postalCode: "V6R 1V9",
          email: "sophie.brown@gmail.com",
          rate: 28,
        },
        {
          userType: "dogSitter",
          firstName: "Jackson",
          lastName: "Smith",
          streetAddress: "987 Elm Avenue",
          city: "Vancouver",
          province: "BC",
          postalCode: "V6R 2E2",
          email: "jackson.smith@gmail.com",
          rate: 30,
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

  
  