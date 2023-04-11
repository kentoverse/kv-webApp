

export default function Main({
  children,
  theme,
  fontSans,
  fontMono,
}: {
  children: React.ReactNode,
  theme: string,
  fontSans: string,
  fontMono: string,
}) {

  return (
    <>

      <main className={`${theme} ${fontSans} ${fontMono}
      container md:container md:mx-auto
      bg-pink-100 
      `}>
        {children}

        <footer className="w-100 grid grid-col-3 gap-2">
          <div>
            <p className="text-gray font-medium font-mono">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse justo est, finibus et pulvinar non, tempus eu ligula.
              Mauris nisl ligula, fermentum vel massa a, tempus malesuada nunc.
              Mauris eu placerat lorem. Integer aliquam ultrices sem ac luctus.
              Donec et porttitor lorem. Etiam lacinia dolor ut blandit malesuada.
            </p>
          </div>
          <div>
            <p className="text-gray font-medium font-mono">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse justo est, finibus et pulvinar non, tempus eu ligula.
              Mauris nisl ligula, fermentum vel massa a, tempus malesuada nunc.
              Mauris eu placerat lorem. Integer aliquam ultrices sem ac luctus.
              Donec et porttitor lorem. Etiam lacinia dolor ut blandit malesuada.
            </p>
          </div>
          <div>
            <p className="text-gray font-medium font-mono">&copy; 2023 My Website</p>
          </div>

        </footer>
        {/* <script src="script.js"></script> */}
      </main>
    </>
  )
}

// ${inter.variable} 


