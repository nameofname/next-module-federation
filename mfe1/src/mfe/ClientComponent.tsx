"use client";

import { useState } from 'react';

export default function ClientComponent() {    
    const [ count, updateCount ] = useState(0);

    return (
        <div style={{border: '1px solid red'}}>
            <i>client component </i>
            <p>current count: {count}</p>
            <button onClick={() => updateCount(count + 1)}>juice it</button>
        </div>
    );
}