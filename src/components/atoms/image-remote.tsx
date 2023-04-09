import Image from "next/image";

import { IImageRemote } from "../../libs/Interfaces";

const ImageRemote = ({
    src,
    alt = "This is a picture",
    width = 500,
    height = 500,
    fill = true,
    quality = 75, 
    priority = false, 
} : IImageRemote) => {

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        quality={quality}
        priority={priority}
      />
    </>
  );
};

export default ImageRemote;
