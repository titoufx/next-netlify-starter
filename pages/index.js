import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to freshfooddz.com" />
        <p className="description">
         Welcome to freshfooddz.com This domain name is owned by souici abdelatif.  <code>Contact me for more information</code>
        </p>
        <a href="mailto:souiciabdelatif@gmail.com?subject=contact%20me%20on%200797281597" class="u-btn u-button-style u-palette-2-base u-btn-1"> Contact me
        </a>
      </main>

      <Footer />
    </div>
  )
}
