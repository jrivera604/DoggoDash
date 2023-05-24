import React, { useEffect, useState } from "react";
import styles from "../../../styles/centerContainer.module.css";
import axios from "axios";
import Link from "next/link";
import { StarIcon } from "@heroicons/react/20/solid";
import MyLoader from "../myLoader";

export default function CenterContainer({
  filteredCity,
  minRating,
  maxRating,
  onDogSittersUpdate,
  selectedDogSitterId, // New prop to track the selected dog sitter
}) {
  const [dogSitters, setDogSitters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const searchDogSitters = async (city, minRating, maxRating) => {
    try {
      setIsLoading(true); // Set loading state to true while data is being fetched

      let response = await axios.get(`/api/searchSitters`);
      let filteredDogSitters = response.data;

      if (city) {
        filteredDogSitters = filteredDogSitters.filter(
          (dogSitter) => dogSitter.city.toLowerCase() === city.toLowerCase()
        );
      }

      const min = minRating !== "" ? parseInt(minRating) : undefined;
      const max = maxRating !== "" ? parseInt(maxRating) : undefined;

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
      setIsLoading(false); // Set loading state to false once data is fetched
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

  const defaultProfileImage =
    "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg";

  return (
    <div className={styles.centerContainer}>
      {isLoading ? (
        <>
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
          <MyLoader />
        </>
      ) : (
        dogSitters.map((dogSitter) => (
          <Link
            key={dogSitter.id}
            id={dogSitter.id}
            className={`${styles.dogSitterContainer} ${
              selectedDogSitterId === dogSitter.id ? styles.selected : ""
            }`}
            href={`/search/${dogSitter.id}`}
          >
            <div className={styles.profilePictureContainer}>
              <img
                src={dogSitter.profilePicture}
                alt="Profile Picture"
                className={styles.profilePicture}
              />
            </div>
            <div>
              <p
                className={`${styles.sitterName} ${
                  selectedDogSitterId === dogSitter.id ? styles.selectedName : ""
                }`}
              >
                <span>{dogSitter.firstName}</span> {dogSitter.lastName}
              </p>
              <p className={styles.city}>City: {dogSitter.city}</p>
              <div className={styles.rateContainer}>
                <p className={styles.rate}>Rate: ${dogSitter.rate} per night</p>
              </div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => {
                  const starClassName =
                    dogSitter.rating > rating ? "text-yellow-400" : "text-gray-400";

                  return (
                    <StarIcon
                      key={rating}
                      className={classNames(starClassName, "h-5 w-5 flex-shrink-0")}
                      aria-hidden="true"
                    />
                  );
                })}
              </div>
              <p className={styles.description}>"{dogSitter.description}"</p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
