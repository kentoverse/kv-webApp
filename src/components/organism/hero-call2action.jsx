
export default function HeroCallToAction({ color, children }) {

    const colorVariants = {
      blue: 'bg-blue-600 hover:bg-blue-500 text-white',
      red: 'bg-red-500 hover:bg-red-400 text-white',
      yellow: 'bg-yellow-300 hover:bg-yellow-400 text-black',
    }
  
    return (
      <>

       {/* Hero (Call to Action) comp */}
       <div className={`${props.theme} relative bg-skin-fill max-w-4xl mx-auto overflow-hidden sm:rounded-2xl`}>
          <Image
            src={src}
            alt={src}
            width={width}
            height={height}
            className="absolute inset-0 h-full w-full object-cover opacity-30"
          />
         
          <div className="absolute inset-0 bg-gradient-to-br from-skin-hue via-skin-hue to-transparent opacity-90">
          </div>

          <h2 className="text-3xl font-extrabold text-skin-base sm:text-4xl">
            <span className="block">{text_headline1}</span>
            <span className="block">{text_headline2}</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-skin-muted">{text_muted}</p>
          <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <a href={href} className="text-skin-inverted bg-skin-button-accent hover:bg-skin-button-accent-hover flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm sm:px-8">
                {label}
                </a>
              <a href={href} className="text-skin-base bg-skin-button-muted flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-opacity-60 hover:bg-opacity-70 sm:px-8">
                {label} 
                </a>
            </div>
          </div>
        </div>
      
      
      </>
    )
  }
  
  