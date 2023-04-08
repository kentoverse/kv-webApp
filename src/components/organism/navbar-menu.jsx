
import Link from "next/link"
import ButtonFillSet from "@components/atoms/button-fillSet";

const pageRoutes = [
  { name: 'bg-e', path: 'bg-r' },
  { name: 'bg-e', path: 'bg-r' },
  { name: 'bg-e', path: 'bg-r' },
  { name: 'bg-e', path: 'bg-r' }
]


export default function NavbarMenu({ theme, number, label }) {


  return (
    <>
      {/* Navbar comp */}
     
      <nav className={`${theme}`}>
        <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">NAVBAR Menu</h2>
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


