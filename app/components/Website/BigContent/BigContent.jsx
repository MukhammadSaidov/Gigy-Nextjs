import React from 'react';
import { Box, Text, Link } from '@chakra-ui/layout';
import { Button } from "@chakra-ui/react"
import NextLink from "next/link"

const BigContent = (props) => {
    
    return (
        <Box 
            d="flex" 
            gridGap="50px" 
            flexDir={{ xl: props.rotate == 'true' ? "row-reverse" : "row", lg: props.rotate == 'true' ? "row-reverse" : "row", md:"column", sm:"column", base:"column"}} 
            justifyContent="space-between" 
            alignItems="center" 
        >
            <Box 
                gridGap="15px" 
                w={{xl:"50%", lg:"50%", md:"88%", sm:"88%", base:"88%"}} 
                d="flex" 
                justifyContent="center" 
                flexDir="column" 
            >
                <Text 
                    textAlign={{xl:"start", lg:"start", md:"center", sm:"center", base:"center"}}
                    fontSize={{xl:"25px", lg:"20px", md:"18px", sm:"18px", base:"18px"}} 
                    color="#495057" 
                    textTransform="uppercase"
                    fontWeight="500"
                >
                    {props.title}
                    
                </Text>
                <Text 
                    textAlign={{xl:"start", lg:"start", md:"center", sm:"center", base:"center"}}
                    color="#17191C" 
                    fontWeight="800"
                    lineHeight={{xl:"73px", lg:"60px", md:"normal", sm:"normal", base:"normal"}}
                    fontSize={{xl:"65px", lg:"50px", md:"32px", sm:"32px", base:"25px"}} 
                >
                    {props.bigText}
                </Text>
                <Text
                    textAlign={{xl:"start", lg:"start", md:"center", sm:"center", base:"center"}}
                    fontSize={{xl:"22px", lg:"21px", md:"18px", sm:"15px", base:"14px"}}
                    color="#495057"
                    fontWeight="400"
                >
                    {props.smallText}
                </Text>
                <Text
                    marginTop="12px"
                    textAlign={{xl:"start", lg:"start", md:"center", sm:"center", base:"center"}}
                    fontSize={{xl:"22px", lg:"21px", md:"18px", sm:"16px", base:"14px"}}
                    color="#495057"
                    fontWeight="400"
                >
                    {props.smallText2}
                </Text>
                <NextLink href='/'>
                    <Box d={{base: "flex", sm: "flex", md: "flex", lg: "unset", xl: "unset"}} justifyContent={{base: "center", sm: "center", md: "center"}} alignItems={{base: "flex", sm: "center", md: "center"}}>
                        <Button mt="16px" d={props.button == true ? "flex" : "none"} _hover="none" _focus="none" padding="20px" textTransform="uppercase" fontWeight="500" fontSize="16px" borderRadius="8px" variant="solid" bgColor="#603E94" color="#fff" width={{xl:"200px", lg:"200px", md:"250px", sm:"250px"}} >
                            {props.buttonText}
                        </Button>
                    </Box>
                </NextLink> {/* Button */}
                <Box d={{base: "flex", sm: "flex", md: "flex", lg: "unset", xl: "unset"}} justifyContent={{base: "center",sm: "center", md: "center"}} alignItems={{base: "center", sm: "center", md: "center"}}>
                    <Text mt="16px" color="#495057" fontWeight="normal" fontSize="16px" lineHeight="19px" fontFamily="Lato">{props.smallText3}
                        <span>
                            <NextLink href="/login-page">
                            <Link _hover={{textDecoration:'none'}} pl="8px" fontSize="18px" fontWeight="600">{props.signIn}</Link>
                            </NextLink>
                        </span>
                    </Text> {/* Text & Link */}
                </Box>
                    
            </Box>
            <Box 
                d="flex" 
                alignItems="center" 
                justifyContent="center" 
                w={{xl:"50%", lg:"50%", md:"85%", sm:"85%", base:"85%"}} 
            >
                <img style={{width:"100%"}} src={props.bigImage} />
            </Box>
        </Box>
    );
};

export default BigContent;