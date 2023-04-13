import Image from "next/image";


export default function NavbarBottom(props) {

  return (
  
  <nav className="navbar-bottom fixed bottom-0 left-0
  flex h-18 w-full items-end justify-center
  bg-gradient-to-r
  from-purple-500 to-pink-500
  via-white dark:from-black dark:via-black
  lg:static lg:h-auto lg:w-auto lg:bg-none">
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
        priority
      />
      </a>
  </nav>
    )
  }
  
  
  