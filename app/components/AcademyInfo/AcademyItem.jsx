import React from 'react';
import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Text, Link } from "@chakra-ui/layout";
import { EmailIcon, BellIcon, ChevronRightIcon } from "@chakra-ui/icons";

const AcademyItem = (props) => {
    return (
        
        <Box ml={{base: "0", lg: "25px", md: "0", sm: "0"}} padding="15px" width={{base: "87vw", lg: "350px", md: "45vw", sm: "87vw"}} height={{base: "360px", lg: "330px", md: "330px", sm: "350px"}} borderRadius="4px" border="1px solid #CCC" display="flex" flexDir="column" >
            <Image
              boxSize="65px"
              objectFit="cover"
              borderRadius="4px"
              src={props.image}
              alt={props.company}
            />
            <Text marginTop="14px" fontSize="lg">{props.jobRole}</Text>
            <Text fontWeight="400" marginBottom="5px" fontSize="md" color="#495057">{props.companyName}</Text>
            <Text fontWeight="600" marginBottom="5px" fontSize="16px" color="#495057">{props.title}</Text>
            <Text fontWeight="400" color="#8C949C" fontSize={{base: "15px", lg: "14px", md: "15px", sm: "15px"}} paddingTop="10px" >{props.about}</Text>
            <Box display="flex" marginTop="8px" alignItems="center">
                {/* <EmailIcon boxSize="10px" /> */}
                <Text>{props.salary}<Link fontWeight="bold" color="#603E94" >{props.price}</Link></Text>

                <Box display="flex"  alignItems="center" marginTop="24px" >
                    <BellIcon width={{base: "15px", lg: "10px", md: "15px", sm: "15px"}} height={{base: "15px", lg: "10px", md: "15px", sm: "15px"}} />
                    <Text marginLeft="5px" color="#495057" fontWeight="400" fontSize={{base: "14px", lg: "10px", md: "14px", sm: "14px"}}>{props.duration}</Text>
                </Box>
                
                <Box display="flex" alignItems="center" paddingLeft="15px" marginTop="24px">
                    <EmailIcon width={{base: "15px", lg: "10px", md: "15px", sm: "15px"}} height={{base: "15px", lg: "10px", md: "15px", sm: "15px"}} />
                    <Text marginLeft="10px" fontSize={{base: "14px", lg: "10px", md: "14px", sm: "14px"}} fontWeight="400" color="#495057" >{props.proof}</Text>
                </Box>

            </Box>
            <Link href={props.path} color="#603E94" fontSize={{base: "12px", lg: "10px", md: "12px", sm: "12px"}} fontWeight="bold"  marginTop="20px" display="flex" alignItems="center" mb={{base: "20px", lg: "0", sm: "5px", md: "0"}} textTransform="uppercase">{props.link}
            <ChevronRightIcon color="#603E94" w={{base: 8, lg: 6, md: 8, sm: 8}}  h={{base: 8, lg: 6, md: 8, sm: 8}} />
            </Link>
        </Box>    
    )
}

export default AcademyItem;