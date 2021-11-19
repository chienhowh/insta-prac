import Head from 'next/head'
import React from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modol-atom'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

export default function Home() {
  const [open, SetOpen] = useRecoilState(modalState)
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* header */}
      {open && (<Modal />)}
      <Header />
      <Feed />
    </div>
  )
}
