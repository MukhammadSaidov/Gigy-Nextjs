import React from 'react';
import { Text, Box } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';


const UpcomingGigsCard = (props) => {
    return (
        <Box w='100%' alignItems='center' justifyContent='center' d='flex'>
            <Box border="1px solid #DDE2E5" bgColor="#FCFDFF" w="100%" m={{base:'2vw 0px',sm:'2vw 0px',md:'1vw 0px',lg:'1vw 0px',xl:'1vw 0px'}} p='1vw' borderLeftColor={props.borderLeftColor} borderLeftStyle="solid" borderLeftWidth='5px' borderRadius='4px' >
                <Box d='flex' justifyContent='space-between'>
                    <Box pl='10px' mb='10px'>
                        <Text fontWeight="500" >Retail distributor</Text>
                        <Text color="#8C949C">{props.company}Pepsi Co - Odense</Text>
                    </Box>
                    <Image borderRadius="4px"  mb='20px' w='45px' h='45px'  src='https://pa1.narvii.com/7346/42c6de5842dac44117f0aebd7cea16d53b8e415dr1-500-277_hq.gif'/>
                </Box>

                <Box d='flex' justifyContent='space-between'>
                    <Box  pl='10px'>
                        <Text fontWeight="500" >{props.time}10 am - 12:30 pm</Text>
                        <Text color="#8C949C">{props.uploadTime}Thursday, 13th April,2021</Text>
                    </Box>
                    <Text fontSize='large' fontWeight='600' marginTop="25px" color='#603E94'>{props.money}$60</Text>
                </Box>
            </Box>
        </Box>
    );
};


export default UpcomingGigsCard;