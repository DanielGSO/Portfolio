/**
 * Next.js App Component
 * 
 * Main application wrapper that provides:
 * - Global CSS imports
 * - Layout wrapper for all pages
 * - Document head configuration with favicon and meta tags
 */

import '../styles/globals.css'
import Layout from '../Layout'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon.png" />
        <title>Daniel González - Portfolio</title>
        <meta name="description" content="Full Stack Developer Portfolio - Daniel González" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}