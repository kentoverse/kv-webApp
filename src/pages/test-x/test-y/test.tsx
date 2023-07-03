import Link from "next/link";
import { CounterReducer} from '../../../../components/_test';


const TestingA = () =>  {



  return (
    <>
      <div className="flex justify-between">
        <Link className="font-sans font-bold text-sm 
            bg-blue-800 text-white  px-3 py-2" href="/">Home</Link>
        <h3 className="font-sans font-bold text-sm 
            bg-pink-100 text-gray-400 px-3 py-2">TEST PAGE</h3>
      </div>
{/*  -------------------------- Start Code Here to Render Page -----------------------------------*/}
      <div className="bg-gray-100 w-full position-relative h-[100vh]">


  <CounterReducer>
    {(num: number) => <>Current Count: {num}</>}
  </CounterReducer>
      </div>

    </>
  )
}




export function DarkToggele({}) {

  return (

    <>
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

    </>

  )
}



export default TestingA;




/** RESPONSIVE MOBILE FIRST DESIGN **/
// This will center text on mobile, and left align it on screens 640px and wider
// <div class="text-center sm:text-left"></div> 



  // const handleFetch = () => {

  //     dispatch({type: ACTION_TYPES.FETCH_START })

  //     fetch("https://jsonplaceholder.typicode.com/posts/1").then((res) => {
  //       return res.json();
  //     }).then((data) => {
  //     dispatch({type:ACTION_TYPES.FETCH_SUCESS, payload: data })
  //     })
  //     .catch((e) => {
  //       console.log({type:ACTION_TYPES.FETCH_ERROR})
  //     })
  // }