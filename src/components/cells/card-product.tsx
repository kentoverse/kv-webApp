
import { IProduct, ILocalImage, ITheme } from "../../libs/Interfaces";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";


export default function CardProduct({
  product,
  theme,
  href,
}: {
  product: IProduct,
  theme: string,
  href: Url
}) {

  return (
    <>

      <div className={`${theme} bg-color border border-gray-200`}>
        <Link href={href}>
          <Image src={""} alt={""}></Image>
        </Link>

        <div className="px-5 pb-5">
          <Link href={href}>
            <h5 className="text-xl font-semibold tracking-tight">
              {product.name}
            </h5>
          </Link>

          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.price}
            </span>
            <Link href={href}>
              <p className="text-sm font-semibold tracking-tight
            text-gray-900 dark:text-white">
                Add To Cart
              </p>
            </Link>
          </div>
        </div>
      </div>

    </>
  )
}

