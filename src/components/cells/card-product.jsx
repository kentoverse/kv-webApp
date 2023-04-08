





export default function CardProduct ( product ) {

  
    return (
      <>
     
<div className={`${theme} kv-cardproduct bg-color border border-gray-200`}>
      <Link href={href}>
        <ImageLocal
          alt={image.alt}
          width={image.width}
          height={image.height}
          imagePath={image.imagePath} 
          />
      </Link>

      <div className="px-5 pb-5">
        <Link href={href}>
          <h5 className="text-xl font-semibold tracking-tight">
            {name}
          </h5>
        </Link>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            {price}
          </span>
          <Link href={href}>
            <p className="text-sm font-semibold tracking-tight text-gray-900 dark:text-white">
              Add To Cart
            </p>
          </Link>
        </div>
      </div>
    </div>
      
      
      
      </>
    )
  }
  
  