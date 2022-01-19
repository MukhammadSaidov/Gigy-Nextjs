import Head from 'next/head'
import Layout from '../app/components/Website/Layout/LayoutWebsite'
import Landing from '../app/containers/WebSite/LandingPage/Landing'

export default function Home() {
  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Landing />
      </Layout>
      
    </>
  )
}