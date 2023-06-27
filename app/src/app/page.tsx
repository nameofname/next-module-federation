"use client";
import '@module-federation/nextjs-mf/src/include-defaults';
import styles from './page.module.css'
import Body from './Body';
// import Mfe1 from 'mfe1/thingy';
// import dynamic from 'next/dynamic';
// const Mfe1 = dynamic(() => import('mfe1/thingy'),
//   { ssr: false },
// );


export default function Home() {
  return (
    <main className={styles.main}>
      <Body />
    </main>
  )
}
