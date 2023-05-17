import { useUser } from "@auth0/nextjs-auth0/client";
import Navbar from "@/src/components/nav";
import SignedInNavbar from "@/src/components/signedInNav";
import { PrismaClient } from "@prisma/client";
import DogList from "@/src/components/doglist";
import { format } from "date-fns";

export default function PetProfile({ dogs }) {
  console.log(dogs);
  const { user } = useUser();
  return (
    //conditionally renders nav bar based if user exists
    <div>
      {user && (
        <nav>
          <SignedInNavbar />
        </nav>
      )}
      {!user && (
        <nav>
          <Navbar />
        </nav>
      )}
      <a href="/petSignUp">
        <button>Pet Sign Up</button>
      </a>
      <h1>Current Pets</h1>
      <DogList dogs={dogs} />
    </div>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();

  const dogs = await prisma.dog.findMany();

  // const dogs = await prisma.dog.findUnique({ 
  //   where:{
  //     id: 42,
  //   }
  //     });

  const breeds = await prisma.breed.findMany();

  const dogBreed = (id) => {
    for (let breed of breeds) {
      if (breed.id === id) {
        return breed.name;
      }
    }
  };

  const serializedDogs = dogs.map((dog) => {
    return {
      temperament: dog.temperament,
      weight: dog.weight,
      name: dog.name,
      breed: dogBreed(dog.breedId),
      yearOfBirth: format(dog.yearOfBirth, "mm-dd-yyyy"),
    };
  });

  return {
    props: {
      dogs: serializedDogs,
    },
  };
}
