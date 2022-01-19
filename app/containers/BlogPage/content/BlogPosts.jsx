import React from 'react';
import data from '../../../../fake_api/NewsBlog/BlogPosts.json'
import Post from '../../../components/BlogPosts/Post.jsx'
import { Box, Flex } from '@chakra-ui/layout';

const BlogPosts = () => {
    return (
        <Flex display="flex" gridGap="22px" justifyContent="center" alignItems="center" flexWrap="wrap" padding="25" maxH="80vh" >
            
            {data.map((item)=>
                <Box margin={{base: "0", md: "0", sm: "0 10px"}} width="auto">
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

         </Flex>
    );
};


export default BlogPosts;