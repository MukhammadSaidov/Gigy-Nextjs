import React from 'react';
import { Box, Text,  } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/react"

const GigaCategory = (props) => {
    return (
        <>
            <Box padding="30px 25px" w={{base: "350px",lg: "370px", xl: "370px", md: "330px", sm: "350px"}} h="250px" borderRadius="8px" boxShadow="0px 3px 12px -1px rgba(28, 52, 84, 0.1), 0px 2px 4px -1px rgba(28, 55, 90, 0.16)">
                <Image src={props.img} />
                <Text m="25px 0" w="223px" color="#17191C" fontSize="21px" fontWeight="500" fontFamily="Lato">{props.text}</Text>
                <Text color="#ACB5BD" fontSize="12px" fontWeight="" textTransform="uppercase" >{props.views}</Text>
            </Box>{/*  Categories Item  */}
        </>
    );
};


export default GigaCategory;