import React, { ReactNode } from "react";
import Header from "..";
import Footer from "../footer/footer";
import styles from "./Layout.module.css";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}
export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>Next Js | {' '} {pageTitle}</title>
        <meta name="description" content="Website NextJs Perdana Nando" />
      </Head>
      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
