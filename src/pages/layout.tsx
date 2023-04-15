import { Inter, Roboto_Mono, Bitter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { useThemeContext } from '../libs/store/ThemeContext';
import { useEffect } from 'react';

import { HeroNext } from "@components/template/heroes";
import { CardGroupRow } from "@components/template/group-items";
import { NavFloater, NavMenu, NavLogo } from "@components/template/nav-items";

const inter = Inter({
    variable: '--font-inter',
    display: 'swap',
    subsets: ['latin'],
});

const roboto = Roboto_Mono({
    variable: '--font-roboto-mono',
    display: 'swap',
    subsets: ['latin'],
});

const bitter = Bitter({
    variable: '--font-bitter',
    display: 'swap',
    subsets: ['latin'],
});


export default function SiteLayout({
    children
}: {
    children: React.ReactNode,
    pageData: any
}) {

    // const path = usePathname().slice(1);
    const testPage: any = usePathname()?.replace("/dashboard/fetch/", "");
    const { themeId, setThemeId, data, setData } = useThemeContext();
    console.log("useRouter obj ---",)

useEffect(() => {
    console.log("This is page: - ", testPage);

    setThemeId('theme-mo');
    setData(sampleTheme);
}, []);





    return (
        <>


            <header className={`${data.name === 'test' ? 'hidden' : ''} 
                    ${inter.variable} ${roboto.variable} ${data.name}
            w-full mx-auto items-center justify-center h-[320px] md:h-[380px]
            bg-gradient-to-r from-gray-900 to-gray-800`}>

                <HeroNext></HeroNext>
                <NavLogo isSiteTitleHidden={true}></NavLogo>
                <NavMenu></NavMenu>


            </header>

            <NavFloater></NavFloater>

            <span className="text-xs text-gray-400 font-mono">Themes // {data.name},{data.description},
                {data.color.base},{data.color.inverted}, {data.background.fill},{data.background.image},
                {data.button.action}, {data.button.success},{data.button.size}
            </span>

            <CardGroupRow theme={data.name} hide={testPage} fontSans={inter.variable} fontMono={roboto.variable} />



            <main className={`${data.name === 'pokedex' ? 'hidden' : ''} 
                  ${data.name} ${inter.variable} ${bitter.variable}
        container md:mx-auto `}>



                {children}

            </main>





        </>
    )
}



export const sampleTheme =
{
    name: "theme-mo",
    description: "nice theme by Marc",
    color: {
        base: "#f2340a",
        inverted: "#f5e3df",
    },
    background: {
        fill: "#5b0ced",
        image: "/img/sample.png",
    },
    button: {
        action: "bg-gradient-to-r from-cyan-500 to-blue-500",
        success: '#0aeaf2',
        size: "mx-auto px-4",
    }
}



{/* <div className="noWrapper">
                    <ButtonDynamic>STYLED DYNAMIC</ButtonDynamic>
                    <ButtonInline theme={data.button} label={"INLINE"} ></ButtonInline>
            </div> */}



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
)}

