import dynamic from "next/dynamic"
const Mfe1 = dynamic(() => import("mfe1/thingy"));

export default function Body() {
    return (
        <div>
            this is the APP. app yo.
            <div style={{border: '1px solid red', width: '10px', height: '10px', float: 'left'}}></div>
            <p>here's some more crap, eat the crap</p>
            <Mfe1 />
            <p>is there an MFE above this ? no. </p>
        </div>
    );
}