import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Header from 'components/header'
import Hero from 'components/hero'
import Footer from 'components/footer'

export default function Home() {
  const pageTitle = 'ページタイトルが入るよ'
  return (
    // TODO: keyを付ける場合は、React.Fragmentで
    // <React.Fragment key="test">
    //   <h1 style={{ color: 'orange' }}>{pageTitle}</h1>
    //   <p>アウトプット</p>
    // </React.Fragment>

    <>
      <Header />

      <main>
        <Hero />
      </main>

      <Footer />
    </>

  )
}
