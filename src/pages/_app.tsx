import "@styles/globals.css";
import type { AppProps } from 'next/app';
import { ThemeContextProvider } from '../libs/store/ThemeContext';
import Layout from './layout';

console.log("FireBase--->", process.env.FIREBASE_API_KEY);

export default function App({ Component, pageProps } : AppProps) {


  return (
    <>
      <ThemeContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeContextProvider>
    </>
  )
}
