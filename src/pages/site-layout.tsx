import { Inter, Roboto_Mono } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { useThemeContext } from '../libs/store/ThemeContext';
import { useEffect } from 'react';
import { HeroNext } from "@components/structure/heroes";
import { CardGroupRow } from "@components/structure/group-items";
import { Header, Main } from '@components/structure/header-main';
import { NavbarFooter, NavbarMenu, NavbarSiteLogo } from "@components/structure/nav-items";

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


export default function SiteLayout({
    children 
}:{
    children: React.ReactNode,
}){

    // const path = usePathname().slice(1);
    const testPage = usePathname().replace("/dashboard/exp/", "");
    const { themeId, setThemeId, data, setData } = useThemeContext();

    useEffect(() => {

    console.log("This is page: - ", testPage);

    setThemeId('theme-mo');
    setData(sampleTheme);
    }, []);


    return (
        <>
            {/* { path != ('dashboard/exp') ? ( */}

            <Header theme={data.name} hide={testPage} fontSans={inter.variable} fontMono={roboto.variable}>

                <HeroNext></HeroNext>
                <NavbarSiteLogo isSiteTitleHidden={true}></NavbarSiteLogo>
                <NavbarMenu></NavbarMenu>
                <NavbarFooter></NavbarFooter>

            </Header>

            <span className="text-xs text-gray-400 font-mono">Themes // {data.name},{data.description},
                {data.color.base},{data.color.inverted}, {data.background.fill},{data.background.image},
                {data.button.action}, {data.button.success},{data.button.size}
            </span>



            <CardGroupRow theme={data.name} hide={testPage} fontSans={inter.variable} fontMono={roboto.variable} />


            <Main theme={data.name} hide={""} fontSans={inter.variable} fontMono={roboto.variable}>

            {children}

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