import Mfe2Container from '../components/Mfe2Container';

export default async function Home() {
    let serverSideData = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    serverSideData = await serverSideData.json();
    console.log('Mfe2 : fetching');
    return (<Mfe2Container serverSideData={serverSideData} />);
};
