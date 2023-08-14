import { useState, useEffect } from 'react';


export default function Mfe2Container({ serverSideData }) {
    const [ data, setData ] = useState(null);
    useEffect(() => {
        if (data === null) {
            // artificial throttle : 
            setTimeout(() => {
                fetch("https://jsonplaceholder.typicode.com/todos/3")
                .then(data => data.json())
                .then(setData);
            }, 1000);
        }
    });

    return (
        <main style={{border: '1px solid purple'}}>
            <h2>This is MFE 2</h2>
            <i>Here is server fetched data : </i>
            <code>{JSON.stringify(serverSideData)}</code>
            <div style={{border: '1px solid red'}}>
                <i>Here is client fetched data : </i>
                {
                    !data ? (<p>loading...</p>) : (<code>{JSON.stringify(data, null, 4)}</code>)
                }
            </div>
        </main>
    )
}
