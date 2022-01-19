import { Box, Container , Text} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import React from "react";
const UserInformation =(props)=>{

    return(
        <Box h='100%' w='330px' p='1vw 1vw 2vw 1vw' alignItems='center' justifyContent='center'>
            <Box>

                <Box textAlign='center' w='auto' d='grid' justifyContent='center' >
                    <Image m='auto'  w='85px' h='85px' borderRadius='100%'  src="https://uprostim.com/wp-content/uploads/2021/03/image096-74.jpg" alt="" />
                    <Text fontWeight="700" fontSize="20px" >Joseph Abia</Text>
                    <Text color="#8C949C" fontSize="15px" >joanababia1@gmail.com</Text>
                </Box>


                <Container border="1px solid #DDE2E5" borderRadius="5.28px" w="300px" h="80px" m='2vw 0px 2vw 0px' d='flex'  alignItems='center' justifyContent='space-between'>
                    <Box d='flex'  alignItems='center'>
                        <Box w="30px" mr="10px" justifyContent="center" h="30px" d='flex' alignItems='center' borderRadius="5px" bgColor="rgba(232, 229, 241, 0.7);" >
                            <img src="/Icon/fi_inbox.svg" alt="" />
                        </Box>

                        <Box textAlign='start'> 
                            <Text fontSize="large" fontWeight="700" color="#495057" >4</Text>
                            <Text textTransform="uppercase" color="#8C949C" fontSize="10px" >current gigs</Text>
                        </Box>
                    </Box> 

                    <Box w="1px" height="70%" borderRight="1px solid #DDE2E5" >
                        
                    </Box>
                    <Box d='flex'  alignItems='center'>
                        <Box textAlign='end'>
                            <Text fontSize="large" fontWeight="700" color="#495057" >3</Text>
                            <Text textTransform="uppercase" color="#8C949C" fontSize="12px" >courses</Text>
                        </Box>
                        <Box w="30px" ml="15px" justifyContent="center" h="30px" d='flex' alignItems='center' borderRadius="5px" bgColor="rgba(232, 229, 241, 0.7);" >
                            <img src="/Icon/fi_book.svg" alt="" />
                        </Box>
                    </Box>
                    
                </Container>
            </Box>


            <Box borderRadius='4%' mb='2vw' h='380px' textAlign='center' bgGradient={["linear(to-tr, teal.300, yellow.400)","linear(to-t, blue.200, teal.500)","linear(to-b, orange.100, purple.300)",]}>
                <h1>Calendar</h1>
            </Box>

            <Box>
                <h4>Upcoming gigs</h4>

                {props.upcomingGigsCard}                
            </Box>
        </Box>
    )
}
export default UserInformation;


{/* <Container  m='2vw 0px 2vw 0px' p='0px' borderLeft='5px solid #A698C8' borderRadius='4px' >
                    <Container p='0px' d='flex' justifyContent='space-between'  alignItems='center'>
                        <Box pl='10px' mb='10px'>
                            <h4>Retail distributor</h4>
                            <small>Pepsi Co - Odense</small>
                        </Box>
                       
                        <Image  mb='20px' w='45px' h='45px' mr='-5px'  src="https://www.logolynx.com/images/logolynx/62/6200a8d21af24870c9f48e3ce3757bd9.jpeg"/>
                    </Container>

                    <Container  p='0px' d='flex' justifyContent='space-between'  alignItems='center'>
                        <Box  pl='10px'>
                            <h4>10 am - 12:30 pm</h4>
                            <small>Thursday, 13th April,2021</small>
                        </Box>
                        <Text fontSize='22px' fontWeight='600' color='#603E94'>$60</Text>
                    </Container>
                </Container>


                <Container  m='2vw 0px 2vw 0px' p='0px' borderLeft='5px solid #FF8E80' borderRadius='4px' >
                    <Container p='0px' d='flex' justifyContent='space-between'  alignItems='center'>
                        <Box pl='10px' mb='10px'>
                            <h4>Retail distributor</h4>
                            <small>Pepsi Co - Odense</small>
                        </Box>
                       
                        <Image  mb='20px' w='45px' h='45px' mr='-5px'  src="https://www.logolynx.com/images/logolynx/62/6200a8d21af24870c9f48e3ce3757bd9.jpeg"/>
                    </Container>

                    <Container  p='0px' d='flex' justifyContent='space-between'  alignItems='center'>
                        <Box  pl='10px'>
                            <h4>10 am - 12:30 pm</h4>
                            <small>Thursday, 13th April,2021</small>
                        </Box>
                        <Text fontSize='22px' fontWeight='600' color='#603E94'>$60</Text>
                    </Container>
                </Container>


                <Container  m='2vw 0px 2vw 0px' p='0px' borderLeft='5px solid #AFE9D3' borderRadius='4px' >
                    <Container p='0px' d='flex' justifyContent='space-between'  alignItems='center'>
                        <Box pl='10px' mb='10px'>
                            <h4>Retail distributor</h4>
                            <small>Pepsi Co - Odense</small>
                        </Box>
                       
                        <Image  mb='20px' w='45px' h='45px' mr='-5px'  src="https://www.logolynx.com/images/logolynx/62/6200a8d21af24870c9f48e3ce3757bd9.jpeg"/>
                    </Container>

                    <Container  p='0px' d='flex' justifyContent='space-between'  alignItems='center'>
                        <Box  pl='10px'>
                            <h4>10 am - 12:30 pm</h4>
                            <small>Thursday, 13th April,2021</small>
                        </Box>
                        <Text fontSize='22px' fontWeight='600' color='#603E94'>$60</Text>
                    </Container>
                </Container> */}