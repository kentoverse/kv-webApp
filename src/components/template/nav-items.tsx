import Link from "next/link"
import Image from "next/image"


const pageRoutes = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'About', path: '/about-us' },
    { name: 'Project', path: '/dashboard/project' },
]


export function NavMenu({

}: {
    }) {


    return (
        <>
            <nav className="nav-menu">

                <ul className="fixed justify-evenly top-0 right-0 z-500 py-4 font-sans font-medium w-64 text-xs 
                             selection:bg-red-400 text-skin-inverted 
                               md:w-80 md:text-sm hidden sm:flex">

                    {pageRoutes.map((route, index) => (

                        <Link key={index}
                            href={route.path}
                            className='hover:bg-skin-button-accent-hover' >

                            {route.name}
                        </Link>

                    ))}
                </ul>
            </nav>
        </>
    )
}


export function NavFloater({

}: {

    }) {
    return (
        <>
            <nav className="nav-footer
                fixed bottom-0 left-0 h-24 w-full justify-items-center
                lg:static lg:h-auto lg:w-auto lg:bg-none
                bg-gradient-to-r from-purple-500 to-pink-500 via-white dark:from-black dark:via-black
                sm:hidden
            ">
                <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"

                    className='pointer-events-none
                        lg:pointer-events-auto lg:p-0 absolute left-[40%]'

                >
                    <Image
                        src="/img/site/logo3V_2.png"
                        alt="Kento Logo"
                        className="dark:invert"
                        width={50}
                        height={50}
                        priority
                    />
{/* 
                  
                        <Image
                            src="/img/site/logo3_text2.png"
                            alt="Kento text"
                            className="dark:invert"
                            width={130}
                            height={40}
                            priority
                        /> */}
                   

                </a>
            </nav>
        </>
    )
}



export function NavLogo ({
    isSiteTitleHidden,
}: {
    isSiteTitleHidden: boolean
}) {


    return (
        <>
            <div className="site-logo 
    absolute flex top-4 translate-y-4 left-1/2 -translate-x-16 z-20
    md:top-0 md:left-0 md:translate-x-12 md:fixed">

                <Image
                    src="/img/site/logo3_1359x353.png"
                    alt="Logo"
                    width={120} height={50}
                    priority
                />

                <h2 className={isSiteTitleHidden ? 'text-transparent' : 'text-md font-mono font-bold'}>
                    Kentoverse
                </h2>
            </div>

        </>
    )
}




/** RESPONSIVE MOBILE FIRST DESIGN **/
// This will center text on mobile, and left align it on screens 640px and wider
// <div class="text-center sm:text-left"></div> 