import MfeContainer from '../components/MfeContainer';

/**
 * This is the entry point for the MFE, it's coded like a React Server Component
 * but we use a workaround to make it act like an RSC, since app router is 
 * not yet supported by nextjs-mf 
 * @returns a react component
 */
export default async function() {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    console.log('Mfe1 : fetching');
    return (<MfeContainer data={await data.json()} />);
}
