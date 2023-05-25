import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import SignedInNavbar from '@/src/components/signedInNav.js' 
import SignupForm from '@/src/components/signUp/userSignUp';
import { PrismaClient } from "@prisma/client";

export default function Profile({ userProfiles }) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    
    (
      <div>
       <SignedInNavbar/>
        <SignupForm userProfiles={userProfiles} />
        
      </div>
    )
  );
} 

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const userProfiles = await prisma.user.findMany();

  return {
    props: { userProfiles },
  };
}
