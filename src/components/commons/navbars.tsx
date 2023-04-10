import Link from "next/link"
import { ReactPropTypes } from "react"
import Image from "next/image"




export default function NavbarTop({
    props,
    children
}: {
    props: ReactPropTypes,
    children: React.ReactNode,
}) {
    return (
        <>
            <nav className="navbar">
                <ul>
                    {pageRoutes.map((route, index) => (
                        <Link key={index} href={route.path}>
                            {route.name}
                        </Link>
                    ))}
                </ul>
            </nav>
        </>
    )
}


export function NavbarBottom({
    props,
    children
}: {
    props: ReactPropTypes,
    children: React.ReactNode,
}) {
    return (
        <>
            <nav className="navbar-bottom fixed bottom-0 left-0
            flex h-18 w-full items-end justify-center
            lg:static lg:h-auto lg:w-auto lg:bg-none
            bg-gradient-to-r
            from-purple-500 to-pink-500
            via-white dark:from-black dark:via-black
            ">
                <a
                className="pointer-events-none flex place-items-center gap-2 p-8
                lg:pointer-events-auto lg:p-0"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                >
                KENTOVERSE {' '}
                <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={120}
                height={24}
                priority
                />
                </a>
            </nav>
        </>
    )
}




const pageRoutes = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'About', path: '/about-us' },
    { name: 'Project', path: '/dashboard/project' },
]



/** RESPONSIVE MOBILE FIRST DESIGN **/
// This will center text on mobile, and left align it on screens 640px and wider
// <div class="text-center sm:text-left"></div> 