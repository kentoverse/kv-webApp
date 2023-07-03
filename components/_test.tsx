import { ReactPropTypes, 
         ChangeEvent, 
         Dispatch, 
         ReactNode, 
         useReducer, 
         useState } from 'react';
import Link from "next/link";


export function TestingA() {

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



export function DarkToggele() {

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


export function DynamicRouting() {

  return (
    <>
    
    
    </>
  )
}



/// COUNTER APP REDUCER

const enum COUNT_ACTION_TYPES {
  INCREMENT,
  DECREMENT,
  NEW_INPUT
}

const initalStateCount = { 
  count: 0, 
  text: ''
}

type countActionType = {
  type: COUNT_ACTION_TYPES,
  payload?: string,
}

const countReducer = (state: typeof initalStateCount, action: countActionType) :  typeof initalStateCount => {

  switch (action.type) {
      case COUNT_ACTION_TYPES.INCREMENT:
          return { ...state, count: state.count + 1}
      case COUNT_ACTION_TYPES.DECREMENT:
          return {...state, count: state.count -1}
      case COUNT_ACTION_TYPES.NEW_INPUT:
          return {...state, text: action.payload ?? '' }
      default:
              throw new Error()
  }
}

type ChildrenType = {
  children: (num : number) => ReactNode,
}

export function CounterReducer ({children} : ChildrenType) {
  //const [count, setCount] = useState<number>(1)

  const [state, dispatch] = useReducer(countReducer, initalStateCount);
  const increment = () => dispatch({type: COUNT_ACTION_TYPES.INCREMENT})
  const decrement = () => dispatch({type: COUNT_ACTION_TYPES.DECREMENT})
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: COUNT_ACTION_TYPES.NEW_INPUT, 
                 payload: e.target.value
              })
  } 

  return (
      <>
          <h2 className='font-mono font-bold text-lg px-4 py-2 text-indigo-500'>{children(state.count)}</h2>
          <div>
              <button className='bg-skin-button-accent px-4 py-2 text-2xl mr-3' onClick={increment}>+</button>
              <button className='bg-skin-button-accent px-4 py-2 text-2xl' onClick={decrement}>-</button>
          </div>
          <input placeholder='Input Number' className='bg-black text-white px-4 py-2 mt-3' type="text" onChange={handleTextInput} />
          <h3 className='font-mono font-bold text-sm px-4 py-2 text-pink-500' >{state.text}</h3>
      </>
      
  )

}

/// POST APP


const enum POST_ACTION_TYPES {
    FETCH_START, 
    FETCH_SUCESS,
    FETCH_ERROR 
}

type PostType = {
    loading: boolean;
    error: boolean;
    post: Record<string, number>
}

const initialStatePost = {
    loading: false,
    error: false,
    post: {},
}

//  COUNT APP


function PostReducer (
    state : typeof initialStatePost , action: {type: string, payload: Record<string, number>} ) {
    switch(action.type) {

        case 'FETCH_START': 
        return {
            laoding: true,
            error: false,
            post: {},
        }

        case 'FETCH_SUCESS': 
        return {
            ...state,
            loading: false,
            post: action.payload,
        }
        case 'FETCH_ERROR': 
        return {
            laoding: true,
            error: true,
            post: {},
        }
        default: 
            return state;

    }

}








/** RESPONSIVE MOBILE FIRST DESIGN **/
// This will center text on mobile, and left align it on screens 640px and wider
// <div class="text-center sm:text-left"></div> 