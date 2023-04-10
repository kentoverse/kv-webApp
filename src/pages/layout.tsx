import MainKV from "@components/template/main-kv";
import HeaderKV from '@components/template/header-kv';
import { usePathname } from 'next/navigation';
import { useThemeContext } from '../libs/store/ThemeContext';
import { useEffect } from 'react';
import LogoText from "@components/cells/logo-text";
import NavbarMenu from "@components/organs/navbar-menu";
import NavbarBottom from "@components/organs/navbar-bottom";
import HeroNext from "@components/organs/hero-next";
import { ButtonDynamic, ButtonInline } from "@components/atoms/button-styled";
import CardGroup from "@components/organs/card-group";

export default function Layout ({
    children }:{ 
    children: React.ReactNode,
}){
    const pageName = usePathname().slice(1);
    const { themeId, setThemeId, data, setData } = useThemeContext();
    
     useEffect(() => {
        console.log("This is page: ", pageName);
        setThemeId('theme-no');
        setData(sampleTheme);
     }, []);

return (
     <>
        <HeaderKV theme={data.name}>
            <LogoText title={undefined}></LogoText>
            <NavbarMenu ></NavbarMenu>

            <NavbarBottom></NavbarBottom>
            <HeroNext color={data.color} children={undefined}></HeroNext>
        </HeaderKV>

        {/* <CardGroup color={""} children={undefined}></CardGroup> */}

        <MainKV theme={"theme-no"}>

        {children}

            <p>Theme Details : {themeId}

            <span className="text-sm">
                {data.name},{data.description},{data.color.base},{data.color.inverted},
                {data.background.fill},{data.background.image},{data.button.action},
                {data.button.success},{data.button.size} 
            </span></p>

            {/* <div className="noWrapper">
                    <ButtonDynamic>STYLED DYNAMIC</ButtonDynamic>
                    <ButtonInline theme={data.button} label={"INLINE"} ></ButtonInline>
            </div> */}
    
        </MainKV>
    </>
 )
}

export const sampleTheme =
    {
        name: "theme-no",
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


