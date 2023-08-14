// import ClientComponent from '../mfe/ClientComponent';

// /**
//  * Top level MFE component. 
//  * This is a server component, so no interactivity can be programmed at this level
//  * @returns 
//  */
// export default function MfePage(data) {
//     console.log('MFE : heres data', data);
//     return (
//         <main style={{border: '1px solid green'}}>
//         <h2>This is MFE 1</h2>
//         <h2>Here is some fetched data : </h2>
//         <code>{JSON.stringify(data)}</code>
//         <ClientComponent />
//         </main>
//     )
// }

// export async function getServerSideProps(ctx) {
//     console.log('MFE : step 1')
//   let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   data = await data.json();
//   console.log('MFE : fetch done', data)
//   return { props: data };
// };
