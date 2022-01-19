import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import { Flex, SimpleGrid } from '@chakra-ui/layout';
import BigContent from '../../../components/Website/BigContent/BigContent';
import BlogCard from '../../../components/Website/BlogCard/BlogCard';
import data from '../../../../fake_api/Website/BlogPage/blog-page.json'




const BlogPage = () => {
    
    const [ dataFilter, setDataFilter ] = useState(data)
    const [ activeBg, setActiveBg ] = useState('')
    
    const HandleClick =(event, activeText)=>{
        setDataFilter([])
        setDataFilter(data.filter(item => item.type == activeText))
    }

    const Filter =()=>{
        return(
            <Flex wrap="wrap" justifyContent="space-between" alignItems="center" gridRowGap="25px" >
                {dataFilter.map((item)=>
                    <BlogCard
                        type={item.type}
                        key={item.key}
                        id={item.id}
                        image={item.image}
                        alt={item.alt}
                        title={item.title}
                        authorImg={item.authorImg}
                        authorsImg={item.authorsImg}
                        name={item.name}
                        job={item.job}
                        time={item.time}
                    />
                )}
            </Flex>
        )
    }

    return (
            <Box 
            maxW={{xl:"84vw", lg:"85vw", md:"92vw", sm:"92vw", base:"92vw"}} 
            m="0 auto" 
            d="flex"
            flexDir="column" 
            justifyContent={{xl:"start", lg:"start", md:"center", sm:"center", base:"center"}}
            gridGap="100px"
        >

            <BigContent
                title="From our blog"
                bigText="Read premium stories, articles for free."
                smallText="Interesting, insightful and entertaining articles for your reading plaesure."
            />
            <SimpleGrid maxW={{xl:"70%",lg:"100%", md:"100%", sm:"100%", base:"100%"}} gridGap="15px" wrap="wrap" columns={{lg:"0", md:"4", sm:"2", base:"2"}} >
                <Box color={activeBg == 'Trending' ? "rgba(23, 25, 28, 1)" : 'rgba(73, 80, 87, 1)'} borderBottom={activeBg == 'Trending' ? "6px solid rgba(96, 62, 148, 1)" : '6px solid rgba(188, 171, 215, 1)'} onClick={(event) => HandleClick(event, 'Trending') & setActiveBg('Trending')} _hover={{borderBottomColor:"rgba(96, 62, 148, 1)", color:"rgba(23, 25, 28, 1)"}} borderTopRadius="4px" p={{lg:"0 0.3vw", md:"0 0.2vw", sm:"0vw", base:"0"}}  cursor="pointer" transition=".2s ease" textTransform="uppercase" fontSize={{lg:"30px", md:"23px", sm:"22px", base:"20px"}} >
                    Trending
                </Box>
                <Box color={activeBg == 'Stories' ? "rgba(23, 25, 28, 1)" : 'rgba(73, 80, 87, 1)'} borderBottom={activeBg == 'Stories' ? "6px solid rgba(96, 62, 148, 1)" : '6px solid rgba(188, 171, 215, 1)'} onClick={(event) => HandleClick(event, 'Stories') & setActiveBg('Stories')} _hover={{borderBottomColor:"rgba(96, 62, 148, 1)", color:"rgba(23, 25, 28, 1)"}} borderTopRadius="4px" p={{lg:"0 0.3vw", md:"0 0.2vw", sm:"0vw", base:"0"}}  cursor="pointer" transition=".2s ease" textTransform="uppercase" fontSize={{lg:"30px", md:"23px", sm:"22px", base:"20px"}} >
                    Stories
                </Box>
                <Box color={activeBg == 'Article' ? "rgba(23, 25, 28, 1)" : 'rgba(73, 80, 87, 1)'} borderBottom={activeBg == 'Article' ? "6px solid rgba(96, 62, 148, 1)" : '6px solid rgba(188, 171, 215, 1)'} onClick={(event) => HandleClick(event, 'Article') & setActiveBg('Article')} _hover={{borderBottomColor:"rgba(96, 62, 148, 1)", color:"rgba(23, 25, 28, 1)"}} borderTopRadius="4px" p={{lg:"0 0.3vw", md:"0 0.2vw", sm:"0vw", base:"0"}}  cursor="pointer" transition=".2s ease" textTransform="uppercase" fontSize={{lg:"30px", md:"23px", sm:"22px", base:"20px"}} >
                    Articles
                </Box>
                <Box color={activeBg == 'Fun-Reads' ? "rgba(23, 25, 28, 1)" : 'rgba(73, 80, 87, 1)'} borderBottom={activeBg == 'Fun-Reads' ? "6px solid rgba(96, 62, 148, 1)" : '6px solid rgba(188, 171, 215, 1)'} onClick={(event) => HandleClick(event, 'Fun-Reads') & setActiveBg('Fun-Reads')} _hover={{borderBottomColor:"rgba(96, 62, 148, 1)", color:"rgba(23, 25, 28, 1)"}} borderTopRadius="4px" p={{lg:"0 0.3vw", md:"0 0.2vw", sm:"0vw", base:"0"}}  cursor="pointer" transition=".2s ease" textTransform="uppercase" fontSize={{lg:"30px", md:"23px", sm:"22px", base:"20px"}} >
                    Fun-Reads
                </Box>
            </SimpleGrid>
            <Box>
               <Filter/>
            </Box>
        </Box>
    );
};




export default BlogPage;