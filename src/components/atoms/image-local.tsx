import Image from 'next/image';
import { ILocalImage } from "../../libs/Interfaces"


const ImageLocal = (props : ILocalImage) => {
  const {
    alt = "This is a picture",
    width = 500,
    height = 500,
    imagePath, // /products/water-bottle.jpg
  } = props;

  return (
    <Image
    src={imagePath}
    alt={alt}
    width={width}
    height={height}
    />
  );
}

export default ImageLocal;

// const rootPath: string, // "../../../public/"
// const imagePath: string, 
