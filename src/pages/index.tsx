import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });



export default function Home() {

  return (
    <>

      <section className="w-auto px-14 my-20
      md:px-28 lg:px-44
      ">
        <h2 className='font-sans font-extralight text-3xl pb-3 text-center text-skin-muted
          md:text-5xl md:px-16 md:pb-8'>
          Digital Transformation Journey
        </h2>

        <div className='grid grid-rows-2 gap-3 grid-flow-dense'>

          <article className="border-t-[1px] border-gray-300 py-3">

            <a href="#"> <h4 className='font-mono font-semibold mb-3 border-2 w-1/3 text-center
               text-cyan-500 border-cyan-100 hover:bg-skin-button-accent-hover'>Section Row</h4></a>

            <p className='font-sans font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse justo est, finibus et pulvinar non, tempus eu ligula.
              Mauris nisl ligula, fermentum vel massa a, tempus malesuada nunc.
              Mauris eu placerat lorem. Integer aliquam ultrices sem ac luctus.
              Donec et porttitor lorem. Etiam lacinia dolor ut blandit malesuada.
            </p>

          </article>

          <article className="border-t-[1px] border-gray-300 py-3">

            <a href="#"> <h4 className='font-mono font-semibold mb-3 border-2 w-1/3 text-center
               text-cyan-500 border-cyan-100 hover:bg-skin-button-accent-hover'>Section Row</h4></a>

            <p className='font-sans font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse justo est, finibus et pulvinar non, tempus eu ligula.
              Mauris nisl ligula, fermentum vel massa a, tempus malesuada nunc.
              Mauris eu placerat lorem. Integer aliquam ultrices sem ac luctus.
              Donec et porttitor lorem. Etiam lacinia dolor ut blandit malesuada.
            </p>

          </article>

          <article className="border-t-[1px] border-gray-300 py-3">

            <a href="#"> <h4 className='font-mono font-semibold mb-3 border-2 w-1/3 text-center
               text-cyan-500 border-cyan-100 hover:bg-skin-button-accent-hover'>Section Row</h4></a>

            <p className='font-sans font-light text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse justo est, finibus et pulvinar non, tempus eu ligula.
              Mauris nisl ligula, fermentum vel massa a, tempus malesuada nunc.
              Mauris eu placerat lorem. Integer aliquam ultrices sem ac luctus.
              Donec et porttitor lorem. Etiam lacinia dolor ut blandit malesuada.
            </p>

          </article>
        </div>
      </section>

    </>
  )
}