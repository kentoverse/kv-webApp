
import "@styles/globals.css";
import type { AppProps } from 'next/app';
import { ThemeContextProvider } from '../hooks/providers/ThemeContext';
import MainFrame from '@pages/frame';
import { DataProvider } from '../hooks/providers/DataContext';

console.log("FireBase--->", process.env.FIREBASE_API_KEY);

export default function App({ Component, pageProps }: AppProps) {


  return (
    <>
      <ThemeContextProvider>
        <DataProvider pokemon={pageProps.pokemon}>
          <MainFrame pageData={pageProps.pageData}>
            <Component {...pageProps} />
          </MainFrame>
        </DataProvider>
      </ThemeContextProvider>
    </>
  )
}
