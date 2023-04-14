
import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import json from "../../../utils/example.json";



export default function DynamicRouting() {

    const router = useRouter();

    console.log('router obj----', router);
    
    const { name } = router.query; 
    const [ description, setDescription ] = useState("");

    useEffect(() => {
      if (!router.isReady) return;

      json.data.map((item) => {
        if (item.name === name) {
          setDescription(item.name + ` : ` + item.description);
          console.log('name ---', name)
        }
      })
        console.log('query obj----', name);

    }), [router.query.name, router.isReady];


    return (
      <>
      <h1 className="text-3xl text-lime-500 font-semibold">
        {description}
      </h1>
      
      
      </>
    )
  }