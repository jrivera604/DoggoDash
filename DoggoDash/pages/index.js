import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { PrismaClient } from "@prisma/client";
import Navbar from "@/src/components/nav.js";
import SignedInNavbar from "@/src/components/signedInNav.js";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user } = useUser();
  return (
    <div>
      <Head>
        <title>DoggoDash - Home</title>
        <meta name="description" content="Dog Sitting Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* //conditionally renders nav bar based if user exists */}
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
      

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">DoggoDash</a>
        </h1>

        <p className={styles.description}>
          Get started by searching for a dog sitter near you!
        </p>

        <div className={styles.grid}>
          <a href="/search" className={styles.card}>
            <h3>Search &rarr;</h3>
            <p>Find dog sitters near you</p>
          </a>

          <a href="/api/auth/login" className={styles.card}>
            <h3>Sign In &rarr;</h3>
            <p>Already have an account? Sign in here</p>
          </a>

          <a href="/signUp" className={styles.card}>
            <h3>Sign Up &rarr;</h3>
            <p>Create a new account and start dog sitting</p>
          </a>
        </div>
      </main>
    </div>
  );
}

<<<<<<< HEAD


=======
<<<<<<< HEAD


=======
// export async function getStaticProps() {
//   const prisma = new PrismaClient()
//   const blogs = await prisma.blog.any()

//   return {
//     props : { blogs }
//   }
// }
>>>>>>> 8f75ca4cd4a142528afdb535bd49fc8b943717be
>>>>>>> main
