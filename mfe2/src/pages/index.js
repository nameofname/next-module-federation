import { cache } from 'react'
import Mfe2Container from '../components/Mfe2Container';

export async function getServerSideProps() {
    // let serverSideData = await fetch('https://jsonplaceholder.typicode.com/todos/2');
    console.log('Mfe2 : fetching');
    let serverSideData = await fetch('http://localhost:5555/two.json');
    console.log('Mfe2 : DONE fetching');
    return await serverSideData.json();
};

export const Component = Mfe2Container;