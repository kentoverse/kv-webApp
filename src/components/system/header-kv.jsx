import LogoText from "@components/cells/logo-text";
import NavbarMenu from "@components/organism/navbar-menu";
import NavbarBottom from "@components/organism/navbar-bottom";
import HeroNext from "@components/organism/hero-next";
import { ButtonDynamic, ButtonInline } from "@components/atoms/button-styled"
import ButtonTW from "@components/atoms/button-tw";


const theme = {
    buttonColor: 'bg-gradient-to-r from-cyan-500 to-blue-500',
    buttonSize: 'mx-auto px-4'
}



export default function HeaderKV(props, {children}) {

    const { setTheme = "theme-bv", 
            number = 3, 
            label = 'Tailwind' } = props;

    return (
        <>
        <div className={`${setTheme}`}> 
            <header className="header 
                items-center mx-auto px-4">

                <div className="wrapper">
                <LogoText></LogoText>
                <NavbarMenu></NavbarMenu>
                <NavbarBottom></NavbarBottom>
                </div>

                <HeroNext></HeroNext>
                <ButtonTW number={number} label={label} />
                <ButtonDynamic>STYLED DYNAMIC</ButtonDynamic>
                <ButtonInline theme={theme} label={"INLINE"} ></ButtonInline>
            </header>

            {children}
        </div>

        </>
    )
}


// ${inter.variable} 
{/* <header className="header
bg-gradient-to-r from-cyan-500 to-blue-500
items-center mx-auto px-4"> */}