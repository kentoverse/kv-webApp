
import Link from "next/link"



export default function NavbarMenu(pageRoutes) {

  pageRoutes = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Project', path: '/dashboard/project' },
    { name: 'Business', path: '/dashbaord/business' }
  ]

  return (
 
      <nav className="navbar">
        {/* <h2 className="text-3xl font-extrabold sm:text-4xl">
          NAVBAR Menu
        </h2> */}
        <ul>
          {pageRoutes.map((route, index) => (
            <Link key={index} href={route.path}>
              {route.name}
            </Link>
          ))}
        </ul>


      </nav>
      
  )
}


