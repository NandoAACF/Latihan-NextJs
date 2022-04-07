import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components';
import Footer from '../components/footer/footer';
import Layout from '../components/layout/layout';

// Kalau homemodule.css harus diimport. jadi spesifik. jadi kalau namanya sama, dia gak bakal nabrak ke yang lain
export default function Home() {
  return (
    <>
      <Layout pageTitle='Home Page'>
      <Image src="/abotus.png" width={400} height={200} alt="profile"/>
      <h1 className='title'>Welcome Nando :)</h1>
      <h2 className={styles['title-homepage']}>Mangtap</h2>
      </Layout>

    </>
  )
}
