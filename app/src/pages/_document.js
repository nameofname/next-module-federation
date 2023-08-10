import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <body className="bg-background-grey">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}