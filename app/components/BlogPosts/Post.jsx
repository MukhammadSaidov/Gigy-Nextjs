import React from 'react';
import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Text, Link } from "@chakra-ui/layout";
import { TimeIcon } from "@chakra-ui/icons";

const BlogPosts = (props) => {
    return (
        
        <Box padding="0" width={{base: "90vw", lg: "20vw", md: "45vw", sm: "90vw"}} marginRight={{lg: "0px", md: "0px"}} height={{base: "auto", lg: "324px", md: "324px", sm: "auto"}} borderRadius="4px" border="0.7px solid #DDE2E5" bgColor="#FCFDFF" display="flex" flexDir="column" background="#FCFDFF"  >
            
                <Image
                width={{base: "90vw", lg: "100%", md: "45vw", sm: "90vw"}}
                height={{base: "159.1px", md: "159.1px", sm: "250px"}}
                objectFit="cover"
                borderRadius="4px"
                src={props.image}
                alt={props.company}
                /> {/* Company Image */}
            
            <Text ml={{base: "10px", lg: "20px", md: "15px", sm: "10px"}} width={{base: "70vw", lg: "16vw", md: "30vw", sm: "70vw"}} height="34px" fontWeight="600" fontSize={{base: "16px", lg: "14px", md: "16px", sm: "16px"}} lineHeight="17px" fontFamily="Lato" fontStyle="normal" marginTop="15.9px" marginBottom={{base: "6px", lg: "0", md: "0", sm: "6px"}} >{props.course}</Text> {/* Title */}
            
            <Box ml={{base: "10px", lg: "20px", md: "15px", sm: "10px"}} display="flex" flexWrap={{base: "wrap", lg: "nowrap", md: "nowrap", sm: "wrap"}}  marginTop="24px">
                <Image
                    width="34px"
                    height="34px"
                    objectFit="cover"
                    borderRadius="50%"
                    src={props.author}
                    alt={props.authors}
                /> {/* Author Images */}
                <Box display="flex" flexDirection="column" ml="10px">
                    <Text color="#495057" fontWeight="500" fontSize={{base: "16px", lg: "14px", md: "16px", sm: "16px"}} lineHeight="17px" fontFamily="Lato" fontStyle="normal" mb="5px">{props.name}</Text> {/* Author Name */}
                    <Text color="#8C949C" fontSize={{base: "9px", lg: "8px", md: "9px", sm: "9px"}} fontWeight="bold" fontFamily="Lato" fontStyle="normal" letterSpacing="0.1em" textTransform="uppercase">{props.jobs}</Text> {/* Author Jobs */}
                </Box> 
            </Box>

            <Box ml={{base: "10px", lg: "20px", md: "15px", sm: "10px"}} display="flex" alignItems="center" marginTop="24px" >
                <TimeIcon width={{base: "12px", lg: "10px", md: "12px", sm: "12px"}} height={{base: "12px", lg: "10px", md: "12px", sm: "12px"}} />
                <Text marginLeft="5px" color="#495057" fontWeight="normal" fontFamily="Lato" fontStyle="normal" fontSize={{base: "12px", lg: "10px", md: "12px", sm: "12px"}}  >{props.time}</Text>
            </Box> 

        </Box> 
        
    )
}

export default BlogPosts;