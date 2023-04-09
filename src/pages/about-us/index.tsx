import React from 'react'



export default function AboutUs ({
  children, 
}:{ children : React.ReactNode,
}){

return ( 
  
  <>
      <h2 className="text-3xl font-bold text-magenta2 ">About Kento</h2>
      <div>{children}</div>
  </>

)}
