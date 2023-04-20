
import { ReactPropTypes } from "react";

// import fetch from 'isomorphic-unfetch';

type MyPageTypes = {
  id: number,
  title: string,
  description: string


}

function MyPage({props} : {props : ReactPropTypes | any}) {

  return (
    <>    
    { props.map((item : MyPageTypes) => (

      <div key={item.id}> 
        <h1>{item.title}</h1>
        <p>{item.description}</p>

      </div>
    ))}
  </>
);
}


MyPage.getInitialProps = async function () : Promise<MyPageTypes[]> {
  
  const res = await fetch('https://example.com/api/data');
  const data = await res.json();

  return [
    {
    id: data.id,
    title: data.title,
    description: data.description
    }
  ]
};



export default MyPage;