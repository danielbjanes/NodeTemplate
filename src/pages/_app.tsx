// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}


export default MyApp