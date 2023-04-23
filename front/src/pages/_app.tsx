import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Urbanist, Oswald } from 'next/font/google'
import { Header, Footer } from '@/components'

const urbanist = Urbanist({
  subsets: ['latin']
})

const oswald = Oswald({
  subsets: ['latin']
})

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
        :root {
          --font-urbanist: ${urbanist.style.fontFamily};
          --font-oswald: ${oswald.style.fontFamily};
        }
      `}
      </style>

      <Head>
        <meta charSet='utf-8' />
        <title>rxtsel - Tienda Virtual</title>
      </Head>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
