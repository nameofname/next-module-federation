import { revalidate } from '@module-federation/nextjs-mf/utils';
import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    // using exactly (almost) the same code as NRW
    if (ctx?.pathname && !ctx?.pathname?.endsWith('_error')) {
      const doRevalidate = () => {
          revalidate().then(async (shouldUpdate) => {
              console.log(`Module Federation finished revalidating remotes; shouldUpdate = "${shouldUpdate}".`);
              // if (shouldUpdate) {
              //     await bounceServer();
              // }
          });
      };
      // The node events 'finish' and 'error' are mutually exclusive, so we need to handle both to revalidate after each request.
      ctx?.res?.on('finish', doRevalidate);
      ctx?.res?.on('error', doRevalidate);
  }

    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}


