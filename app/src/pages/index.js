import bootstrapPage from '../utils/bootstrapPage';
const mfe1 = await import('mfe1/mfe');
const mfe2 = await import('mfe2/mfe');
const exposedAdder = (await import('mfe1/exposedAdder')).default;

// console.log('exposedAdder', exposedAdder)
// console.log('exposedAdder', exposedAdder?.default)
// console.log('exposedAdder', exposedAdder.default(1,2))

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
            <hr />
            <h2>Finally, here is an exposed module from MFE 1 in action : </h2>
            <hr />
            <p>
                {exposedAdder(2, 2)}
            </p>
        </div>
    );
};

export async function getServerSideProps() {
    const data = await runDataPrefetchers();
    return { props: data };
};

export default Home;
