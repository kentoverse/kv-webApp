import Image from 'next/image'
import { Inter } from 'next/font/google'
import MainKV from "@components/system/main-kv";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (

<MainKV>

  
        <section className={`${true} bg-pink-200 grid grid-rows-2 grid-flow-col gap-2`}>

          <article className="">

            <a href="#"> <h4>Section Row</h4></a>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse justo est, finibus et pulvinar non, tempus eu ligula.
              Mauris nisl ligula, fermentum vel massa a, tempus malesuada nunc.
              Mauris eu placerat lorem. Integer aliquam ultrices sem ac luctus.
              Donec et porttitor lorem. Etiam lacinia dolor ut blandit malesuada.
            </p>

          </article>

          <article className="">
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

          <article className="">
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

        <footer className="footer w-full">
          <div className="grid grid-rows-2 grid-flow-col gap-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse justo est, finibus et pulvinar non, tempus eu ligula.
              Mauris nisl ligula, fermentum vel massa a, tempus malesuada nunc.
              Mauris eu placerat lorem. Integer aliquam ultrices sem ac luctus.
              Donec et porttitor lorem. Etiam lacinia dolor ut blandit malesuada.
            </p>


          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse justo est, finibus et pulvinar non, tempus eu ligula.
              Mauris nisl ligula, fermentum vel massa a, tempus malesuada nunc.
              Mauris eu placerat lorem. Integer aliquam ultrices sem ac luctus.
              Donec et porttitor lorem. Etiam lacinia dolor ut blandit malesuada.
            </p>
          </div>
          <div>
            <p>&copy; 2023 My Website</p>
          </div>
        </footer>
        <script src="script.js"></script>

        </MainKV>

  )
}




/* <div clasName="grid grid-cols-4 gap-4" key={c.id}>
{allData?.results.map(c =>
  <>
    <p>{c.name}</p>
    <p>{c.status}</p>
    <p>{c.species}</p>
    <p>{c.gender}</p>
  </>
)};

</div> */