import React from "react";

export default function Headings ({ 
    heading1, 
    heading2, 
    heading3, 
    subheading,
}:{ 
    heading1 : string,
    heading2 : string,
    heading3 : string ,
    subheading : string,
}){


return (
<>
    <div className="">
        <h1 className="mb-4 text-3xl font-mono font-extrabold md:text-5xl lg:text-6xl 
        text-gray-400 dark:text-white 
        ">
        {heading1}
        </h1>

        <h1 className="mb-4 text-3xl font-mono font-extrabold md:text-5xl lg:text-6xl 
        text-gray-900 dark:text-white 
        ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        {heading2}
        </span>
        </h1>

        <h1 className="mb-4 text-3xl font-mono font-extrabold md:text-5xl lg:text-6xl 
        text-gray-900 dark:text-white 
        ">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        {heading3}
        </span>
        </h1>

        <p className="text-sm font-mono font-normal
        text-gray-500 lg:text-xl dark:text-gray-400 
        ">
        {subheading}
        </p>
    </div>
</>
)
}


// <h1 className="mb-4 text-3xl font-mono font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
// <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
//     {heading3}
// </span>
// </h1>

//  <p className="text-sm font-mono font-normal text-gray-500 lg:text-xl dark:text-gray-400">
//     {subheading}
//   </p>