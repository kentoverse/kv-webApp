import { NextFontWithVariable } from "next/dist/compiled/@next/font"
import { ReactPropTypes } from "react"


export default function Header({
    children,
    theme,
    fontSans,
    fontMono,
}: {
    children: React.ReactNode,
    theme: string,
    fontSans: string,
    fontMono: string,
}) {



    return (
<>
    <header className={`${theme} ${fontSans} ${fontMono}
    relative flex w-full min-h-screen h-80 mx-auto px-4 items-center justify-center
    bg-gradient-to-r from-gray-800 to-gray-100
    `}>  
                {children}
    </header>
</>

    )
}




// ${inter.variable} 
/* <header className="header
bg-gradient-to-r from-cyan-500 to-blue-500
items-center mx-auto px-4"> */