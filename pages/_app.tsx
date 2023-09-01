import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import {Montserrat} from '@next/font/google'

const montserrat = Montserrat({
  subsets: ["latin"],  
  weight: "400"
 })
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.className}>
    <Head>
      <title>Giru</title>
      <link rel="icon" href="/logo.png" />
      
    </Head>
    <Component {...pageProps} />
  </div>)
}
