import Main from "@components/structure/main";
import Header from '@components/structure/header';
import { usePathname } from 'next/navigation';
import { useThemeContext } from '../libs/store/ThemeContext';
import { useEffect } from 'react';
import LogoText from "@components/structure/logo-text";
import {HeroNext} from "@components/structure/hero-banner";
import CardGroup from "@components/structure/card-group";
import { NavbarBottom, NavbarTop } from "@components/structure/navbars";
import { Inter, Roboto_Mono } from 'next/font/google';

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


export default function MainLayout({
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
    <div>
        <Header theme={data.name} fontSans={inter.variable} fontMono={roboto.variable}>
            <HeroNext></HeroNext>
            <LogoText children={undefined} isSiteTitleHidden={true}></LogoText>
            <NavbarTop children={undefined}></NavbarTop>
            <NavbarBottom children={undefined}></NavbarBottom>
        </Header>

        <CardGroup fontSans={inter.variable} fontMono={roboto.variable} theme={data.name} children={undefined} />

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
    </div>
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