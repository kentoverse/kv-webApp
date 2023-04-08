
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
      <ButtonFillSet number={number} label={label}/>
      <nav className={`${theme}`}>
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


