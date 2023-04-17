import Link from "next/link";
import React from "react";

//const getSet: string[] = ['default', 'action', 'success', 'warning', 'danger', 'neutral'];

export function AlertLink({
  type,
  message,
  href,
  linkText
}: {
  type: string | undefined,
  message: string,
  href: string,
  linkText: string
}) {

  return (
    <>
      {type === 'success' && (
        <div className="bg-success bg-skin-button-accent hover:bg-skin-button-accent-hover
        text-2xl" role="alert">
          {message}
          <Link href={`${href}`} className="--alert-link"> {linkText}</Link>
        </div>
      )}

      {type === 'info' && (
        <div className="bg-info hover:bg-skin-button-accent-hover text-2xl" role="alert">
          {message}
          <Link href={`${href}`} className="--alert-link"> {linkText}</Link>
        </div>
      )}

      {type === 'warning' && (
        <div className="bg-warning hover:bg-skin-button-accent-hover text-2xl" role="alert">
          {message}
          <Link href={`${href}`} className="--alert-link"> {linkText}</Link>
        </div>
      )}

      {type === 'danger' && (
        <div className="bg-danger hover:bg-skin-button-accent-hover text-2xl" role="alert">
          {message}
          <Link href={`${href}`} className="--alert-link"> {linkText}</Link>
        </div>
      )}

      {type === undefined && (
        <div className="bg-skin-button-accent hover:bg-skin-button-accent-hover
        text-md px-3 py-1 text-center w-1/3" role="alert">
          {message}
          <Link href={`${href}`} className="--alert-link"> {linkText}</Link>
        </div>
      )}
    </>
  )
}




/* <div className={
  type==='info' ? ' bg-success' :
'bg-skin-button-accent hover:bg-skin-button-accent-hover' 
+ ' text-4xl '} role="alert"> */


/* <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
  Purple to blue
</span>
</button> */



