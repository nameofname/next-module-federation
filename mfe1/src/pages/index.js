import MfeContainer from '../components/MfeContainer';

async function preFetchData() {
    console.log('Mfe1 : fetching');
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/2");
    console.log('Mfe1 : DONE fetching');
    const json = await data.json();
    // console.log('json response', json);
    return json;
}

const Component = MfeContainer;

export default { Component, preFetchData };
