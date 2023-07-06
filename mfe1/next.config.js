/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');
const pac = require('./package.json');

module.exports = {
    webpack(config, options) {
        Object.assign(config.experiments, { topLevelAwait: true });
        config.plugins.push(
            new NextFederationPlugin({
                name: 'mfe1',
                filename: 'static/chunks/mfe1.js',
                exposes: {
                    './mfe': './src/mfe/Mfe1',
                },
                // shared: Object.keys(pac.dependencies), // TODO - validate dependency sharing between MFEs and app
                // shared: {},
                extraOptions: {
                    automaticAsyncBoundary: true,
                    exposePages: true
                }
            })
        );
    
        return config;
    }
};
