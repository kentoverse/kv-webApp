import Link from "next/link"
import { ReactPropTypes } from "react"





export default function TestingA({}) {

  return (
    <>
      <div className="flex justify-between">
        <Link className="font-sans font-bold text-sm 
            bg-blue-800 text-white  px-3 py-2" href="/">Home</Link>
        <h3 className="font-sans font-bold text-sm 
            bg-pink-100 text-gray-400 px-3 py-2">TEST PAGE</h3>
      </div>

      <div className="bg-gray-100 w-full position-relative h-[100vh]">
      </div>

    </>
  )
}




export function DarkToggele({}) {

  return (

    <button
      type="button"
      className="mt-2 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      onClick={() => {
        document.documentElement.classList.contains("dark")
          ? document.documentElement.classList.remove("dark")
          : document.documentElement.classList.add("dark");
      }}
    >
      Dark Mode
    </button>
  )
}





/** RESPONSIVE MOBILE FIRST DESIGN **/
// This will center text on mobile, and left align it on screens 640px and wider
// <div class="text-center sm:text-left"></div> 