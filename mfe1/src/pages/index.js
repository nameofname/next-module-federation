import { lazy } from "react"
import MFE1 from '../components/index';

let data;

/**
 * Top level MFE component. 
 * This is a server component, so no interactivity can be programmed at this level
 * @returns 
 */
function Mfe1() {
    console.log('do i have my fucking data??!?!', data)
    return (
        <main style={{border: '1px solid green'}}>
            <h2>This is MFE 1</h2>
            <h2>Here is some fetched data : </h2>
            <code>{JSON.stringify(data)}</code>
            <MFE1 />
        </main>
    )
}

Mfe1.getServerSideProps = async function(ctx) {
    console.log('MFE : step 1')
    let d = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    d = await d.json();
    console.log('MFE : fetch done', d)
    data = d;
    return { props: d };
};

// export default Mfe1;


export default async function() {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    data = await data.json();
    console.log('MFE : fetch done', data);
    return (
        <main style={{border: '1px solid green'}}>
            <h2>This is MFE 1</h2>
            <h2>Here is some fetched data : </h2>
            <code>{JSON.stringify(data)}</code>
            <MFE1 />
        </main>
    )
}
