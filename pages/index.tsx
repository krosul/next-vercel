import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/globals.module.css'
import { MainLayout } from '../components/layouts/MainLayout'
export default function Home() {
  return (
    <MainLayout>
      <h1 className={styles.title}>
        
        Ir a<Link href="/about">about</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{' '}
        <code className={styles.code}>pages/index.js</code>
      </p>
    </MainLayout>
  )
}
