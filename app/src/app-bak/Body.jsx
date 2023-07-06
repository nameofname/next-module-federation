import dynamic from "next/dynamic"
// import { Tooltip } from 'react-tooltip'

const Mfe1 = dynamic(() => import("mfe1/mfe"));

export default function Body() {
    return (
        <div>
            {/* <p data-tooltip-id="my-tooltip" data-tooltip-content="Hello world!">this is the APP. app yo.</p> */}
            {/* <Tooltip id="my-tooltip" /> */}
            <div style={{border: '1px solid red', width: '10px', height: '10px', float: 'left'}}></div>
            <p>here's some more crap, eat the crap</p>
            <Mfe1 />
            <p>is there an MFE above this ? no. </p>
        </div>
    );
}
