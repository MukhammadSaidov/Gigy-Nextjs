import React from "react";
import { Box, Text, Link } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";

const EmptyPage = (props) => {
    return(
        <Box d="flex" pos="relative" flexDir="column" h="100%" justifyContent="center" textAlign="center" alignItems="center">
            <Image w={{lg:"450px",md:"30vw",sm:"50vw",base:"60vw"}} src={props.emptyImg}/>
            <Text fontSize={{lg:"40px",md:"27px",sm:"27px",base:"27px"}} fontWeight="700" marginBottom="30px" marginTop="30px" color="#495057">{props.bigText}</Text>
            <Text fontSize={{lg:"24px",md:"17px",sm:"17px",base:"17px"}} w="70%" marginBottom="40px" fontWeight="500" color="#8C949C">{props.smallText}</Text>
            <Link textDecor="none" pos={{lg:"static",md:"absolute",sm:"absolute",base:"absolute"}} bottom="-40px" href={props.route}>
                <Button colorScheme="purple" variant="solid" w={{lg:"278px",md:"85vw",sm:"85vw",base:"85vw"}} textTransform="uppercase" fontWeight="580" h="45px">{props.btnText}</Button>
            </Link>
        </Box>
    )
}

export default EmptyPage

// "/Icon/EmptyPages/Empty1.svg"