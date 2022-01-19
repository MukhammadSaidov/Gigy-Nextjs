import { Input } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../../../app/components/LayOut/Layout.jsx'
import { Text } from '@chakra-ui/layout';
import NewsBlog from '../../../app/containers/BlogPage/NewsBlog'
import { Button } from '@chakra-ui/button';
import BlogPosts from '../../../app/components/BlogPosts/Post.jsx';
import Link from 'next/link';


export const getStaticProps = async () => {

  const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=9')
  const data = await res.json()
  
  return {
    props: {ninja: data}
  }

}

export default function Home({ninja}) {
  return (
    <div>
      <Head>
        <title>News and Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout 
        currentPage={<Text margin="30px -25px 30px 0 " fontWeight="600" fontSize="16px" lineHeight="19,2">News and Blog</Text>}
        searchInput={<Input  w={{lg:"18vw" , base:"75vw"}}  placeholder="Search "/>} 
        searchButton={<Button ml='5vw'  colorScheme="purple" w="20vw" fontWeight="normal">Search</Button>}   
        searchIcon={"searchIcon"}
        filter={"filter"}
       /* Blog Title */
       searchInput={<Input  w={{lg:"18vw" , base:"75vw"}}  placeholder="Search "/>} 

      > {/* Layout Inputs */}

        <NewsBlog
          post={
            ninja.map(item => 
              <Link href={'/me/blog/' + item.id + '/blogRead'} key={item.id}>
                <a href="">
                  <BlogPosts
                    course={item.name}
                    />
                </a>
              </Link>
            )
           }
        />

      </Layout>
    </div>
  )
}