import Head from 'next/head';
import Mfe2 from '../mfe';

const Home = ({loaded}) => {
  return (
    <div>
      <Head>
        <title>MFE 1</title>
      </Head>

      <div className="hero">
      <h1>Pages Sandbox for MFE 1</h1>
      <Mfe2 />
      </div>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  return {};
};

export default Home;
