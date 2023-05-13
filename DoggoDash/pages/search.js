import React from "react";
import Navbar from "@/src/components/nav.js";
import SignedInNavbar from "@/src/components/signedInNav.js";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Search() {
  const { user } = useUser();

  return (
    //conditionally renders nav bar based if user exists
    
    <div>
      <Search />
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
    </div>
  );
}
