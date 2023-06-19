/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig


// /** @type {import('next').NextConfig} */

// const NextFederationPlugin = require('@module-federation/nextjs-mf');
// const pac = require('./package.json');

// module.exports = {
//     webpack(config, options) {
//         config.plugins.push(
//           new NextFederationPlugin({
//             name: 'exampleApp',
//             // remotes: {
//             //   mfe1: `mfe1@http://localhost:3001/_next/static/${options.isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
//             // },
//             filename: 'static/chunks/remoteEntry.js',
//             // shared: Object.keys(pac.dependencies),
//             extraOptions: {
//               verbose: true,
//               automaticAsyncBoundary: true,
//             }
//           })
//         );
    
//         return config;
//     }
// };
