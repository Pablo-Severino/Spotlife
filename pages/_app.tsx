import React from 'react'
import Head from 'next/head'

import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Come and discover the new music site" />
        <meta name="author" content="Pablo Severino" />
        <meta name="robots" content="index, nofollow" />
        <link rel="shortcut icon" href="/120x120.svg" type="image/x-icon" />
      </Head>
      <SessionProvider session={session}>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </SessionProvider>
    </React.Fragment>
  )
}

export default MyApp
