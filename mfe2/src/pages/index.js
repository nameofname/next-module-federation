import Mfe2Container from '../components/Mfe2Container';

export async function getServerSideProps() {
    let serverSideData = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    console.log('Mfe2 : fetching');
    return await serverSideData.json();
};

export const Component = Mfe2Container;