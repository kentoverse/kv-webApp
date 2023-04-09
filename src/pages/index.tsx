import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {

  return (
    <> 

      <section className={`bg-pink-200 grid grid-rows-2 grid-flow-col gap-2`}>

          <article className="text-md color-indigo-200">

            <a href="#"> <h4>Section Row</h4></a>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse justo est, finibus et pulvinar non, tempus eu ligula.
              Mauris nisl ligula, fermentum vel massa a, tempus malesuada nunc.
              Mauris eu placerat lorem. Integer aliquam ultrices sem ac luctus.
              Donec et porttitor lorem. Etiam lacinia dolor ut blandit malesuada.
            </p>

          </article>

          <article className="text-md color-indigo-200">
            <a href="#"> <h4>Section Row</h4></a>


            <p>
              Nulla suscipit mauris justo, nec varius mi pulvinar eget.
              Donec malesuada nec arcu ultricies porttitor.
              Suspendisse sollicitudin massa at efficitur gravida.
              Integer pretium quam imperdiet placerat maximus. Sed et nisi finibus,
              interdum mauris non, mollis urna. Praesent non risus nisl.
              Nunc placerat orci velit, id consectetur turpis interdum vitae.
            </p>

          </article>

          <article className="text-md color-indigo-200">
            <a href="#"> <h4>Section Row</h4></a>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse justo est, finibus et pulvinar non, tempus eu ligula.
              Mauris nisl ligula, fermentum vel massa a, tempus malesuada nunc.
              Mauris eu placerat lorem. Integer aliquam ultrices sem ac luctus.
              Donec et porttitor lorem. Etiam lacinia dolor ut blandit malesuada.
            </p>

          </article>

        </section>
    
        </>
  )
}