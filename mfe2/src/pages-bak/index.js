import Head from 'next/head';
import Mfe2 from '../mfe/Mfe2';

const Home = ({loaded}) => {
  return (
    <div>
      <Head>
        <title>MFE 2</title>
      </Head>

      <div className="hero">
      <h1>Pages Sandbox for MFE</h1>
      <Mfe2 />
      </div>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  return {};
};

export default Home;
