import Head from 'next/head';
import Mfe1 from '../mfe';
import PageState from 'pageState';

const Home = ({loaded}) => {
  return (
    <div>
      <Head>
        <title>MFE 1</title>
      </Head>

      <div className="hero">
      <h1>Pages Sandbox for MFE 1</h1>
      <Mfe1 pageState={new PageState()}/>
      </div>
    </div>
  );
};

Home.getInitialProps = async ctx => {
  return {};
};

export default Home;
