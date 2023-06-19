import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        and heres a div with something in it
        <div style={{border: '1px solid red', width: '10px', height: '10px', float: 'left'}}></div>
        <p>here's some more crap</p>
      </div>
    </main>
  )
}
