"use client";

import { useState, useEffect } from 'react';

export default function ClientComponent() {    
    const [ data, setData ] = useState(null);
    useEffect(() => {
        if (data === null) {
            // artificial throttle : 
            setTimeout(() => {
                fetch("https://jsonplaceholder.typicode.com/todos/1")
                .then(data => data.json())
                .then(setData);
            }, 1000);
        }
    });

    return (
        <div style={{border: '1px solid red'}}>
            <i>client component </i>
            {
                !data ? (<p>loading...</p>) : (<code>{JSON.stringify(data, null, 4)}</code>)
            }
        </div>
    );
}