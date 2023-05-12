import '@/styles/globals.css'
import '../styles/tailwind.css' 
import "styles/nav.scss"
import "styles/form.scss"
import { UserProvider } from '@auth0/nextjs-auth0/client';


export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}