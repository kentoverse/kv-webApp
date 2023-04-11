import Image from "next/image"
import { ReactPropTypes } from "react"

export default function LogoText({
    children,
    isSiteTitleHidden,
}: {
    children: React.ReactNode | undefined,
    isSiteTitleHidden: boolean
}) {



    return (

        <div className="site-logo
        py-2 px-4 fixed flex top-0 left-0 z-20
        ">
            <Image
                src="/img/site/logo3_1359x353.png"
                alt="Logo"
                width={150} height={40}
                priority
            />
            <h2 className={isSiteTitleHidden ? 'text-transparent' : 'text-md font-mono font-bold'}>
                Kentoverse
            </h2>
        </div>

    )
}

/* <div className={
  type==='info' ? ' bg-success' :
'bg-skin-button-accent hover:bg-skin-button-accent-hover' 
+ ' text-4xl '} role="alert"> */





/* <h2 className="fixed left-0 top-0 flex w-full 
justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 
pb-6 pt-8 backdrop-blur-2xl 
dark:border-neutral-800 dark:bg-zinc-800/30 
dark:from-inherit lg:static lg:w-auto 
lg:rounded-xl lg:border lg:bg-gray-200 
lg:p-4 lg:dark:bg-zinc-800/30"></h2> */