import Head from 'next/head'

import Sidebar from '../components/Sidebar'
import Center from '../components/Center'
import Player from '../components/Player'
import { GetSessionParams, getSession } from 'next-auth/react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Spotlife</title>
      </Head>
      <div className="bg-black h-screen overflow-hidden">
        <main className="flex">
          <Sidebar />
          <Center />
        </main>

        <div className="sticky bottom-0">
          <Player />
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context: GetSessionParams) {
  const session = await getSession(context);

  return {
    props: {
      session,
    }
  }
}