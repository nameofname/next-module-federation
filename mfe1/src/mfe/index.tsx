import { useEffect, useState } from 'react';
import PageState from 'pageState';
import ClientComponent from './ClientComponent';


type Mfe1Props = {
  pageState: PageState;
};


export default function Mfe1({ pageState }: Mfe1Props) {
  const [ res, setRes ] = useState({});
  useEffect(() => {
    async function fetchData() {
      const data = await pageState.fetch({ url: 'https://jsonplaceholder.typicode.com/todos/1' });
      setRes(data.json());
    }
    fetchData();
  });
  return (
    <main style={{border: '1px solid green'}}>
      <h2>This is MFE 1 bloopers</h2>
      <p>Here's some stuff fetched on the server : </p>
      <code>{JSON.stringify(res)}</code>
      <ClientComponent />
    </main>
  )
}
