import React, { MouseEventHandler } from "react";
import { useToggle } from '../../libs/services/handle-toggle';


export function ButtonAccent({
    type,
    label,
    onClick,
    isLink = false,
    href,
}:{
    type: 'submit' | 'reset' | 'button' | undefined,
    label: string,
    onClick: MouseEventHandler<any> | undefined,
    isLink: boolean,
    href: string | undefined,
  
}){



return (
<>
{isLink ?

    (<a href={href} role="button" aria-pressed="true"
        className={`
        text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center
        px-4 py-3 border border-transparent text-base font-medium font-mono rounded-md shadow-sm sm:px-8`}>
        {label}
    </a>)

    : (
    <button onClick={onClick} type={type}
        className={`
        text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover
        justify-center px-5 py-3 border border-transparent
        text-base font-bold font-mono rounded-sm shadow-lg`}>
        {label}
    </button>
)}
</>
    )

}

export function ButtonMuted({
    type,
    label,
    onClick,
    isLink = false,
    href
}:{
    type: 'submit' | 'reset' | 'button' | undefined,
    label: string,
    onClick: MouseEventHandler<any> | undefined,
    isLink: boolean,
    href: string | undefined,

}){


return (
<>
    {isLink ?
        (<a href={href} role="button" aria-pressed="true"
            className={`text-skin-base bg-skin-button-muted
            flex items-center justify-center px-4 py-3 border border-transparent
            text-base font-medium font-mono rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8`}>
            {label}
        </a>)
        :(

        <button onClick={onClick} type={type}
            className={`text-skin-base bg-skin-button-muted
            flex items-center justify-center px-4 py-3 border border-transparent
            text-base font-medium font-mono rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8`}>
            {label}
        </button>
    )}
</>
)
}




// export function ButtonToggle({ 
// }:{
// }){

   
//   const [state , handlers ] = useToggle(false);

//   const { toggle }: () => void; } = handlers;


//   const handleClick = () => {
//     toggle();
//   }


// return (
// <>
// <div>
//       <button onClick={handleClick}>Toggle Content
//       {state ? 'Hide' : 'Show'} 
//       Content
//       </button>
//       {state && <p>Some content to show or hide</p>}
//     </div>

// </>
//     )


// (<a href={href} role="button" aria-pressed="true"
// className={`text-skin-inverted bg-skin-button-accent
// hover:bg-skin-button-accent-hover flex items-center justify-center
// px-4 py-3 border border-transparent text-base font-medium font-mono rounded-md shadow-sm sm:px-8`}>
// {label}
// </a>)



// (<a href={href} role="button" aria-pressed="true"
// className={`text-skin-base bg-skin-button-muted
// flex items-center justify-center px-4 py-3 border border-transparent
// text-base font-medium font-mono rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8`}>
// {label}
// </a>)







// export function ButtonAlert({
//     type,
//     label,
//     onClick,
//     theme,
//     isLink = false,
//     href
// }: {
//     type: 'info' | 'success' | 'warning' | 'danger' | undefined,
//     label: string,
//     onClick: MouseEventHandler<any> | undefined,
//     theme: string,
//     isLink: boolean,
//     href: string | undefined,

// }) {
// //ALERT

// const alertColor = `bg-skin-alert-` + `${type}`;

//     return (
//         <>
//             {isLink ?
//                 (<a href={href} role="button" aria-pressed="true"
//                 className={`${theme} text-skin-inverted bg-skin-alert-${type}
//                 hover:bg-skin-button-accent-hover flex items-center
//                 justify-center px-4 py-3 border border-transparent
//                 text-base font-medium rounded-md shadow-sm sm:px-8`}>
//                 {label}
//                 </a>)
//                 :(
//                 <button onClick={onClick} type="button"
//                 className={`${theme} bg-skin-${type} text-skin-base 
//                 justify-center px-4 py-3 border border-transparent
//                 font-medium rounded-md shadow-sm sm:px-8`}>
//                 {label}
//                 </button>
            
//             )}
//         </>
//     )
// }





// export function ButtonLinkAccent({
//     type,
//     label,
//     href,
//     theme,
// }: {
//     type: 'submit' | 'reset' | 'button' | undefined,
//     label: string,
//     href: string | undefined
//     theme: string,
// }) {

//     return (


//         <Link href={href} role="button" aria-pressed="true"
//             className={`${theme} text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover
//       flex items-center justify-center px-4 py-3 border border-transparent
//       text-base font-medium rounded-md shadow-sm sm:px-8`}>
//             {label}
//         </Link>



//     )

// }