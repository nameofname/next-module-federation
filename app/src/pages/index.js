import { lazy } from "react"
const Mfe1 = lazy(() => import("mfe1/mfe"));
const Mfe2 = lazy(() => import("mfe2/mfe"));

const Home = ({loaded}) => {
  return (
    <div>
    <h1>This is the sample application</h1>
    <div style={{border: '1px solid red', width: '10px', height: '10px', float: 'left'}}></div>
    <p>here's a tiny red square, nice. code codes</p>
    <p>below are the MFEs loaded via module federation : </p>
    <hr />
    <Mfe1 />
    <p>is there an MFE above this? heck yes there is!</p>
    <Mfe2 />
    <p>and yet again, you've been MFE'd</p>
</div>
);
};

Home.getInitialProps = async ctx => {
  return {};
};

export default Home;
