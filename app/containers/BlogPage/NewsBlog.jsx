import React from 'react';
import { Box } from '@chakra-ui/layout';
import BlogCheckbox from '../BlogPage/content/BlogCheckbox.jsx'
import { Flex } from '@chakra-ui/layout';

const NewsBlog = (props) => {
    return (
        <>
            <Box  display={{base: "flex", lg: "flex",  md: "block", sm: "block"}} zIndex="10" >
                <BlogCheckbox />
                <Flex display="flex" gridGap="22px" justifyContent="center" alignItems="center" flexWrap="wrap" padding="25" maxH="80vh" >

                    {props.post}
                    {/* {data.map((item)=>
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
                    )} */}

                </Flex>
            </Box>
        </>
    );
};



export default NewsBlog;