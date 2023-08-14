/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');
const pac = require('./package.json');
const { getSharedDeps } = require('../app/next.config');

module.exports = {
    webpack(config, options) {
        Object.assign(config.experiments, { topLevelAwait: true });
        config.plugins.push(
            new NextFederationPlugin({
                name: 'mfe1',
                filename: 'static/chunks/mfe1.js',
                exposes: {
                    './mfe': './src/pages/index',
                },
                shared: getSharedDeps(pac),
                extraOptions: {
                    automaticAsyncBoundary: true,
                    exposePages: true
                }
            })
        );
    
        return config;
    }
};
