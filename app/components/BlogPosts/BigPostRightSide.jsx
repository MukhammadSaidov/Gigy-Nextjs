import React from 'react';
import { Box, Link, Text } from '@chakra-ui/layout';
import { Image } from "@chakra-ui/image";

const BigPostRightSide = () => {
    return (
    
        <Box>
        <Box width="600px" mt="70px" ml="50px" display={{base: "none", lg: "block", md: "none", sm: "none"}}>

            <Box display="flex" alignItems="center" flexDirection="column">
                <Image 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
                    width="60px"
                    height="60px"
                    borderRadius="50%"
                    objectFit="cover"
                    mb="15px"
                />

                <Text width="100px" mb="5px" fontSize="16px" lineHeight="19.2px" color="#495057" fontWeight="500" fontFamily="Lato" fontStyle="normal" >Albert Flores</Text>

                <Text ml="50px" width="200px" textTransform="uppercase" letterSpacing="0.1em" fontSize="14px" lineHeight="14px" color="#8C949C" fontWeight="bold" fontFamily="Lato" fontStyle="normal">digital marketer</Text>
            </Box>

            <Box mt="20px" ml="140px" bgColor="#DDE2E5" height="1px" width="300px"></Box> {/* Line */}

            <Text ml="260px" color="#8C949C" textTransform="uppercase" fontSize="12px" lineHeight="14px" mt="40px" fontWeight="bold" fontStyle="Lato" >Share post</Text>

            <Box mt="24px" ml="280px">
                <Link target="_blank" href="https://linkedin.com">
                    <Image mb="24px" src="/Icon/socialIcons/linkedin.svg" />
                </Link> {/* LinkedIn */}

                <Link target="_blank" href="https://twitter.com">
                    <Image mb="24px" src="/Icon/socialIcons/twitter.svg" />
                </Link> {/* Twitter */}

                <Link target="_blank" href="https://facebook.com">
                    <Image mb="24px" src="/Icon/socialIcons/facebook.svg" />
                </Link> {/* Facebook */}

                <Link target="_blank" href="https://instagram.com">
                    <Image mb="24px" src="/Icon/socialIcons/instagram.svg" />
                </Link> {/* Instagram */}
            </Box>
        </Box>                               
        </Box>        
    );
};

export default BigPostRightSide;