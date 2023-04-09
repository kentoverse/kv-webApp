import React from "react";

export default function Headings ({ 
    heading1, 
    heading2, 
    subheading 
}:{ 
    heading1 : string,
    heading2 : string,
    subheading : string
}){

    return (
        <>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {heading1}
        </span>
            {heading2}
        </h1>
         <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
            {subheading}
          </p>
        </>

)
}