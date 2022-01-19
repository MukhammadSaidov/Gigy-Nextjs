import { Box, SimpleGrid, Text } from '@chakra-ui/layout';
import React from 'react';
import data from '../../../../../fake_api/NewsBlog/BlogRecommendationPost.json';
import text from '../../../../../fake_api/NewsBlog/BlogInfo.json'
import Post from '../../../../components/BlogPosts/Post'
import BigPostRightSide from '../../../../components/BlogPosts/BigPostRightSide';
import BlogBigPost from '../../../../components/BlogPosts/BlogBigPost';

const BlogLeftSide = () => {
    return (
        <>
        
            <Box width={{base: "600vw", lg: "82vw", md: "60vw", sm: "65vw"}} margin={{base: "0 25px 0 0", lg: "0", md: "0 25px 0 0", sm: "0 25px 0 0"}}>

                <Box display="flex">
                    <BlogBigPost/> {/* LeftSide */}
                    
                    <BigPostRightSide/>
                </Box> 

                {text.map((item)=>(
                <Text mt="40px" width={{base: "93vw", lg: "1000px", md: "90vw", sm: "90vw"}} mb="15px" fontWeight="400" fontSize="18px" lineHeight="27px" letterSpacing="0.75px" fontFamily="Inter" color="#495057">
                    {item.text}
                </Text>
                ))} {/* Text map */}
                

                <Text mt="70px" fontWeight="600" fontSize="18px" fontFamily="Lato" lineHeight="19px" color="#495057">Did you like this article? Read more like this from our blog</Text>              
                
                <SimpleGrid width={{lg: "84vw", md: "90vw"}} columns={{base: 1, lg: 4, md: 2, sm: 1}} gap={10} mt="70px">
                    {data.map((item) =>
                        <Box margin={{base: "0", lg: "0 0 60px 0", md: "0 20px 20px 0", sm: "0 0 25px 0"}} width={{base: "auto", lg: "auto", md: "100%", sm: "100%"}}>
                            <Post
                            image={item.img} 
                            course={item.course} 
                            author={item.author}
                            name={item.name}
                            jobs={item.jobs}
                            time={item.time}
                            />
                        </Box>
                    )}
                </SimpleGrid> 

            </Box>
        </>
    );
};


export default BlogLeftSide;