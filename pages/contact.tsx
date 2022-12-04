import styles from '../styles/globals.module.css'

import Link from "next/link";
import { MainLayout } from '../components/layouts/MainLayout';
export default function Contact() {
    return (
        <MainLayout>
            <div className={styles.container}>
                <h1>
                    Hola estas en Contact
                </h1>
                <p className={styles.title}>
                    Ir a home <Link href="/">Home</Link>
                </p>
                <p className={styles.description}>
                    Get started by editing{' '}
                    <code className={styles.code}>pages/contact.js</code>
                </p>
            </div>
        </MainLayout>
    );
}
