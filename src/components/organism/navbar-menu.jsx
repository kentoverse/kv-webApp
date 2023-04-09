
import Link from "next/link";


const pageRoutes = [
  { name: 'Home', path: '/' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Project', path: '/dashboard/project' },
  { name: 'Business', path: '/dashbaord/business' }
]


export default function NavbarMenu(props) {


  return (
 
      <nav className="navbar">
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


