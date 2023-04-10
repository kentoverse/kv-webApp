import React, { MouseEventHandler } from "react";


export function ButtonAccent({
    type,
    label,
    onClick,
    theme,
    isLink = false,
    href
}: {
    type: 'submit' | 'reset' | 'button' | undefined,
    label: string,
    onClick: MouseEventHandler<any> | undefined,
    theme: string,
    isLink: boolean,
    href: string | undefined
}) {
    return (
    <>
        {isLink ?
                (<a href={href} role="button" aria-pressed="true"
                className={`${theme} text-skin-inverted bg-skin-button-accent
                hover:bg-skin-button-accent-hover flex items-center justify-center
                px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8`}>
                {label}
                </a>)
                : (
                <button onClick={onClick} type={type}
                className={`${theme} text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover
                flex items-center justify-center px-4 py-3 border border-transparent
                text-base font-medium rounded-md shadow-sm sm:px-8`}>
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
    theme,
    isLink = false,
    href
}: {
    type: 'submit' | 'reset' | 'button' | undefined,
    label: string,
    onClick: MouseEventHandler<any> | undefined,
    theme: string,
    isLink: boolean,
    href: string | undefined,

}) {

    return (
        <>
            {isLink ?
                (<a href={href} role="button" aria-pressed="true"
                className={`${theme} text-skin-base bg-skin-button-muted
                flex items-center justify-center px-4 py-3 border border-transparent
                text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8`}>
                {label}
                </a>)
                :(

                <button onClick={onClick} type={type}
                className={`${theme} text-skin-base bg-skin-button-muted
                flex items-center justify-center px-4 py-3 border border-transparent
                text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8`}>
                {label}
                </button>
            )}
        </>
    )
}


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