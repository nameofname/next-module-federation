import { patchFetch } from 'next/dist/server/lib/patch-fetch.js';
// import * as serverHooks from 'next/src/client/components/hooks-server-context.ts';
// import { DynamicServerError } from 'next/src/client/components/hooks-server-context.ts';
// import serverHooks from 'next/dist/client/components/hooks-server-context';
import { DynamicServerError } from 'next/dist/client/components/hooks-server-context';
// import { staticGenerationAsyncStorage } from 'next/src/client/components/static-generation-async-storage.ts';
// import { staticGenerationAsyncStorage } from 'next/dist/client/components/static-generation-async-storage.js';
import { AsyncLocalStorage } from 'node:async_hooks';

const { getServerSideProps: fetchMfe1, Component: Mfe1 } = await import('mfe1/mfe');
const { getServerSideProps: fetchMfe2, Component: Mfe2 } = await import('mfe2/mfe');


const staticGenerationAsyncStorage = {
    getStore: () => AsyncLocalStorage
};

function patchFetchApp() {
    console.log('attempt to patch fetch', staticGenerationAsyncStorage);
    patchFetch({
        serverHooks: { DynamicServerError },
        staticGenerationAsyncStorage
    });
    // console.log('SUCCESS !!! patch fetch');
}

patchFetchApp();

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
