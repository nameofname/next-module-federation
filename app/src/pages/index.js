import patchFetch from '../utils/patchFetch';
const { getServerSideProps: fetchMfe1, Component: Mfe1 } = await import('mfe1/mfe');
const { getServerSideProps: fetchMfe2, Component: Mfe2 } = await import('mfe2/mfe');

patchFetch();

const Home = ({ mfe1Props, mfe2Props }) => {
    return (
        <div>
            <h1>This is the sample application</h1>
            <div style={{border: '1px solid red', width: '10px', height: '10px', float: 'left'}}></div>
            <p>Here's a tiny red square.</p>
            <hr />
            <h2>below are the MFEs loaded via module federation : </h2>
            <hr />
            <Mfe1 data={mfe1Props} />
            <Mfe2 data={mfe2Props} />
        </div>
    );
};

export async function getServerSideProps(ctx) {
    const mfe1Props = await fetchMfe1();
    const mfe2Props = await fetchMfe2();
    return { props: { mfe1Props, mfe2Props }};
};

export default Home;
