import { useState, useEffect } from 'react';


export default function Mfe2Container({ data }) {
    const [ clientData, setData ] = useState(null);
    useEffect(() => {
        if (clientData === null) {
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
            <code>{JSON.stringify(data)}</code>
            <div style={{border: '1px solid red'}}>
                <i>Here is client fetched data : </i>
                {
                    !clientData ? (<p>loading...</p>) : (<code>{JSON.stringify(clientData, null, 4)}</code>)
                }
            </div>
        </main>
    )
}
