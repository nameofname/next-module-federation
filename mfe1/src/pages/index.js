import MfeContainer from '../components/MfeContainer';

async function preFetchData() {
    console.log('Mfe1 : fetching');
    let data = await fetch("http://localhost:5555/two.json");
    console.log('Mfe1 : DONE fetching');
    return await data.json();
}

const Component = MfeContainer;

export default { Component, preFetchData };
