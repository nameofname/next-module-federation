import ClientComponent from './ClientComponent';


export default function Mfe2Container({ serverSideData }) {
    return (
        <main style={{border: '1px solid purple'}}>
            <h2>This is MFE 2</h2>
            <i>Here is server fetched data : </i>
            <code>{JSON.stringify(serverSideData)}</code>
            <ClientComponent />
        </main>
    )
}
