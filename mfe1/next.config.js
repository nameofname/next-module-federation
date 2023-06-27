/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');
const pac = require('./package.json');

module.exports = {
    webpack(config, options) {
        Object.assign(config.experiments, { topLevelAwait: true });
        // if (!options.isServer) {
            config.plugins.push(
            new NextFederationPlugin({
                name: 'mfe1',
                filename: 'static/chunks/mfe1.js',
                // shared: Object.keys(pac.dependencies), // TODO - validate dependency sharing between MFEs and app
                exposes: {
                    "./thingy": "./src/app/thingy"
                },
                extraOptions: {
                    verbose: true,
                    automaticAsyncBoundary: true,
                }
            })
            );
        // }
    
        return config;
    }
};
