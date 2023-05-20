import React, { useEffect, useState } from 'react';
import styles from '../../../styles/centerContainer.module.css';
import axios from 'axios';

const defaultProfileImage =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

export default function CenterContainer({ filteredCity, minRating, maxRating, onDogSittersUpdate }) {
  const [dogSitters, setDogSitters] = useState([]);

  const searchDogSitters = async (city, minRating, maxRating) => {
    try {
      let response = await axios.get(`/api/searchSitters`);
      let filteredDogSitters = response.data;
  
      if (city) {
        filteredDogSitters = filteredDogSitters.filter(
          (dogSitter) => dogSitter.city.toLowerCase() === city.toLowerCase()
        );
      }
  
      const min = minRating !== '' ? parseInt(minRating) : undefined;
      const max = maxRating !== '' ? parseInt(maxRating) : undefined;
  
      filteredDogSitters = filteredDogSitters.filter((dogSitter) => {
        if (min !== undefined && dogSitter.rate < min) {
          return false;
        }
        if (max !== undefined && dogSitter.rate > max) {
          return false;
        }
        return true;
      });
  
      setDogSitters(filteredDogSitters);
    } catch (error) {
      console.error(error);
    }
  };
  
  
  
  
  useEffect(() => {
    searchDogSitters(filteredCity, minRating, maxRating);
  }, [filteredCity, minRating, maxRating]);

  useEffect(() => {
    onDogSittersUpdate(dogSitters);
  }, [dogSitters]);

  return (
    <div className={styles.centerContainer}>
      {dogSitters.map((dogSitter) => (
        <div key={dogSitter.id} className={styles.dogSitterContainer}>
          <div className={styles.profilePictureContainer}>
            <img
              src={defaultProfileImage}
              alt="Profile Picture"
              className={styles.profilePicture}
            />
          </div>
          <div>
            <p className={styles.sitterName}>
              {dogSitter.firstName} {dogSitter.lastName}
            </p>
            <p className={styles.city}>City: {dogSitter.city}</p>
            <div className={styles.rateContainer}>
              <p className={styles.rate}>Rate: ${dogSitter.rate} per night</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
