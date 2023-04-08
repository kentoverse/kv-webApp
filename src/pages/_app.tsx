import HeaderKV from '@components/system/header-kv';
import "@styles/globals.css"
import type { AppProps } from 'next/app'
import { useState } from 'react';

console.log("FireBase-------->", process.env.FIREBASE_API_KEY);


export default function App({ Component, pageProps }: AppProps) {

  const [themeContext, setThemeContext] = useState('default');



  return (
    <>
      <HeaderKV>
        <Component {...pageProps} />
      </HeaderKV>
    </>


  )
}
