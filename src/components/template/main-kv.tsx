

export default function MainKV({
    children,
}:{ children: React.ReactNode,
}) {

  return (
    <>

      <main className={`bg-pink-100 container md:container md:mx-auto`}>

        {children}
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
        {/* <script src="script.js"></script> */}
      </main>
    </>
  )
}

// ${inter.variable} 


