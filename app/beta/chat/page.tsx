import Button from "../../components/buttons"
import Link from 'next/link';
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: 'https://us1-sincere-mosquito-38472.upstash.io',
  token: 'AZZIASQgODQ4MzBjZGYtZDMzZi00NDhkLWE4MjktMDg0Njk1Y2MyZTA3OGRlZmVkMTY1MDVmNGY3NDg1NmQzZGI5YjBmMmUzZDE=',
})
   

export default async function Chat() {

  const data = await redis.set('marc', 'bar');
  const value = redis.get('marc');

  

  // await client.set('marc', 'set')
  



  return (
    <>

      <div className="flex justify-between">
        <Link className="font-sans font-bold text-sm bg-blue-800 text-black px-3 py-2" href="/">Home</Link>
        <h3 className="font-sans font-bold text-sm 
            bg-pink-100 text-gray-400 px-3 py-2">TEST PAGE</h3>
         
      </div>
      <div className="bg-gray-100 w-full position-relative h-[100vh]">
        {/*  -------------------------- Start Code Here to Render Page -----------------------------------*/}

        <h2>VALUE:{JSON.stringify(value)}</h2>

        <Button className="text-sm bg-blue-800 text-white  px-3 py-2" style={{"color": "red"}}>Test</Button>
      </div>
    </>
  )
}










