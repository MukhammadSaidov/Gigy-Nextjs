import React from 'react';
import { Box, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";


const BlogCard = (props) => {
    return (
        
        <Box key={props.key} id={props.id} type={props.type} pos="relative" padding="0" boxShadow='0px 3px 12px -1px rgba(28, 52, 84, 0.1)' width={{base: "100%", lg: "32%", md: "47%", sm: "47%"}} height={{base: "auto", lg: "50vh", md: "50vh", sm: "auto"}} borderRadius="8px"  bgColor="#FCFDFF" display="flex" flexDir="column" background="#FCFDFF"  >

            <Box pos="absolute"  ></Box>

            <Image
                width={{base: "90vw", lg: "100%", md: "45vw", sm: "90vw"}}
                height={{lg:"",base: "259.1px", md: "259.1px", sm: "250px"}}
                border="none"
                objectFit="cover"
                borderRadius="8px"
                src={props.image}
                alt={props.alt}
            /> {/* Company Image */}
            
            <Text ml={{base: "10px", lg: "20px", md: "15px", sm: "10px"}}  height="34px" fontWeight="600" fontSize={{base: "16px", lg: "14px", md: "14px", sm: "14px"}} lineHeight="17px" fontFamily="Lato" fontStyle="normal" marginTop="15.9px" marginBottom={{base: "6px", lg: "0", md: "0", sm: "6px"}} >{props.title}</Text> {/* Title */}
            
            <Box ml={{base: "10px", lg: "20px", md: "15px", sm: "10px"}} display="flex" flexWrap={{base: "wrap", lg: "nowrap", md: "nowrap", sm: "wrap"}}  marginTop="24px">
                <Image
                    width="34px"
                    height="34px"
                    objectFit="cover"
                    borderRadius="50%"
                    src={props.authorImg}
                    alt={props.authorsImg}
                /> {/* Author Images */}
                <Box display="flex" flexDirection="column" ml="10px">
                    <Text color="#495057" fontWeight="500" fontSize={{base: "16px", lg: "14px", md: "16px", sm: "16px"}} lineHeight="17px" fontFamily="Lato" fontStyle="normal" mb="5px">{props.name}</Text> {/* Author Name */}
                    <Text color="#8C949C" fontSize={{base: "9px", lg: "8px", md: "9px", sm: "9px"}} fontWeight="bold" fontFamily="Lato" fontStyle="normal" letterSpacing="0.1em" textTransform="uppercase">{props.job}</Text> {/* Author Jobs */}
                </Box> 
            </Box>

            <Box ml={{base: "10px", lg: "20px", md: "15px", sm: "10px"}} h="50px" display="flex" alignItems="center" marginTop="24px" >
                <Image src="/Icon/website-icons/book.svg" width={{base: "12px", lg: "17px", md: "12px", sm: "12px"}} height={{base: "12px", lg: "10px", md: "12px", sm: "12px"}} />
                <Text marginLeft="5px" color="#495057" fontWeight="normal" fontFamily="Lato" fontStyle="normal" fontSize={{base: "12px", lg: "15px", md: "12px", sm: "12px"}}  >{props.time}</Text>
            </Box> 

        </Box> 
        
    )
}

export default BlogCard;