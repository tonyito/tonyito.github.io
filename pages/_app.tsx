import React, { useState } from 'react'
import { AppProps } from 'next/app'
import 'typeface-roboto'
import '../styles.css'

function MyApp({ Component, pageProps }: AppProps) {

  const [jpn, setJpn] = useState(false);

  return (
    <div>
      <Component {...pageProps} jpn={jpn} setJpn={setJpn}/>
      </div>
  )
}

export default MyApp
