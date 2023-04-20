// getInitialProps will be called on every client-side navigation, 
// if you'd like to only fetch data at build-time, switch to getStaticProps

import { ReactPropTypes } from "react";

// import fetch from 'isomorphic-unfetch';

function MyPage(props : ReactPropTypes | any) {

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
}


MyPage.getInitialProps = async function() {
  
  const res = await fetch('https://example.com/api/data');
  const data = await res.json();

  return {
    title: data.title,
    description: data.description
  };
};

export default MyPage;

