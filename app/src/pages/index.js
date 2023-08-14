import { Tooltip } from 'react-tooltip'
import loadMfe from '../utils/loadMfe';
const Mfe1 = loadMfe(import('mfe1/mfe'));
const Mfe2 = loadMfe(import("mfe2/mfe"));

const Home = (data) => {
    return (
        <div>
            <h1>This is the sample application</h1>
            <div style={{border: '1px solid red', width: '10px', height: '10px', float: 'left'}}></div>
            <p>here's a tiny red square, find the tooptip.</p>
            <p data-tooltip-id="my-tooltip" data-tooltip-content="Tipped tools!">hover here for tool tippage</p>
            <Tooltip id="my-tooltip" />
            <hr />
            <p>Here is some data loaded from an API : </p>
            <code>{JSON.stringify(data)}</code>
            <hr />
            <h2>below are the MFEs loaded via module federation : </h2>
            <hr />
            <Mfe1 />
            <Mfe2 />
        </div>
    );
};

export async function getServerSideProps(ctx) {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    Mfe1.refresh();
    return { props: await data.json() };
};

export default Home;
