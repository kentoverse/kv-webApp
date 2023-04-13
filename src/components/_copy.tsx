import { ReactPropTypes } from "react"





export default function _Copy ({ 
     props, 
     children
}:{  props : ReactPropTypes, 
     children : React.ReactNode,
}){
    return (
      <>
      
      
          {children} 
      </>
    )
  }
  

/** RESPONSIVE MOBILE FIRST DESIGN **/
// This will center text on mobile, and left align it on screens 640px and wider
// <div class="text-center sm:text-left"></div> 