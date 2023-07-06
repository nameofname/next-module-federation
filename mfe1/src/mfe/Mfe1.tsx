import ClientComponent from './ClientComponent';

/**
 * Top level MFE component. 
 * This is a server component, so no interactivity can be programmed at this level
 * @returns 
 */
export default function Mfe1() {
  return (
    <main style={{border: '1px solid green'}}>
      <h2>This is MFE 1</h2>
      <ClientComponent />
    </main>
  )
}
