import React from 'react';
import { Box, Text } from '@chakra-ui/layout';
import { TimeIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";

const BlogBigPost = (props) => {
    return (
        <Box>
            <Text mt="64px"  width={{base: "93vw", lg: "1000px", md: "91vw", sm: "90vw"}} lineHeight="46px" fontSize="38px" fontWeight="bold" fontStyle="normal" fontFamily="Lato" color="#495057">{props.postTitle}</Text>

            <Text mt="32px"  width={{base: "93vw", lg: "1000px", md: "91vw", sm: "90vw"}} lineHeight="25px" fontSize="21px" fontWeight="500" fontStyle="normal" color="#8C949C" >Getting valuable insights from persons who have towed the path long ahead of you is a sure way to succeed at whatever profession. Entrepreneurship is no different</Text>

            <Box width={{base: "93vw", lg: "1000px", md: "90vw", sm: "85vw"}} mt="56px" display="flex" alignItems="center" justifyContent="space-between">  
            
                <Box display="flex" alignItems="center">
                    <Image 
                        src="https://images.unsplash.com/photo-1633113089631-6456cccaadad?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                        width={{base: "35px", lg: "40px", md: "40px", sm: "35px"}}
                        height={{base: "35px", lg: "40px", md: "40px", sm: "35px"}}
                        borderRadius="50%"
                        objectFit="cover"
                    />

                    <Box ml="7px" display="flex" flexDirection="column">
                        <Text mb="5px" fontSize="16px" lineHeight="19.2px" color="#495057" fontWeight="500" fontFamily="Lato" fontStyle="normal" >Albert Flores</Text>

                        <Text textTransform="uppercase" letterSpacing="0.1em" fontSize="12px" lineHeight="14px" color="#8C949C" fontWeight="bold" fontFamily="Lato" fontStyle="normal">digital marketer</Text>
                    </Box> {/* LeftBox Text */}
               </Box> {/* Left Box */}

                <Box display={{base: "none", lg: "flex", md: "flex", sm: "none"}} flexDirection="column">
                    <Text mb="5px" fontSize="16px" lineHeight="19.2px" color="#495057" fontWeight="500" fontFamily="Lato" fontStyle="normal" >April 3, 2021</Text>

                    <Box  display="flex" alignItems="center" >
                        <TimeIcon width="10px" height="10px" />
                    
                        <Text letterSpacing="0.1em" marginLeft="5px" fontSize="12px" lineHeight="14px" color="#8C949C" fontWeight="bold" fontFamily="Lato" fontStyle="normal">3 minutes read</Text>
                        </Box> 
                </Box> {/* RightBox */}

            </Box> {/*  */}

            <Image 
                src="https://images.unsplash.com/photo-1633113089631-6456cccaadad?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                mt={{base: "15px", lg: "42px", md: "30px", sm: "15px"}}
                width={{base: "93vw", lg: "1000px", md: "90vw", sm: "90vw"}}
                height={{base: "75vw", lg: "450px", md: "55vw", sm: "60vw"}}
                objectFit="cover"
                borderRadius="8px"
            />

        </Box>
    );
};

export default BlogBigPost;