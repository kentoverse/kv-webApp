import { Dispatch, SetStateAction } from 'react';
import { Url } from 'url';


export interface IAccount {
  firstName: string;
  age: number;
}

export interface IAccountContext {
  accountId: string,
  setAccountId: Dispatch<SetStateAction<string>>,
  account: IAccount[],
  setAccount: Dispatch<SetStateAction<IAccount[]>>,
}

export interface IImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ILocalImage extends Omit<IImage, 'src'> {
  alt: string;
  width: number;
  height: number;
  imagePath: string;  // /products/water-bottle.jpg
}

export interface IImageRemote extends IImage {
  src: string; //"https://unsplash.com/photos/xxxxxxxxxxx"
  alt: string;
  width: number;
  height: number;
  fill: boolean;
  quality: number; // 1-100
  priority: boolean; // *high priority and preload, lazy loading is automatically disabled
}

export interface IProduct {
  id: number;
  name: string,
  price: number,
  image: ILocalImage,
  href: string,
}

export interface IProductContext {
  products: IProduct[],
  addProduct: (Product: IProduct) => void,
}

export interface IProductData {
  name: string,
  price: number,
  href: Url,

}

export interface IButton {
  onClick: () => void, // onClick event handler
  label: string, // Button label
  theme: string,
  isHover: boolean,
  isFocus: boolean,
}

export interface ICard {
  title: string,
  subtitle: number,
  href: Url,
  // image: ILocalImage | null,
}

export interface ITheme {
    name: string;
    description: string;
    color: {
      base: string;
      inverted: string;
    };
    background: {
      fill: string,
      image: string,
    };
    button: {
      action: string,
      success: string,
      size: string,
    };
}

