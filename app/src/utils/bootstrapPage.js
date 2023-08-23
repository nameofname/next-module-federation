import {patchFetch, clearFetchCache} from '../utils/patchFetch';

export default function bootstrapPage(mfes){
    const prefetched = {};
    const components = Object.keys(mfes).reduce((acc, key) => {
        return {...acc, [key]: mfes[key].default.Component};
    }, {});

    const InjectMfe = ({ mfeKey, prefetchedData }) => {
        console.log('injecting mfe with key and data', mfeKey, prefetched[mfeKey]);
        const Comp = components[mfeKey];
        return (<Comp data={prefetchedData[mfeKey]} />);
    }

    async function runDataPrefetchers() {
        console.log('running data prefetchers');
        patchFetch();

        // run all fetches in parallel wint Promise.all
        await Promise.all(
            Object.keys(mfes).reduce((acc, key) => {
                prefetched[key] = {}; // default the data to an empty object
                if (!mfes[key].default.preFetchData) {
                    return acc;
                }
                prefetched[key] = mfes[key].default.preFetchData();
                return [...acc, prefetched[key]];
            }, [])
        );

        // map promises onto objects for use in non-async react components
        await Promise.all(Object.keys(prefetched).map((key) => new Promise(async (resolve) => {
            prefetched[key] = await prefetched[key];
            resolve();
        })))
        
        console.log('data prefetchers done, clearing cache.', prefetched);
        clearFetchCache();
        return prefetched;
    }

    return {
        InjectMfe,
        runDataPrefetchers
    };
}
