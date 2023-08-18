import MfeContainer from '../components/MfeContainer';

export async function getServerSideProps() {
    console.log('Mfe1 : fetching');
    let data = await fetch("http://localhost:5555/two.json");
    console.log('Mfe1 : DONE fetching');
    return await data.json();
}

export const Component = MfeContainer;