import loadMfe from '../utils/loadMfe';
const Mfe1 = loadMfe(import('mfe1/mfe'));
const Mfe2 = loadMfe(import("mfe2/mfe"));

const Home = () => {
    return (
        <div>
            <h1>This is the sample application</h1>
            <div style={{border: '1px solid red', width: '10px', height: '10px', float: 'left'}}></div>
            <p>Here's a tiny red square.</p>
            <hr />
            <h2>below are the MFEs loaded via module federation : </h2>
            <hr />
            <Mfe1 />
            <Mfe2 />
        </div>
    );
};

export async function getServerSideProps(ctx) {
    await Mfe1.refresh();
    await Mfe1.refresh();
    return { props: {}};
};

export default Home;
