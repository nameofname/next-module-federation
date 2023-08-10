// import { lazy, useState, createContext } from "react"
import { Tooltip } from 'react-tooltip'
// import PageState from 'pageState';
// const Mfe1 = lazy(() => import("mfe1/mfe"));
// const Mfe2 = lazy(() => import("mfe2/mfe"));


// async function fetchData() {
//   const data = await fetch({ url: 'https://jsonplaceholder.typicode.com/todos/1' });
//   setRes(data.json());
// }

// async function fetchData() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   // The return value is *not* serialized
//   // You can return Date, Map, Set, etc.
 
//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }
 
//   return res.json()
// }


export default async function Home() {
//   console.log('this is a thing happening: HOME');
  // const [ fetches, addFetches ] = useState([]);
  // const fetchContext = createContext({ fetches, addFetches });
  // const p = new PageState();

  // const data = await fetchData();
  // console.log('data', data)

  return (
    <div>
        <h1>This is the sample application</h1>
        <div style={{border: '1px solid red', width: '10px', height: '10px', float: 'left'}}></div>
        <p>here's a tiny red square, find the tooptip.</p>
        <p data-tooltip-id="my-tooltip" data-tooltip-content="Tipped tools!">hover here for tool tippage</p>
        <Tooltip id="my-tooltip" />
        <p>below are the MFEs loaded via module federation : </p>
        <hr />
        {/* <Mfe1 pageState={p} /> */}
        <p>is there an MFE above this? heck yes there is!</p>
        {/* <Mfe2 /> */}
        <p>and yet again, you've been MFE'd</p>
    </div>
    );
};

// export const getServerSideProps = async ctx => {
//   console.log('this is a thing happening: getInitialProps');
//   return { props: {} };
// };

// export default Home;
