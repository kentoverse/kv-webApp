import React from 'react'
import HeroCall2Action from "@components/organs/hero-call2action";
import {AlertLink } from "@components/common/alerts";
import { ButtonAccent, ButtonMuted } from "@components/common/buttons";

import kvFont from 'next/font/local';

const myFont = kvFont({
  src: '../../../public/font/AvenirBlack.ttf',
  display: 'swap'
});



export default function AboutUs ({
  children, 
}:{ children : React.ReactNode,
}){

  const size = 'lg';
return ( 
  <>
{/* <h2 className={`${myFont.className} text-4xl text-[#f52040] ls-`}>kentoverse</h2>
<h2 className={`text-4xl text-red`}>Test here</h2>
<h2 className="text-3xl font-bold text-skin-base">Color</h2> */}

{/* <button type="button" 
className={ size === 'lg' ? 'mt-[22px]' : 'mt-[17px]' }>
  Component Success</button> */}

{/* <AlertLink type={undefined} message={'ALERT Success!'} href={'#'}
linkText={'Go to Link'}/> */}


{/* 
<ButtonMuted type={undefined} label={'MUTED'} onClick={undefined}
theme={'theme-mo'} isLink={true} href={'https://google.com'}/> */}

{/* <ButtonAccent type={'button'} label={'ACCENT'}
onClick={undefined} theme={'theme-neo'}
isLink={true} href={'https://google.com'}/> */}

{/* <ButtonAlert type={'success'} label={'ALERT'}
onClick={undefined} theme={'theme-neo'} 
isLink={false} href={undefined}></ButtonAlert> */}

<div>{children}</div>


<HeroCall2Action></HeroCall2Action>

  </>

)}

