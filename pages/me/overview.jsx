import Head from 'next/head'
import Layout from '../../app/components/LayOut/Layout.jsx'
import ContainerCardRouting from '../../app/containers/Overview/ContainerCardRouting.jsx'

export const getStaticProps = async (props) => {
  console.log(props);
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3')
  const data = await res.json()
  
  return {
    props: {ninja: data}
  }

}


export default function Overview({ninja}) {
  return (
    <div>
      <Head>
        <title>Overview</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout currentPage='Overview'>
        <ContainerCardRouting ninja={ninja}/>
      </Layout>
    </div>
  )
}
