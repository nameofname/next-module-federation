"use client";

import { useState } from 'react';
import { Tooltip } from 'react-tooltip'

export default function ClientComponent() {    
    const [ count, updateCount ] = useState(0);

    return (
        <div style={{border: '1px solid red'}}>
            <i data-tooltip-id="my-tooltip" data-tooltip-content="Tooltipz in ur eyez!">client component (tips have been toolified)</i>
            <Tooltip id="my-tooltip" />
            <p>current count: {count}</p>
            <button onClick={() => updateCount(count + 1)}>juice it</button>
        </div>
    );
}