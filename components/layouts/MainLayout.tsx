import styles from "./MainLayout.module.css";
import Head from "next/head";
import React from "react";
import Navbar from "../Navbar";

type Props = {
  children?: React.ReactNode;
};
export const MainLayout:  React.FC<Props> = ({ children }) => {

  return (
    <div className={styles.container}>
      <Navbar />
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>{children}</main>
    </div>
  );
};
