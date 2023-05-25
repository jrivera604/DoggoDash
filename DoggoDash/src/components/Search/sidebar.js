import React, { useState } from 'react';
import styles from '../../../styles/sidebar.module.css';

//Sidebar city search filter and min/max filter
export default function Sidebar({ onSearch }) {
  const [city, setCity] = useState('');
  const [minRating, setMinRating] = useState(1);
  const [maxRating, setMaxRating] = useState(200);

  const handleSearch = () => {
    onSearch(city, parseInt(minRating), parseInt(maxRating));
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
      <div>
        <label>Min Rating:</label>
        <input
          type="number"
          value={minRating}
          onChange={(e) => setMinRating(e.target.value)}
        />
      </div>
      <div>
        <label>Max Rating:</label>
        <input
          type="number"
          value={maxRating}
          onChange={(e) => setMaxRating(e.target.value)}
        />
      </div>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
