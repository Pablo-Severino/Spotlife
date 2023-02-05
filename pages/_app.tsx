import Head from "next/head";
import type { AppProps } from "next/app";

import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Generated by create next app" />
        <meta name="author" content="Pablo Severino" />
        <meta name="robots" content="index, nofollow" />
        <link rel="icon" href="/120x120.svg" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
