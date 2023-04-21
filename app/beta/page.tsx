import Button from "../components/buttons";
import styles from "./../app.module.css";


console.log("This is Beta page in Server");


const AppPage = () => {

  return (
    <>
     <h1 className="text-orange-600 font-extrabold bg-indigo-900">NextJS 13 App Directory TW</h1>

     <h2 className={styles.text}>NextJS 13 App Directory CSS Module</h2>

     <Button>This is a Button</Button>

 


    

    </>
  )
}

export default AppPage


// `app/page.js` is the UI for the root `/` URL
// A page is always the leaf of the route subtree.
// Pages are Server Components by default but can be set to a Client Component.
// Pages can fetch data. View the Data Fetching section for more information.