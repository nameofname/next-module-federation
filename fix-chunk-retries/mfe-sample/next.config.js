/**
 * @type {import('@module-federation/nextjs-mf').NextFederationPlugin}
 */
const NextFederationPlugin = require('@module-federation/nextjs-mf');

/** @type {import('next').NextConfig} */
module.exports = {
//   ...baseConfig, // todo
  webpack(config, options) {
    // const baseWebpackConfig = baseConfig.webpack(config, options);
    config.plugins.push(
            new NextFederationPlugin({
                name: 'TestRemote',
                filename: 'static/chunks/remoteEntry.js',
                // shared: ...
                exposes: {
                    './sample': './src/index.tsx',
                },
                extraOptions: {
                    automaticAsyncBoundary: true,
                }
            })
        );
        config.optimization.minimize = false;
        return config;
    }
};
