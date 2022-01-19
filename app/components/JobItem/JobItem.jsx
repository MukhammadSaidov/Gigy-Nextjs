import React from "react";
import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";
import { ChevronRightIcon } from "@chakra-ui/icons";


const JobItem = (props) => {
    return (
        <>
            <Image
              h={{base:'18vw',sm:'14vw',md:'10vw',lg:'6vw' ,xl:'4vw' }}
              w={{base:'18vw',sm:'14vw',md:'10vw',lg:'6vw' ,xl:'4vw' }}
              objectFit="cover"
              borderRadius="0.5vw"
              src={props.image}
              alt={props.company}
            />
            <Text mt="20px" fontSize="lg">{props.jobRole}</Text>
            <Text fontSize="md" color="#495057">{props.companyName}</Text>
            <Text fontWeight="100" color="#8C949C" mt='13px' mb='13px' fontSize="md">{props.about} Earn good money with your vehicle. Work at your own schedule with no monthly fees.</Text>
            <Box display="flex" marginTop="8px" alignItems="center">
                <img src="/Icon/Job-Item/u_money-bill.svg" style={{width:"17px"}} />
                <Text  marginLeft="10px">Up to <Link m='0px 3px' fontWeight="bold" color="#603E94" >{props.price}</Link> every month</Text>
            </Box>
            <Link mt='13px' href={props.path}  color="#603E94" fontSize={{base:'4vw', ms:'5vw', md:'6vw'}}  display="flex" alignItems="center" textTransform="uppercase">{props.link}<ChevronRightIcon color="#603E94" w={6} h={6} /></Link>
        </>    
    )
}

export default JobItem