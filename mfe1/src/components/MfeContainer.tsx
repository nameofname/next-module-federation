import { useState } from 'react';
import { Tooltip } from 'react-tooltip'


type MfeContainerProps = {
    data : any;
}

/**
 * Top level MFE component. 
 * This is a server component, so no interactivity can be programmed at this level
 * @returns 
 */
export default function MfeContainer({ data }: MfeContainerProps) {
    const [ count, updateCount ] = useState(0);

    return (
        <main style={{border: '1px solid green'}}>
            <h2>This is MFE 1</h2>
            <h2>Here is some fetched data : </h2>
            <code>{JSON.stringify(data)}</code>
            <i data-tooltip-id="my-tooltip" data-tooltip-content="Tooltipz in ur eyez!">client component (tips have been toolified)</i>
            <Tooltip id="my-tooltip" />
            <p>current count: {count}</p>
            <button onClick={() => updateCount(count + 1)}>juice it</button>
        </main>
    );
}
