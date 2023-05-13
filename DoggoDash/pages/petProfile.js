import { useUser } from '@auth0/nextjs-auth0/client';
import Navbar from "@/src/components/nav.js";
import SignedInNavbar from "@/src/components/signedInNav.js";

export default function PetProfile() {
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
          <Navbar/>
        </nav>
      )}
    </div>
  );
}

