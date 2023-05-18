import React, { useEffect, useState } from 'react';
import Navbar from '@/src/components/nav.js';
import SignedInNavbar from '@/src/components/signedInNav.js';
import Maps from '@/src/components/maps';
import { useUser } from '@auth0/nextjs-auth0/client';
import Sidebar from '@/src/components/Search/sidebar';
import CenterContainer from '@/src/components/Search/centerContainer';

export default function Search() {
  const { user } = useUser();

  const [filteredCity, setFilteredCity] = useState('');

  const handleSearch = (city) => {
    setFilteredCity(city);
  };

  return (
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
      <div className="container">
        <Sidebar onSearch={handleSearch} />
        <CenterContainer filteredCity={filteredCity} />
        <Maps />
      </div>
    </div>
  );
}
