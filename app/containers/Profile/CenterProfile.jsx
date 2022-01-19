import { Box, Container , Flex, Text} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import React from "react";
import { Badge } from "@chakra-ui/react"

const CenterProfile =(props)=>{

    return(
        <>
            <Box>
                <Box w='100%' m='2vw'>
                    <Box  w='95%'  border='0.7px solid  #DDE2E5'  h='auto' mt='2vw'  p='30px 30px 15px 30px'>

                        <Box   w='auto' d='flex'  >
                            <Image h={{xl:'8vw',lg:'10vw'}} w={{xl:'8vw',lg:'10vw'}} borderRadius='100%' src='https://uprostim.com/wp-content/uploads/2021/03/image096-74.jpg' />
                            <Box>
                                <Box ml='5px' h='50%' alignItems='center'>
                                    <Container ml='0px' d='flex' alignItems='center'>
                                        <Text ml='-18px' fontSize='25px' color='#495057'>Joseph Abia</Text>
                                        <Image ml='10px' h='25px' w='25px' src='https://uprostim.com/wp-content/uploads/2021/03/image096-74.jpg'/>
                                    </Container>
                                    <Text color='#8C949C' fontSize='xxx-small'>joanababia1@gmail.com</Text>
                                </Box>
                                <Flex flexWrap='wrap'  h='70%' d='flex' mt={{lg:'10px',lx:"0px"}}  alignItems='center'>
                                    <Badge colorScheme="purple" padding='4px 15px' ml='5px' borderRadius='4px'  fontSize='0.8vw'  >cab driving</Badge>
                                    <Badge colorScheme="green"  padding='4px 15px' ml='5px' borderRadius='4px'  fontSize='0.8vw'  >it repairs</Badge>
                                    <Badge colorScheme="red"    padding='4px 15px' ml='5px' borderRadius='4px'  fontSize='0.8vw'  >food delivery</Badge>
                                    <Badge colorScheme="orange" padding='4px 15px' ml='5px' borderRadius='4px'  fontSize='0.8vw'  >retail distributor</Badge>
                                </Flex>
                            </Box>
                        </Box>

                        <Box p='0px 2vw 1vw 0px' d='flex' justifyContent='space-between' alignItems='center'  mt='70px'  >
                            <Box w='auto'>
                                <Text color='#495057' fontSize='16px' >Lives In</Text>
                                <Text color='#495057' fontSize='18px'>Odense, Denmark</Text>
                            </Box>
                            <Box w='auto'>
                                <Text color='#495057' fontSize='16px' >Lives In</Text>
                                <Text color='#495057' fontSize='18px'>Odense, Denmark</Text>
                            </Box>
                            <Box w='auto'>
                                <Text color='#495057' fontSize='16px' >Lives In</Text>
                                <Text color='#495057' fontSize='18px'>Odense, Denmark</Text>
                            </Box>
                            <Box w='auto'>
                                <Text color='#495057' fontSize='16px' >Lives In</Text>
                                <Text color='#495057' fontSize='18px'>Odense, Denmark</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>     

                <Text w='100%' h= "0.7px" backgroundColor="#DDE2E5" mt='3vw' ></Text>
                <Text m='1vw' ml='2vw'  fontSize='x-large' >My Gigs and Jobs</Text>
                <Text w="100%" h= "0.7px" backgroundColor="#DDE2E5"  mb='2vw'></Text>

                <Flex w='100%' flexWrap='wrap' gridGap='1vw' p='0px 2vw' d='flex' justifyContent='center'>
                    {props.jobItem}
                </Flex>
            </Box>
        </>
    )
}
export default CenterProfile;