import { Inter, Roboto_Mono } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { useThemeContext } from '../libs/store/ThemeContext';
import { useEffect } from 'react';
import { HeroNext} from "@components/structure/hero-banners";
import { CardGroupRow } from "@components/structure/grid-items";
import {Header, Main} from '@components/structure/header-main';
import { NavbarFooter, NavbarMenu, NavbarSiteLogo } from "@components/structure/navigation-items";

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


export default function SiteLayout ({
    children }: {
        children: React.ReactNode,
    }) {
    const pageName = usePathname().slice(1);
    const { themeId, setThemeId, data, setData } = useThemeContext();

    useEffect(() => {
        console.log("This is page: ", pageName);
        setThemeId('theme-mo');
        setData(sampleTheme);
    }, []);



return (
<>
  
        <Header theme={data.name} font={roboto.variable}>
            
            <HeroNext></HeroNext>
            <NavbarSiteLogo children={undefined} isSiteTitleHidden={true}></NavbarSiteLogo>
            <NavbarMenu children={undefined}></NavbarMenu>
            <NavbarFooter children={undefined}></NavbarFooter>
            
        </Header>


        <CardGroupRow fontSans={inter.variable} fontMono={roboto.variable} theme={data.name} children={undefined} />


        <Main theme={data.name} fontSans={inter.variable} fontMono={roboto.variable}>

{children}

        {/* // Section */}
            <p className="text-gold2 rounded-md p-3 font-mono">Theme Details : {themeId}
                <span className="text-sm">
                    {data.name},{data.description},{data.color.base},{data.color.inverted},
                    {data.background.fill},{data.background.image},{data.button.action},
                    {data.button.success},{data.button.size}
                </span>
            </p>

        </Main>
  
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