import React, { useEffect, useState } from 'react';
import styles from '../../../styles/centerContainer.module.css';
import axios from 'axios';

const defaultProfileImage =
  'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';

  export default function CenterContainer({ filteredCity }) {
    const [dogSitters, setDogSitters] = useState([]);
  
    const searchDogSitters = async (city) => {
      let response;
      if (city) {
        response = await axios.get(`/api/searchSitters?city=${city}`);
      } else {
        response = await axios.get(`/api/searchSitters`);
      }
      setDogSitters(response.data);
    };
  
    useEffect(() => {
      // Fetch dog sitters based on the filtered city
      searchDogSitters(filteredCity);
    }, [filteredCity]);

  return (
    <div className={styles.centerContainer}>
      {dogSitters.map((dogSitter) => (
        <a key={dogSitter.id} className={styles.dogSitterContainer} href={`/search/${dogSitter.id}`}>
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
        </a>
      ))}
    </div>
  );
  
}
