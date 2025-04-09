import { ComponentType } from "react";
import { init, loadRemote } from '@module-federation/runtime';

const remoteSegment = typeof window === 'undefined' ? 'ssr' : 'chunks';

const MFERemoteConfig = {
    name: "fix-chunk-retries-demo-app",
    remotes: [
        {
            name: "TestRemote",
            entry: `http://localhost:5555/_next/static/${remoteSegment}/remoteEntry.js`,
        }
    ]
};

init(MFERemoteConfig);

async function _try(): Promise<ComponentType> {
    const SampleMFE = (await loadRemote('TestRemote/sample') as unknown as any)?.default as ComponentType
    return SampleMFE;
}

export default async function importMFE(): Promise<ComponentType> {
    let SampleMFE;
    try {
        SampleMFE = await _try();
        if (!SampleMFE.isMFE === true) {
            console.log('MFE import unsuccessful', SampleMFE);
            throw new Error('MFE import unsuccessful');
        }
    } catch (e) {
        console.log('error importing MFE, trying again', e);
        SampleMFE = await _try();
    }

    console.log('success importing MFE', SampleMFE);
    return SampleMFE;
}