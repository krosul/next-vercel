import styles from "../styles/globals.module.css";

import { MainLayout } from "../components/layouts/MainLayout";
import Link from "next/link";
import DarkLayout from "../components/layouts/DarkLayout";
import React from "react";
import { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";

const About: NextPageWithLayout = () => {
  return (

      <div className={styles.container}>
        <h1>
          Hola estas en about
          <p className={styles.title}>
            Ir a home <Link href="/">Home</Link>
          </p>
        </h1>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/about.js</code>
        </p>
      </div>

  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  );
};
export default About;
