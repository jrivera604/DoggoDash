import React, { useState } from 'react';
import styles from "@/styles/index.module.css";
import { PrismaClient } from "@prisma/client";
import Navbar from "@/src/components/nav.js";
import SignedInNavbar from "@/src/components/signedInNav.js";
import { useUser } from "@auth0/nextjs-auth0/client";



export default function Home() {
  const [dogWeight, setDogWeight] = useState(40);

  const handleDogWeightChange = (event) => {
    setDogWeight(event.target.value);
  };
  const { user } = useUser();
  console.log(user)
  return (
    <>
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
      <div className={styles["form-container"]}>
        <div className={styles.card}>
          <form>
            <div className={styles["form-row"]}>
              <label htmlFor="zipCode" className={styles.label}>
                Zip Code:
              </label>
              <input
                type="text"
                id="zipCode"
                className={styles["form-input"]}
              />
            </div>
            <div className={styles["form-row"]}>
              <label htmlFor="calendar" className={styles.label}>
                Days:
              </label>
              <input
                type="text"
                id="calendar"
                className={styles["form-input"]}
              />
            </div>
            <div className={styles["form-row"]}>
              <label htmlFor="dogWeight" className={styles.label}>
                Dog Weight: {dogWeight}lb
              </label>
              <input
                type="range"
                id="dogWeight"
                min={15}
                max={100}
                value={dogWeight}
                onChange={handleDogWeightChange}
                className={`${styles["form-input"]} ${styles["range-input"]}`}
              />
            </div>
            <div className={styles["form-row"]}>
              <label htmlFor="ratings" className={styles.label}>
                Ratings:
              </label>
              <input
                type="number"
                id="ratings"
                className={styles["form-input"]}
              />
            </div>
            <div className={styles["form-row"]}>
              <label htmlFor="city" className={styles.label}>
                City:
              </label>
              <input
                type="text"
                id="city"
                className={styles["form-input"]}
              />
            </div>
            <button type="submit" className={styles["submit-button"]}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

