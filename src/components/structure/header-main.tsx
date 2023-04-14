import { NextFontWithVariable } from "next/dist/compiled/@next/font"
import { ReactPropTypes } from "react"


export function Header({
    children,
    theme,
    fontMono,
    fontSans,
    hide
}: {
    children: React.ReactNode,
    theme: string,
    fontMono: string,
    fontSans: string,
    hide: string
}) {



    return (
        <>
            <header className={`${hide === 'test' ? 'hidden' : ''} ${fontSans} ${fontMono} ${theme}
                w-full mx-auto items-center justify-center h-[320px] md:h-[380px]
                bg-gradient-to-r from-gray-900 to-gray-800`}>

                {children}
            </header>
        </>

    )
}


export function Main({
    children,
    theme,
    fontSans,
    fontMono,
    hide
}: {
    children: React.ReactNode,
    theme: string,
    fontSans: string,
    fontMono: string,
    hide: string,
}) {

return (
<>

    <main className={`${hide === 'pokedex' ? 'hidden' : ''} ${theme} ${fontSans} ${fontMono}
        container md:mx-auto
    `}>


                {children}

                <div>
                <p className="text-gray font-medium font-mono">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse justo est, finibus et pulvinar non, tempus eu ligula.
                </p>
            </div>




    </main>

</>
)
}



export function Footer() {

    return (


        <footer className="grid grid-cols-1 px-12
            md:grid-cols-3 md:gap-4 md:px-24">

            <div>
                <p className="text-gray font-medium font-mono">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse justo est, finibus et pulvinar non, tempus eu ligula.
                </p>
            </div>
            <div>
                <p className="text-gray font-medium font-mono">
                    Mauris eu placerat lorem. Integer aliquam ultrices sem ac luctus.
                    Donec et porttitor lorem. Etiam lacinia dolor ut blandit malesuada.
                </p>
            </div>
            <div>
                <p className="text-gray font-medium font-mono">&copy; 2023 My Website</p>
            </div>
        </footer>
        /* <script src="script.js"></script> */



    )
}





// ${inter.variable} 
/* <header className="header
bg-gradient-to-r from-cyan-500 to-blue-500
items-center mx-auto px-4"> */