import { Box, SimpleGrid, Text } from '@chakra-ui/layout';
import React from 'react';
import text from '../../../../../fake_api/NewsBlog/BlogInfo.json'
import BigPostRightSide from '../../../../components/BlogPosts/BigPostRightSide';

const BlogReadme = (props) => {
    return (
        <>
            <Box margin={{base: "0 30px", lg: "0 0 0 23px", md: "0 40px", sm: "0 30px"}} width={{base: "100%", lg: "1000px", md: "100%", sm: "100%"}} display="flex">
                <Box width={{base: "600vw", lg: "82vw", md: "60vw", sm: "65vw"}} margin={{base: "0 25px 0 0", lg: "0", md: "0 25px 0 0", sm: "0 25px 0 0"}}>

                    <Box display="flex">
                        {props.blogBigPost}
                        {/* <BlogBigPost/> LeftSide */}

                        {/* {props.bigPostRightSide} */}
                        <BigPostRightSide/>
                    </Box> 

                    {text.map((item)=>(
                    <Text mt="40px" width={{base: "93vw", lg: "1000px", md: "90vw", sm: "90vw"}} mb="15px" fontWeight="400" fontSize="18px" lineHeight="27px" letterSpacing="0.75px" fontFamily="Inter" color="#495057">
                        {item.text}
                    </Text>
                    ))} {/* Text map */}

                    
                    <Text mt="70px" fontWeight="600" fontSize="18px" fontFamily="Lato" lineHeight="19px" color="#495057">Did you like this article? Read more like this from our blog</Text>              
                    
                    <SimpleGrid width={{lg: "84vw", md: "90vw"}} columns={{base: 1, lg: 4, md: 2, sm: 1}} gap={10} mt="70px">
                        {props.post}
                        {/* {data.map((item) =>
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
                        )} */}
                    </SimpleGrid> 
                        
                </Box>
                {/* <BlogSide /> */}
            </Box>
        </>
    );
};


export default BlogReadme;