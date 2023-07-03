
import { useEffect, useState } from 'react';
import { Inter, Roboto_Mono, Bitter } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { useThemeContext } from '../hooks/providers/ThemeContext';
import { HeroNext } from "@components/ui/heroes";
import { CardGroupRow } from "@components/ui/group-items";
import { NavFloater, NavMenu, NavLogo } from "@components/ui/nav-items";
import { basic } from "../helper/data/themes";
import { Modal } from '@components/ui/modals';

console.log('Basic --', basic);


export default function MainFrame ({
    children
}: {
    children: React.ReactNode,
    pageData: any
}) {
    // const path = usePathname().slice(1);
    const testPage: any = usePathname()?.replace("/dashboard/fetch/", "");



    const { themeId, setThemeId, data, setData } = useThemeContext();

    useEffect(() => {

        // where to fetch theme????
        console.log("This is page: - ", testPage);
        setThemeId('theme-mo');
        setData(sampleTheme);

    }, []);


    const height: number = 0;

    const [modalOpen, setModalOpen] = useState(true);


    return (<>


        <header className={`
            ${data.name === 'test' ? 'hidden' : ''} 
            ${data.name === 'project' ? 'hidden' : ''} 
            ${inter.variable} ${roboto.variable} 
            ${data.name}
    w-full mx-auto items-center justify-center h-[380px] md:h-[380px]
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



        <div className={'bg-slate-100'}>
            {!modalOpen && (

                <Modal
                    isOPen={modalOpen}
                    handleClose={() => setModalOpen(!modalOpen)}
                >
                    <div className={`kv-modal-content flex flex-col justify-between h-full w-full`}>
                        <div className={`flex flex-col items-center p-8`}>
                            <h4>Are your sure want to cancel?</h4>
                            <h4>Your current progress will be lost</h4>
                            <img className="w-40" src="/img/site/marco_1000x1000.png" alt="marco in modal" />
                        </div>
                        <div className={'flex flex-col sm:flex-row justify-center gap-8 align-middle'}>
                            <button className={'bg-red-200 text-black'}
                                type='button'
                                onClick={
                                    () =>
                                        setModalOpen(!modalOpen)
                                }
                            >
                                OK
                            </button>


                        </div>
                    </div>
                </Modal>
            )}

            <button className={'kv-modal-click bg-red-200 text-black text-lg font-extrabold px-6 py-3'}
                type='button'
                onClick={
                    () =>
                        setModalOpen(!modalOpen)
                }>
                Get More Info
            </button>
        </div>




        <main className={`${data.name === 'pokedex' ? 'hidden' : ''}  ${data.name} ${inter.variable} ${bitter.variable} container md:mx-auto `}>


            {children}

        </main>





    </>)
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