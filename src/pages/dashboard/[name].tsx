
import { useRouter } from "next/router"
import {  useState } from 'react'


export default function DynamicRoute ({pageData} : any) {

const [description, setDescription] = useState("");
  
let theme : string = "";

const router = useRouter();
const paths = router.pathname;
const aspath = router.asPath;
const { name } = router.query;

console.log("paths ----", paths)
console.log('aspath----', aspath);
console.log('query----', name);


   
return (
<>    
{ 
    pageData?.map((data : any)  => {

        if (data.page === name) {

            return (
                <div key={data.id} className="text-3xl">
                {data.page} use {theme = data.theme}
                </div>
            )   
        }}
    )
}
</>
)}


export async function getServerSideProps() {
    const res = await fetch("http://localhost:3000/api/page-control")
    return {
      props: {
        pageData: await res.json(),
      }
    }
  }
  
  