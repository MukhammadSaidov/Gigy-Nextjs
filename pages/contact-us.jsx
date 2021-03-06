import Head from 'next/head'
import ContactUs from '../app/containers/WebSite/ContactUs/ContactUs'
import LayoutWebsite from '../app/components/Website/Layout/LayoutWebsite'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact-Us</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutWebsite>
          <ContactUs/>
      </LayoutWebsite>
    </div>
  )
}