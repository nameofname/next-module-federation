import { useState } from 'react';
import { Tooltip } from 'react-tooltip'
// import ClientComponent from './ClientComponent';

/**
 * Top level MFE component. 
 * This is a server component, so no interactivity can be programmed at this level
 * @returns 
 */
export default function Mfe1() {
    const [ count, updateCount ] = useState(0);

    return (
        <div>
            <i data-tooltip-id="my-tooltip" data-tooltip-content="Tooltipz in ur eyez!">client component (tips have been toolified)</i>
            <Tooltip id="my-tooltip" />
            <p>current count: {count}</p>
            <button onClick={() => updateCount(count + 1)}>juice it</button>
        </div>
    );
}
