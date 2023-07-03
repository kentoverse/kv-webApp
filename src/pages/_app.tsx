
import "@styles/globals.css";
import type { AppProps } from 'next/app';
import { ThemeContextProvider } from '../hooks/providers/ThemeContext';
import SiteLayout from './layout';
import { PokemonProvider } from '../hooks/providers/PokemonContext';

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
