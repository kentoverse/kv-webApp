
import Image from "next/image";
import { ButtonAccent } from "@components/common/buttons";
import Headings from "@components/common/headings";
import { ReactPropTypes } from "react";

export function HeroNext({
}: {
}) {

return (
<>
    <div className='hero
    relative w-full "h-full place-items-bottom rounded-xl shadow-md
    md:max-w-2xl
    bg-gradient-to-r from-gray-800/50 to-gray-200/50'>

      <Headings
        heading1={"TRANSFORM"}
        heading2={"ADAPT"}
        heading3={"INNOVATE"}
        subheading={"How the digital factory model helps organizations achieve digital transformation"} />
      
      <div className="">
  
      <div className="absolute top-0 right-0
      md:flex md:shrink-0">
      <Image
        className="object-cover md:h-full md:w-48"
        src="/img/site/marco_1000x1000.png"
        alt="model Marco"
        width={380}
        height={380}
        priority
      />
      </div>
      <ButtonAccent type={"button"}
          label={"Marc Cavada"}
          onClick={undefined}
          isLink={false} href={undefined} />
      </div>

    </div>
</>
)
}







// relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert


/* <div className="hero flex
place-items-center
before:absolute
before:h-[300px] 
before:w-[480px] 
before:-translate-x-1/2 
before:rounded-full 
before:bg-gradient-radial 
before:from-white 
before:to-transparent 
before:blur-2xl 
before:content-[''] 
after:absolute 
after:-z-20 
after:h-[180px] 
after:w-[240px] 
after:translate-x-1/3 
after:bg-gradient-conic 
after:from-sky-200 
after:via-blue-200 
after:blur-2xl 
after:content-[''] 
before:dark:bg-gradient-to-br 
before:dark:from-transparent 
before:dark:to-blue-700/10 
after:dark:from-sky-900 
after:dark:via-[#0141ff]/40 
before:lg:h-[360px]"> */
