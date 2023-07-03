
import Image from "next/image";
import { ButtonAccent } from '@components/ui/mybuttons';
import Headings from '@components/ui/headings';

export function HeroNext() {


  return (
    <>
      <div className='hero
      flex relative w-full h-full justify-between
      bg-gradient-to-r from-gray-900/70 to-gray-500 '>

        <div className="absolute bottom-0 opacity-80 text-center w-full
        md:text-left md:w-auto md:pl-12">

          <Headings
            heading1={"TRANSFORM"}
            heading2={"ADAPT"}
            heading3={"INNOVATE"}
            subheading={'How the digital factory model helps organizations achieve digital transformation'} />


          <div className=" pb-7 mt-3">

            <ButtonAccent
              type={"button"}
              label={"Marc Cavada"}
              onClick={undefined}
              isLink={false} href={undefined}
            />



          </div>

        </div>


        <div className="absolute top-0 right-0 max-h-full hidden md:block">
          <Image
            className=""
            src="/img/site/marco_1000x1000.png"
            alt="model Marco"
            width={380}
            height={380}
            priority />
        </div>

      </div>
    </>
  )
}



export function BannerCall2Action() {

  return (
    <>

      <div className="sm:m-6 space-y-6">

        <div className="theme-mo relative bg-skin-fill max-w-4xl mx-auto overflow-hidden sm:rounded-2xl">

          <img className="absolute inset-0 h-full w-full object-cover opacity-30"
            src="https://images.unsplash.com/photo-1613217784112-e0e197be6a0b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80&sat=-100"
            alt="People working on laptops" />

          <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90">

          </div>

          <div className="relative max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">

            <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
              <span className="block">Focus on your content.</span>
              <span className="block">We handle the distribution.</span>
            </h2>

            <p className="mt-4 text-lg leading-6 text-skin-muted">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.</p>

            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">

              <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a href="#" className="text-skin-inverted bg-skin-button-accent
          hover:bg-skin-button-accent-hover flex items-center justify-center
          px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8">
                  Get started
                </a>

                <a href="#" className="text-skin-base bg-skin-button-muted flex
            items-center justify-center px-4 py-3 border border-transparent text-base font-medium
            rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                  Live demo
                </a>
              </div>

            </div>

          </div>
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
