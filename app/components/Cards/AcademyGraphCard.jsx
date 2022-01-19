import React from 'react';
import { Box, Text } from '@chakra-ui/layout';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from '@chakra-ui/layout';
import LineGraph from '../LineGraph/LineGraph';
    



const AcademyGraphCard = (props) => {

    return (    
        <Box  w={{xl:"450px", lg:"250px", md:"92.7vw", sm:"92.7vw", base:"92.7vw",}} h= "200px" display="flex" flexDir="column"  border="0.7px solid #DDE2E5" borderRadius="4px" position="relative"  fontFamily='Lato' fontWeight= 'bold'>
            <Box d="flex">
                <Box justifyContent="space-between" w="100%" p="25px" d="flex" flexDir="column" >
                    <Text textTransform="uppercase" fontWeight="700" color="#8C949C" fontSize="12px" > {props.cardType}</Text>
                    <Box d="flex" justifyContent="space-between" alignItems="center" >
                        <Box>
                            <Text fontSize="20px" color="#495057" fontWeight="600">${props.graphValue}</Text>
                            <Text fontSize="10px" ml="5px" color="#603E94" fontWeight="600">{props.graphPercentage}%</Text>
                        </Box>
                        <Box>
                            <LineGraph/>
                            {/* <img src="/Icon/graph.svg" style={{height: '40px'}} /> */}
                        </Box>
                    </Box>
                </Box>
            </Box>



            <Box d="flex" justifyContent="space-between" borderTop="0.7px solid #DDE2E5" p="3px 25px 3px 25px" h="20px" >
                <Box d="flex" >
                    <Text mr="5px" > {props.totalOrders}</Text>
                    <Text fontWeight="300" >total gig orders</Text>
                </Box>
                <Box>
                    <Link href="/overview"  textTransform="uppercase" color="purple" >view details <ChevronRightIcon color="purple" /> </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default AcademyGraphCard;