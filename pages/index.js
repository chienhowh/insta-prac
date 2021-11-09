import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      <Header />

    </div>
  )
}
