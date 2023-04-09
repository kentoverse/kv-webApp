// "use client";
// import { useProductContext } from "../../store/ProductContext";
// import { ILocalImage } from "../../Interfaces";
// import useState from 'react';

// const FormAddProduct = () => {

//   const imageObject: ILocalImage = {
//     alt: "this is an image",
//     width: 100,
//     height: 50,
//     imagePath: "/products/cutlery.jpg",
//   }

//   const [isTrue, setIsTrue] = useState(true);
//   const { addProduct, products } = useProductContext();


//   const handleSubmit = (event) => {

//     event.preventDefault();

//     setIsTrue(event.target.image.value) 
   
//     // const urlString: string = event.target.href.value;
//     // const url: Url = new URL(urlString);

//     const data = {
//       id: 0,
//       name: event.target.name.value,
//       price: event.target.price.value,
//       href: event.target.href.value,
//       image: isTrue ? imageObject : imageObject
//     };

//     addProduct(data);
//     console.log("data-", data);
//     console.log("prod-", products);
//   };

//   return (

//     <form
//       className="className=" bg-white rounded-md
//       onSubmit={handleSubmit}>
//       <div className="mb-4">
//         <label
//           className="block font-medium text-gray-700 mb-2"
//           htmlFor="first">Name</label>
//         <input
//           className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           type="text"
//           id="first"
//           name="name"
//           required />
//       </div>
//       <div className="mb-4">
//         <label
//           className="block font-medium text-gray-700 mb-2"
//           htmlFor="second">Price</label>
//         <input
//           className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           type="number"
//           id="second"
//           name="price"
//           required />
//       </div>

//       <div className="mb-4">
//         <label className="block font-medium text-gray-700 mb-2" htmlFor="link">
//           Link
//         </label>
//         <select
//           className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//           name="href"
//           id="link"
//         >
//           <option value="">Select an option</option>
//           <option value="dashboard/product">Product-A url</option>
//           <option value="dashboard/product">Product-B url</option>
//         </select>
//       </div>

//       <div className="mb-4">
//         <label className="block font-medium text-gray-700 mb-2">
//           Choose Image
//         </label>
//         <div className="flex items-center mb-4">
//           <input id="radio-1" type="radio" value="true" name="image"
//             className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
//           <label htmlFor="radio-1"
//             className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//             Yes</label>
//         </div>
//         <div className="flex items-center mb-4">
//           <input id="radio-2" type="radio" value="false" name="image"
//             className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
//           <label htmlFor="radio-2"
//             className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
//             No</label>
//         </div>
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default FormAddProduct;



// export const dapDATA = [
//   { id: 1, name: 'Mo', img: "./person-a", email: "yo@12.com" },
//   { id: 2, name: 'Io', img: "./person-b", email: "yo@12.com" },
//   { id: 3, name: 'Yu', img: "./person-c", email: "yo@12.com" }
// ];

