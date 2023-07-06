import Head from 'next/head';

const Home = ({loaded}) => {
  return (
    <div>
      <Head>
        <title>MFE 2</title>
      </Head>

      <div className="hero">
      <h2>This is MFE 2</h2>
      </div>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  return {};
};

export default Home;
