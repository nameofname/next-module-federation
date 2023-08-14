/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');
const pac = require('./package.json');

module.exports = {
    webpack(config, options) {
        Object.assign(config.experiments, { topLevelAwait: true });
        config.plugins.push(
            new NextFederationPlugin({
                name: 'mfe2',
                filename: 'static/chunks/mfe2.js',
                exposes: {
                    './mfe': './src/pages/index',
                },
                shared: Object.keys(pac.dependencies),
                extraOptions: {
                    automaticAsyncBoundary: true,
                    exposePages: true
                }
            })
        );
    
        return config;
    }
};
