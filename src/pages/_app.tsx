import "@styles/globals.css";
import type { AppProps } from 'next/app';
import { ThemeContextProvider } from '../libs/stores/ThemeContext';
import SiteLayout from './layout';
import { PokemonProvider } from '../libs/stores/PokemonContext';

console.log("FireBase--->", process.env.FIREBASE_API_KEY);

export default function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <ThemeContextProvider>


        <PokemonProvider pokemon={pageProps.pokemon}>

          <SiteLayout pageData={pageProps.pageData}>
            <Component {...pageProps} />
          </SiteLayout>
        </PokemonProvider>
      </ThemeContextProvider>
    </>
  )
}
