import React from "react";

export default function Headings({
    heading1,
    heading2,
    heading3,
    subheading,
}: {
    heading1: string,
    heading2: string,
    heading3: string,
    subheading: string,
}) {

return (
<>

    <h1 className="font-sans font-black text-skin-base 
    text-4xl sm:text-5xl md:tet-7xl ">
        {heading1}
    </h1>

    <h1 className="font-sans font-black text-skin-base
    text-5xl sm:text-6xl md:tet-8xl ">
        {heading2}

    </h1>

    <h1 className="font-sans font-black text-skin-base
    text-4xl sm:text-5xl md:tet-7xl ">
        {heading3}
    </h1>

    <p className="font-mono font-normal text-xs text-skin-muted leading-4 px-4 
        md:text-sm md:w-80 md:text-left md:pl-0">
        {subheading}
    </p>

</>
)
}




{/* <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
{heading3}
</span> */}

// <h1 className="mb-4 text-3xl font-mono font-extrabold text-gray-900 dark:text-white md:text-5xl md:tet-7xl lg:text-6xl">
// <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
//     {heading3}
// </span>
// </h1>

//  <p className="text-sm font-mono font-normal text-gray-500 lg:text-xl dark:text-gray-400">
//     {subheading}
//   </p>