import HeaderKV from '@components/system/header-kv';
import DashboardKV from "@components/system/dashboard-kv";
import "@styles/globals.css"
import type { AppProps } from 'next/app'
import { useState } from 'react';
import ThemeContext from '../libs/store/ThemeContext';


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
