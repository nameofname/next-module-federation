import {patchFetch, clearFetchCache} from '../utils/patchFetch';
const { default : { preFetchData: fetchMfe1, Component: Mfe1 }} = await import('mfe1/mfe');
const { default : { preFetchData: fetchMfe2, Component: Mfe2 }} = await import('mfe2/mfe');

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
    patchFetch();
    // scope cache to current URL
    // create a TTL for values in the cache 
    // create a wrapper around getServerSideProps and clear cache at the end
    // the name of the top level function for data fetching will be preFetchData()
    // I will create a wrapper function that exposes a preFetchData and Component
    // should this be a simple JS class? 
    // It will check that the data was fetched and provided to the component
    // if it was not, then it will attempt to fetch the data in a useEffect hook! 
    const mfe1Props = await fetchMfe1();
    const mfe2Props = await fetchMfe2();
    clearFetchCache();
    return { props: { mfe1Props, mfe2Props }};
};

export default Home;
