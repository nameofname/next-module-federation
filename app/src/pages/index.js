import { lazy } from "react"
import { Tooltip } from 'react-tooltip'
const Mfe2 = lazy(() => import("mfe2/mfe"));
// const Mfe1 = lazy(() => import("mfe1/mfe"));
const Mfe1 = lazy(async () => {
    const mfe = await import("mfe1/mfe");
    const Component = await mfe.default();
    return { default: () => Component };
});

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
    data = await data.json();
    // console.log('ronalding', Mfe1);
    // await Mfe1.getServerSideProps();
    return { props: data };
};

export default Home;
