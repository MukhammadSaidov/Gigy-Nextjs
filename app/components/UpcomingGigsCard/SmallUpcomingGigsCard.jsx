import React from 'react';
import { Container, Text, Box } from '@chakra-ui/layout';

const SmallUpcomingGigsCard = (props) => {
    return (    
        <Container d="flex" maxW="none" marginBottom="25px" border="1px solid #DDE2E5" bgColor="#FCFDFF" w={{xl:"450px",lg:"250px",md:"92vw",sm:"92vw",base:"92vw",}} h="80px" borderLeftColor={props.rColor} borderLeftStyle="solid" borderLeftWidth='5px' borderRadius='4px'>

            <Box justifyContent="center" alignItems="flex-start" w="40%" d="flex" flexDir="column">
                <Text fontSize="17px" fontWeight="500">{props.job}</Text>
                <Text fontSize="17px" color="#8C949C">{props.company} - {props.location}</Text>
            </Box>

            <Box justifyContent="center" alignItems="flex-start" w="50%" d="flex" flexDir="column">
                <Text fontSize="17px" fontWeight="500">
                    {props.time}</Text>
                <Text color="#8C949C">{props.uploadTime}</Text>
            </Box>

            <Box h="" d="flex" justifyContent="center" alignItems="center"  w="10%">
                <Text alignSelf="center" fontSize='large' fontWeight='600' color='#603E94'>{props.money}$</Text>
            </Box>
            
        </Container>
    );
};


export default SmallUpcomingGigsCard;