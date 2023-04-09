

export default function HeaderKV({
    children,
    theme,
}: {
    children: React.ReactNode,
    theme: string,
}) {

    return (
        <>
            <header className={`${theme} bg-gradient-to-r from-cyan-500 to-blue-500 items-center mx-auto px-4`}>  
                     {children}
            </header>
        </>

    )
}



// ${inter.variable} 
/* <header className="header
bg-gradient-to-r from-cyan-500 to-blue-500
items-center mx-auto px-4"> */