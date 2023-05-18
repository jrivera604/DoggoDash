import React, { useState } from 'react';
import styles from '../../../styles/sidebar.module.css';

export default function Sidebar({ onSearch }) {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    onSearch(city);
  };

  return (
    <div className={styles.sidebar}>
      <h1>Filter</h1>
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}