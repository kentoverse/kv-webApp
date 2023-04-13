import "@styles/globals.css";

import type { AppProps } from 'next/app';
import { ThemeContextProvider } from '../libs/store/ThemeContext';
import SiteLayout from './site-layout';
import StyledJsxRegistry from "@styles/registry";
import { PokemonProvider } from "../libs/store/PokemonContext";
import { QueryClient, QueryClientProvider } from 'react-query';


export const queryClient = new QueryClient();

console.log("FireBase--->", process.env.FIREBASE_API_KEY);

export default function App({ Component, pageProps } : AppProps) {


  return (
    <>
      
      <ThemeContextProvider>
        <SiteLayout>
        <PokemonProvider pokemon={pageProps.pokemon}>
          <QueryClientProvider client={queryClient}>  

            <Component {...pageProps} />

          </QueryClientProvider>
          </PokemonProvider>
        </SiteLayout>
      </ThemeContextProvider>

 
    </>
  )
}
