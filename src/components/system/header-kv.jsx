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


export default function HeaderKV(props, { children }) {

    const { setTheme = `theme-kv`,
        number = 3,
        label = 'Tailwind' } = props;

    return (
        <>
            <header className={`${setTheme}
            bg-gradient-to-r from-cyan-500 to-blue-500`}>

            <LogoText></LogoText>
            <NavbarMenu></NavbarMenu>
            <NavbarBottom></NavbarBottom>
                
                
                <div className="wrapper">
                </div>


            <HeroNext></HeroNext>

            <ButtonTW number={number} label={label} />
            <ButtonDynamic>STYLED DYNAMIC</ButtonDynamic>
            <ButtonInline theme={theme} label={"INLINE"} ></ButtonInline>
            </header>

          
            {children}

                </>
           
    )
}




// ${inter.variable} 
/* <header className="header
bg-gradient-to-r from-cyan-500 to-blue-500
items-center mx-auto px-4"> */