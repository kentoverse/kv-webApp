import "@styles/globals.css";
import type { AppProps } from 'next/app';
import { ThemeContextProvider } from '../libs/store/ThemeContext';
import SiteLayout from './site-layout';
import { PokemonProvider } from "../libs/store/PokemonContext";


console.log("FireBase--->", process.env.FIREBASE_API_KEY);

export default function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <ThemeContextProvider>
        <PokemonProvider pokemon={pageProps.pokemon}>
          <SiteLayout>
            <Component {...pageProps} />
          </SiteLayout>
        </PokemonProvider>
      </ThemeContextProvider>
    </>
  )
}
