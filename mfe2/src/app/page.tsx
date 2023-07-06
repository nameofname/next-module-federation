import styles from './page.module.css'
import Mfe1 from '../mfe/Mfe1';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Sandbox for MFE</h1>
        <Mfe1 />
      </div>
    </main>
  )
}
