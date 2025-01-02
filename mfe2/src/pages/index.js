import Mfe2Container from '../components/Mfe2Container';

async function preFetchData() {
    console.log('Mfe2 : fetching');
    let serverSideData = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log('Mfe2 : DONE fetching');
    return await serverSideData.json();
};

const Component = Mfe2Container;

export default { Component, preFetchData };
