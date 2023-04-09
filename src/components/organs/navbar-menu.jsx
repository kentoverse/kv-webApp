
import Link from "next/link";


const pageRoutes = [
  { name: 'Home', path: '/' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'About', path: '/about-us' },
  { name: 'Project', path: '/dashboard/project' },
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


