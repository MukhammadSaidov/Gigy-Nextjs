import React from "react";
import { Grid } from "@chakra-ui/react"
import { Image } from "@chakra-ui/image";
import { Box,SimpleGrid,Badge,Text,Container, Flex } from "@chakra-ui/layout";

const ProfileMobile =(props)=>{

    return(
        <>
            <Grid templateColumns="repeat(1fr)"  gap={6} w='100%' d={{base:'block' , sm:"block" , md:'block' , lg:'none', xl:'none' }}>
                <Box  w="100%" h='auto'>
                    <Box textAlign='center' alignItems='center' justifyContent='center'  >
                        <Image m='auto'  w={{base:'35vw' , sm:'27vw' , md:'27vw'}} h={{base:'35vw' , sm:'27vw' , md:'27vw'}} borderRadius='100%'  src="https://uprostim.com/wp-content/uploads/2021/03/image096-74.jpg" alt="" />
                        <Text fontSize={{base:"6vw",sm:'4vw',md:'3.6vw'}} >Joseph Abia</Text>
                        <Text fontSize={{base:"4vw",sm:'2.8vw',md:'2.5vw'}} >joanababia1@gmail.com</Text>
                        <Box d={{base:'block' , sm:'none' , md:'none'}}  p='0px'  m="auto" mt='1.5vw'  w='70%'  alignItems='center' justifyContent='center'>
                            <SimpleGrid columns='2' spacing='2' >
                                <Badge borderRadius='5vw' colorScheme="purple" padding='4px 15px'  fontSize='2.6vw'>cab driving</Badge>
                                <Badge borderRadius='5vw' colorScheme="green"  padding='4px 15px'  fontSize='2.6vw'>it repairs</Badge>
                                <Badge borderRadius='5vw' colorScheme="red"    padding='4px 15px'  fontSize='2.6vw'>food delivery</Badge>
                                <Badge borderRadius='5vw' colorScheme="orange" padding='4px 15px'  fontSize='2.6vw'>retail distributor</Badge>
                            </SimpleGrid>
                        </Box>
                        <Box d={{base:'none' , sm:'block' , md:'block'}}  p='0px'  m="auto" mt='1.5vw'  w='75%'  alignItems='center' justifyContent='center'>
                            <SimpleGrid columns='3' spacing='2' >
                                <Badge borderRadius='5vw' colorScheme="purple" padding='4px 15px'  fontSize={{sm:'2.2vw' , md:'2vw'}}>cab driving</Badge>
                                <Badge borderRadius='5vw' colorScheme="green"  padding='4px 15px'  fontSize={{sm:'2.2vw' , md:'2vw'}}>it repairs</Badge>
                                <Badge borderRadius='5vw' colorScheme="red"    padding='4px 15px'  fontSize={{sm:'2.2vw' , md:'2vw'}}>food delivery</Badge>
                            </SimpleGrid>
                            <Box mt='1.5vw'>
                                <Badge borderRadius='5vw' colorScheme="orange" padding='4px 15px'  fontSize={{sm:'2.2vw' , md:'2vw'}}>retail distributor</Badge>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box w="85%" h='auto' m={{base:'9vw auto' , sm:'10vw auto' , md:'11vw auto'}} borderTop="0.7px solid #DDE2E5" borderBottom="0.7px solid #DDE2E5" p='6vw 0px'>
                    <SimpleGrid columns='2' spacing='0'>
                        <Container border='0.7px solid #DDE2E5' borderBottom='0px' borderRight='0px' w='100%' p='2vw 0px 2vw 5vw' borderLeft='0px' >
                            <Text color='#495057' fontSize={{base:'3.2vw' , sm:'2.3vw' , md:'2vw'}} >Lives In</Text>
                            <Text color='#495057' fontSize={{base:'3.6vw' , sm:'2.8vw' , md:'2.5vw'}}>Odense, Denmark</Text>
                        </Container>
                        <Container border='0.7px solid #DDE2E5' w='100%' p='2vw 0px 2vw 5vw' borderRight='0px'>
                            <Text color='#495057' fontSize={{base:'3.2vw' , sm:'2.3vw' , md:'2vw'}} >Lives In</Text>
                            <Text color='#495057' fontSize={{base:'3.6vw' , sm:'2.8vw' , md:'2.5vw'}}>Odense, Denmark</Text>
                        </Container>
                        <Container border='0.7px solid #DDE2E5' w='100%' p='2vw 0px 2vw 5vw' borderLeft='0px'>
                            <Text color='#495057' fontSize={{base:'3.2vw' , sm:'2.3vw' , md:'2vw'}} >Lives In</Text>
                            <Text color='#495057' fontSize={{base:'3.6vw' , sm:'2.8vw' , md:'2.5vw'}}>Odense, Denmark</Text>
                        </Container>
                        <Container border='0.7px solid #DDE2E5' w='100%' p='2vw 0px 2vw 5vw' borderRight='0px' borderTop='0px' borderLeft='0px'>
                            <Text color='#495057' fontSize={{base:'3.2vw' , sm:'2.3vw' , md:'2vw'}} >Lives In</Text>
                            <Text color='#495057' fontSize={{base:'3.6vw' , sm:'2.8vw' , md:'2.5vw'}}>Odense, Denmark</Text>
                        </Container>
                    </SimpleGrid>
                </Box>


                <Box w="100%" h='auto'>
                    <hr  />
                    <Text m='2vw' fontSize={{base:"4.5vw",sm:'3.5vw',md:'3.1vw'}}>My Gigs and Jobs</Text>
                    <hr  />
                    <Box mt='2vw' d='flex' justifyContent='center'>
                        <Flex p='0px 2vw' flexWrap='wrap' justifyContent='center' gridGap={{base:'2vw',sm:'2vw',md:'1vw'}} columns={{base:'1' , sm:'1' , md:'2'}} spacing='5'>
                            {props.jobItem}
                        </Flex>
                    </Box>
                </Box>

                
                <Box w="100%" h='auto' mt='5vw'>
                    <hr  />
                    <Text m='2vw' fontSize={{base:"4.5vw",sm:'3.5vw',md:'3.1vw'}}>My Calandar and Availability</Text>
                    <hr  />

                    <Box borderRadius='4%' p='2vw' mt='4vw' mb='2vw' h='380px' textAlign='center' bgGradient={["linear(to-tr, teal.300, yellow.400)","linear(to-t, blue.200, teal.500)","linear(to-b, orange.100, purple.300)",]}>
                        <h2>Calendar</h2>
                    </Box>


                    
                    <Box d="flex" flexDir="column" justifyContent='center' m='0px 2vw' mb='4vw' >
                        <Box d="flex" w="92vw" justifyContent="flex-start">
                            <Text color="#8C949C" fontSize="x-large" marginTop="25px" >Upcoming gigs</Text>
                        </Box>
                        <Box mt='3vw'>
                            {props.upcomingGigsCard}
                        </Box>
                    </Box>

                </Box>
            </Grid>

        </>
    )
}
export default ProfileMobile;