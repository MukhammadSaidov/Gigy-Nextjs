import React from "react";
import { Box, Container , Text} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import data from "../../../fake_api/JsonCardOverview/JsonCardOverview.json"

const MobileOverview = (props) => {
    return(

        <Box d="flex" flexDir="column" w="100%" gridGap="50px" alignItems="center" justifyContent="center" >
            <Box d="flex" flexDir="column" gridGap="12px" >
                {props.CardOverview}
            </Box>

            <Container d="flex" w="92vw" flexDir="column" gridGap="30px" >

                <Box textAlign='center'  >
                    <Image m='auto'  w='100px' h='100px' borderRadius='100%'  src="https://uprostim.com/wp-content/uploads/2021/03/image096-74.jpg" alt="" />
                    <Text fontWeight="700" fontSize="25px" >Joseph Abia</Text>
                    <Text color="#8C949C" fontSize="17px" >joanababia1@gmail.com</Text>
                </Box>


                <Container m='0px' p='10px' border="1px solid #DDE2E5" borderRadius="5.28px" d='flex' w="100%" alignItems='center' justifyContent='space-between'>
                    <Box d='flex' alignItems='center'>
                        <Box w="40px" mr="15px" justifyContent="center" h="40px" d='flex' alignItems='center' borderRadius="5px" bgColor="rgba(232, 229, 241, 0.7);" >
                            <img src="/Icon/fi_inbox.svg" alt="" />
                        </Box>

                        <Box textAlign='start'> 
                            <Text fontSize="large" fontWeight="700" color="#495057" >4</Text>
                            <Text textTransform="uppercase" color="#8C949C" fontSize={{base:'0px',sm:"12px",md:"12px"}} >current gigs</Text>
                        </Box>
                    </Box> 
                    <Box w="1px" height="70%" borderRight="1px solid #DDE2E5" >
                        
                    </Box>
                    <Box d='flex'  alignItems='center'>
                        <Box textAlign='end'>
                            <Text fontSize="large" fontWeight="700" color="#495057" >3</Text>
                            <Text textTransform="uppercase" color="#8C949C" fontSize={{base:'0px',sm:"12px",md:"12px"}} >courses</Text>
                        </Box>
                        <Box w="40px" ml="15px" justifyContent="center" h="40px" d='flex' alignItems='center' borderRadius="5px" bgColor="rgba(232, 229, 241, 0.7);" >
                            <img src="/Icon/fi_book.svg" alt="" />
                        </Box>
                    </Box>
                </Container>

            </Container>

            <Box width="100%" >
                <Box p='10px 0px 10px 25px' borderTop="1px solid #DDE2E5" borderBottom="1px solid #DDE2E5" >
                    <Text  fontFamily='Lato' fontWeight='600' fontSize='20px'>{data[0].ContainerJobsCard.NameContainer}</Text>
                </Box>
                <Box d= 'flex' gridGap="12px" alignItems= 'center' flexDir="column" p='2vw 3vw'>
                    {props.CardJobs}
                </Box>
            </Box>
            
            <Box width="100%" >
                <Box p='10px 0px 10px 25px' borderTop="1px solid #DDE2E5" borderBottom="1px solid #DDE2E5" >
                    <Text  fontFamily='Lato' fontWeight='600' fontSize='20px'>{data[0].ContainerCardJobPostings.NameContainer}</Text>
                </Box>
                <Box  d= 'flex' alignItems= 'center' gridGap="12px" flexDir="column" p='2vw 3vw'>
                    {props.CardJobPostings}
                </Box>
            </Box>

            <Box width="100%" >
                <Box p='1vw 0px 1vw 25px' borderTop="1px solid #DDE2E5" borderBottom="1px solid #DDE2E5" >
                    <Text  fontFamily='Lato' fontWeight='600' fontSize='20px'>My Calandar and Availability</Text>
                </Box>

                <Box mt='2vw' borderRadius='4%' mb='2vw' h='380px' textAlign='center' bgGradient={["linear(to-tr, teal.300, yellow.400)","linear(to-t, blue.200, teal.500)","linear(to-b, orange.100, purple.300)",]}>
                    <h1>Calendar</h1>
                </Box>
            </Box>
            
            <Box d="flex" flexDir="column">
                <Box d="flex" w="92vw" justifyContent="flex-start">
                    <Text color="#8C949C" fontSize="x-large" marginTop="25px" >Upcoming gigs</Text>
                </Box>
                <Box>
                    {props.upcomingGigsCard}
                </Box>
            </Box>
            
            <Box width="100%" >
                <Box p='10px 0px 10px 25px' borderTop="1px solid #DDE2E5" borderBottom="1px solid #DDE2E5" >
                    <Text  fontFamily='Lato' fontWeight='600' fontSize='20px'>{data[0].ContainerCardRecentPosts.NameContainer}</Text>
                </Box>
                <Box  d='flex' alignItems= 'center' gridGap="12px" flexDir="column" p='2vw 3vw'>
                    {props.CardRecentPosts}
                </Box>
            </Box>

        </Box>
    )
}

export default MobileOverview