import { MainLayout } from "../../components/layouts/MainLayout";
import Link from "next/link";
import styles from "../../styles/globals.module.css";
import { ReactElement } from 'react';
export default function PricingPage() {
  return (
    <>
      <h1>Hola estas en pricing</h1>
      <h1 className={styles.title}>
        Ir a<Link href="/home">home</Link>
      </h1>

      <p className={styles.description}>
        Get started by editing{" "}
        <code className={styles.code}>pages/pricing/index.js</code>
      </p>
    </>
  );
}

PricingPage.getLayout = function getLayout(page:ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
