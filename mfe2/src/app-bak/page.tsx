import React from "react";
import styles from './page.module.css'
import Mfe2 from '../mfe/Mfe2';

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>App Sandbox for MFE</h1>
        <Mfe2 />
      </div>
    </main>
  )
}
