/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');
const pac = require('./package.json');
const DEFAULT_SHARE_SCOPE = require('@module-federation/nextjs-mf/src/internal.js').DEFAULT_SHARE_SCOPE;

// TODO - abstract this away into a helper function 
function getSharedDeps(packageJson) {
    const excludedDeps = ['next', 'typescript'];
    const excludePrefixes = ['@module-federation', '@types', 'eslint'];
    const shared = Object.keys(packageJson.dependencies).reduce((acc, depName) => {
        if ( DEFAULT_SHARE_SCOPE[depName] || excludedDeps.includes(depName) ) {
            return acc;
        }
        for (let prefix of excludePrefixes) {
            if (depName.startsWith(prefix)) {
                return acc;
            }
        }
        return Object.assign(acc, {[depName]: {
            requiredVersion: packageJson.dependencies[depName],
            singleton: true
        }})
    }, {});
    console.log('Sharing depenedencies via module federation :', shared);
    return shared;
}

module.exports = {
    experimental: {
        appDir: true,
        serverComponents: true,
    },    
    // webpack(config, options) {
    //     Object.assign(config.experiments, { topLevelAwait: true });
    //     config.plugins.push(
    //         new NextFederationPlugin({
    //             name: 'exampleApp',
    //             filename: 'static/chunks/app.js',
    //             remotes: {
    //               mfe1: `mfe1@http://localhost:3001/static/${options.isServer ? 'ssr' : 'chunks'}/mfe1.js`,
    //               mfe2: `mfe2@http://localhost:3002/static/${options.isServer ? 'ssr' : 'chunks'}/mfe2.js`,
    //             },
    //             shared: getSharedDeps(pac),
    //             extraOptions: {
    //                 automaticAsyncBoundary: true,
    //                 exposePages: true
    //             }
    //         })
    //     );
    
    //     return config;
    // }
};
module.exports.getSharedDeps = getSharedDeps;
