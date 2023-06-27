/** @type {import('next').NextConfig} */

const NextFederationPlugin = require('@module-federation/nextjs-mf');
const pac = require('./package.json');

module.exports = {
    webpack(config, options) {
        Object.assign(config.experiments, { topLevelAwait: true });
        if (!options.isServer) { // TODO ! whyyyyyyy ?!??!?!?!?! no SSRRRRRRR Rfuuuuckkkkckkckc 
            config.plugins.push(
            new NextFederationPlugin({
                name: 'exampleApp',
                remotes: {
                  mfe1: `mfe1@http://localhost:3001/_next/static/${options.isServer ? 'ssr' : 'chunks'}/mfe1.js`,
                //   mfe1: `mfe1@http://localhost:3001/_next/static/chunks/mfe1.js`,
                },
                filename: 'static/chunks/app.js',
                // shared: Object.keys(pac.dependencies), // TODO - validate dependency sharing between MFEs and app
                extraOptions: {
                    verbose: true,
                    automaticAsyncBoundary: true,
                }
            })
            );
        }
    
        return config;
    }
};
