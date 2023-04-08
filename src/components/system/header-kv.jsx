import LogoText from "@components/cells/logo-text";
import NavbarMenu from "@components/organism/navbar-menu";
import NavbarBottom from "@components/organism/navbar-bottom";
import HeroNext from "@components/organism/hero-next";
import ButtonFillSet from "@components/atoms/button-fillSet";

export default function HeaderKV ({ children }){

    const theme = "kv-theme";

    return (
        <>
            <header className={`${theme} relative bg-fill flex min-h-screen flex-col items-center justify-between p-24`}>
                <div className="wrapper z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
                <LogoText></LogoText>
                <NavbarMenu numbwe={2} label={"Action"}></NavbarMenu>
                <NavbarBottom></NavbarBottom>
                </div>
                <HeroNext></HeroNext>
                <ButtonFillSet number={5} label={"Marc"}/>
              </header>
            {children}
        </>
    )
}


// ${inter.variable} 
