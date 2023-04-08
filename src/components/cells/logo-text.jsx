import Image from "next/image"




export default function LogoText({ site_title, site_description }) {

    const theme = "kv-theme";

return (
    <>
    <div className={`${theme} kv-logotext`}>
        <Image src="/vercel.svg" alt="Logo" width={100} height={100} priority />
        <h2 className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        {site_title}&nbsp; <code className="font-mono font-bold">{site_description}</code>
        </h2>
    </div>
    </>
)
}


