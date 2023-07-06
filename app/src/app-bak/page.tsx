"use client";
import '@module-federation/nextjs-mf/src/include-defaults';
import styles from './page.module.css'
import Body from './Body';


export default function Home() {
  return (
    <main className={styles.main}>
      <Body />
    </main>
  )
}
