import Link from 'next/link'
import React from 'react'



export default function Dashboard ({
  children, 
}:{ children : React.ReactNode,
}){

return ( 
  
  <>
  <ul className='flex gap-4'>
    <li>
        <Link className="text-lg font-bold font-monot px-4 py-2
        bg-gray-400 text-pink-600
        " 
        href="/dashboard/exp/pokedex">Pokedex
        </Link>
      
    </li>
    <li>
    {/* <Link className="text-lg text-pink-600 font-bold font-monot bg-gray-400 px-4 py-2" 
            href="/dashboard/exp/pokeman">Pokeman
        </Link> */}
    </li>
  </ul>
      <div>{children}</div>
  </>

)}
