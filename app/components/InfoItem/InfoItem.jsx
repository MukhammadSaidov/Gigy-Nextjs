import React from "react";
import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";
import { TimeIcon } from "@chakra-ui/icons";


const JobInfoItem = (props) => {
    return (
        <Box p="15px" w={{lg:"350px", sm:"87vw", md:"87vw", base:"87vw"}} h="174px" m="15px" borderRadius="4px" border="1px solid #CCC" d="flex" flexDir="column" >
            <Box d="flex">
                <Box marginRight="15px">
                    <Image
                      boxSize="80px"
                      objectFit="cover"
                      borderRadius="4px"
                      src={props.image}
                      alt={props.company}
                      />
                </Box>
                <Box>
                    <Text fontSize="xl">{props.jobRole}</Text>
                    <Text fontWeight="400" fontSize="lg" color="#495057">{props.companyName}</Text>
                    <Text fontWeight="400" fontSize="lg" color="#495057">{props.location}</Text>
                </Box>
            </Box>
            <Box display="flex" marginTop="36px" alignItems="center" justifyContent="space-between">
                <img src="/Icon/Job-Item/u_money-bill.svg" style={{width:"17px"}} />
                <Text marginLeft="5px" marginRight="30px" color="#495057">{props.salary}<Link fontWeight="bold" color="#603E94" >{props.price}</Link></Text>
                <Text marginLeft="5px" color="#495057"><TimeIcon w="10px" h="10px" />{props.date}</Text>
            </Box>
        </Box>    
    )
}

export default JobInfoItem