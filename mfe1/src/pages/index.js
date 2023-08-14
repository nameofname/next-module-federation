import MfeContainer from '../components/MfeContainer';

export async function getServerSideProps() {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log('Mfe1 : fetching');
    return await data.json();
}

export const Component = MfeContainer;