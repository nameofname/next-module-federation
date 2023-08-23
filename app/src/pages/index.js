import bootstrapPage from '../utils/bootstrapPage';
const mfe1 = await import('mfe1/mfe');
const mfe2 = await import('mfe2/mfe');

const { InjectMfe, runDataPrefetchers } = bootstrapPage({ mfe1, mfe2 });

const Home = (data) => {
    return (
        <div>
            <h1>This is the sample application</h1>
            <div style={{border: '1px solid red', width: '10px', height: '10px', float: 'left'}}></div>
            <p>Here's a tiny red square.</p>
            <hr />
            <h2>below are the MFEs loaded via module federation : </h2>
            <hr />
            <InjectMfe mfeKey="mfe1" prefetchedData={data} />
            <InjectMfe mfeKey="mfe2" prefetchedData={data} />
        </div>
    );
};

export async function getServerSideProps() {
    const data = await runDataPrefetchers();
    return { props: data };
};

export default Home;
