// @ts-check

/**
 * @type {import('@module-federation/nextjs-mf').NextFederationPlugin}
 */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

/**
 * @type {import('next').NextConfig}
 **/
let config = {
    webpack(config, options) {
        config.plugins.push(
            new NextFederationPlugin({
                name: 'RonSample',
                filename: 'static/chunks/remoteEntry.js',
                // shared: ...,
            })
        );
        config.optimization.minimize = false;
        return config;
    }
};

// config.experimental.esmExternals = true;

module.exports = config;
