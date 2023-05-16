import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import SignedInNavbar from '@/src/components/signedInNav.js' 
import SignupForm from '@/src/components/signUp/userSignUp';

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    
    user && (
      <div>
       <SignedInNavbar/>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <SignupForm/>
        
      </div>
    )
  );
}