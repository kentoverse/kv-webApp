


// export const metadata = {
// title: "Kentoverse", description: "Modern website by Marc Cavada"};

import { ReactNode } from "react";

export default function RootLayout({ children } : { children : ReactNode}) {


    return (
        <>
    

        {children}
   



        </>
    );
};





// If loading a variable font, you don't need to specify the font weight
// const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald', display: 'swap' })
// const roboto_mono = Roboto_Mono({ subsets: ['latin'], variable: '--font-roboto-mono', display: 'swap' });


// A layout is UI that is shared between multiple pages.
// On navigation, layouts preserve state, remain interactive, and do not re-render.
// Layouts can also be nested. Root layout replaces the _app.js and _document.js files.
// Check docs - https://beta.nextjs.org/docs/routing/pages-and-layouts#pages

// sm: 640px
// md: 768px
// lg: 1024px
// xl: 1280px



// <html lang="en">
// <head>
//   {/* <link rel="stylesheet" href="/css/output.css" /> */}
// </head>
// <body>
// </body>

// </html>