import { Box,Text } from '@chakra-ui/layout'
import React from 'react'
import { FormControl } from '@chakra-ui/form-control'
import { Input } from '@chakra-ui/input'
import { Button } from '@chakra-ui/button'
import NextLink from "next/link";
import { Image } from '@chakra-ui/image'

const Footer = (props) => {
  

    return (
        <>
            <Box w='100%' position='relative' d={{base:'none',sm:'none',md:'none',lg:'block',xl:'block'}} >
                <Box p='5vw' d='flex' alignItems='center' justifyContent='space-between' position='absolute' h='300px' bg='#FCFDFF' borderRadius='20px' left='15vw' right='15vw'  zIndex='2' boxShadow='0px 1px 20px 0px rgba(0, 0, 0, 0.1)' w={{base:'90vw',sm:'90vw',md:'90vw',lg:'70vw',xl:'70vw'}}>
                    <Text w='45%' fontWeight='bold' fontSize='40px' >Stay updated, live and  work better .</Text>
                    <Box w='45%' >
                        <Text color='#495057'mb='3vh' fontSize='17px'>You can subscribe to our newsletter for more information, news updates and promotion.</Text>
                        <FormControl d='flex' alignItems='center' justifyContent='space-between'>
                            <Input mr='3%' _placeholder={{fontSize:'18px'}} fontSize='18px' border='1px solid #8C949C' borderRadius='5px' h='5vh' placeholder='Type Email here' w={{lg:'75%',xl:'100%'}}/>
                            <Button color='#ffffff' _hover={{bg:'#603E94'}} bg='#603E94' w={{lg:'34%',xl:'34%'}} h='5vh' borderRadius='5px' fontSize={{lg:'12px',xl:'15px'}} >SUBSCRIBE</Button>
                        </FormControl>
                    </Box>

                </Box><Box h='150px' bg='#ffffff'></Box>


                <Box h='500px' bg='#3E2366' pt='200px' textAlign='center' >
                    <Text color='#ffffff' mb='3vh' fontSize='18px'>FIND THE RIGHT JOBS AND GIGS IN 10 MINUTES</Text>
                    <Text color='#ffffff' mb='2vh' fontSize='40px'>OPEN AN ACCOUNT TODAY FOR FREE .</Text>
                    <NextLink href="/signup-page">
                        <Button cursor='pointer'   _hover={{bg:'#ffffff'}} bg='#ffffff' w={{lg:'20%',xl:'15%'}} h='5vh' borderRadius='5px' fontSize={{lg:'15px',xl:'15px'}} >CREATE ACCOUNT</Button>
                    </NextLink>
                </Box>


                <Box h='250px' bg='#2E1A4D'     >
                    <Box d='flex' justifyContent='space-between' maxW={{xl:"84vw", lg:"85vw", md:"92vw", sm:"92vw", base:"92vw"}} m="0 auto" pt='50px'>
                        
                        <Box w='25%'>
                            <NextLink cursor='pointer' href="/" >
                                <Image cursor='pointer' src="/Icon/Layout/gigyLogoW.svg" />
                            </NextLink>
                            <Text  mb='1.5vh' mt='5vh' color='#DDE2E5' >Stay fluid, get the mobile application today !</Text>
                            <Button borderRadius='5px' bg='#190D2B' _hover={{bg:'#190D2B'}} >
                                <Image src='./Icon/Website/Layout/AndroidIcon.svg' />
                                <Text cursor='pointer' color='#FCFDFF' pl='0.5vw' >Android</Text>
                            </Button>
                            <Button borderRadius='5px' ml='1vw' bg='#190D2B' _hover={{bg:'#190D2B'}} >
                                <Image src='./Icon/Website/Layout/IsoIcon.svg' />
                                <Text cursor='pointer' color='#FCFDFF' pl='0.5vw' >ISO</Text>
                            </Button>
                        </Box>
                        <Box>
                            <NextLink href="/login-page">
                                <Text cursor='pointer' fontFamily='lato' fontSize={{lg:'18px',xl:'18px'}}  color='#FFFFFF'>LOG IN</Text>
                            </NextLink>
                            <NextLink href="/signup-page">
                                <Text cursor='pointer' mt='1vh' fontFamily='lato' fontSize={{lg:'18px',xl:'18px'}}  color='#FFFFFF'>CREATE ACCOUNT</Text>
                            </NextLink>
                            <NextLink href="/gigamarket">
                                <Text cursor='pointer' mt='1vh' fontFamily='lato' fontSize={{lg:'18px',xl:'18px'}}  color='#FFFFFF'>GIGAMARKET</Text>
                            </NextLink>
                            <NextLink href="/about-us">
                                <Text cursor='pointer' mt='1vh' fontFamily='lato' fontSize={{lg:'18px',xl:'18px'}}  color='#FFFFFF'>LEGAL  AND  T&C</Text>
                            </NextLink>
                        </Box>
                        <Box>
                            <NextLink href="/about-us">
                                <Text cursor='pointer' fontFamily='lato' fontSize={{lg:'18px',xl:'18px'}}  color='#FFFFFF'>ABOUT US </Text>
                            </NextLink>
                            <NextLink href="/blog-page">
                                <Text cursor='pointer' mt='1vh' fontFamily='lato' fontSize={{lg:'18px',xl:'18px'}}  color='#FFFFFF'>BLOG</Text>
                            </NextLink>
                            <NextLink href="/contact-us">
                                <Text cursor='pointer' mt='1vh' fontFamily='lato' fontSize={{lg:'18px',xl:'18px'}}  color='#FFFFFF'>Contact & FAQ</Text>
                            </NextLink>
                        </Box>
                        <Box d='grid' textAlign='center' >
                            <Text color='#ffffff' fontSize='18px'>JOIN THE CONVERSATION</Text>
                            <Box d='flex' mt='-40%' alignItems='center' gridGap='1vw' justifyContent='center'  >
                                <NextLink href="#"><Image cursor='pointer' boxSize={{base:'27px',sm:'29px',md:'35px'}} src="/Icon/Website/FaceBookWhiteIcon.svg" /></NextLink>
                                <NextLink href="#"><Image cursor='pointer' boxSize={{base:'27px',sm:'29px',md:'35px'}} src="/Icon/Website/InstagramWhiteIcon.svg" /></NextLink>
                                <NextLink href="#"><Image cursor='pointer' boxSize={{base:'27px',sm:'29px',md:'35px'}} src="/Icon/Website/TwiterWhiteIcon.svg" /></NextLink>
                                <NextLink href="#"><Image cursor='pointer' boxSize={{base:'27px',sm:'29px',md:'35px'}} src="/Icon/Website/InstagramWhiteIcon.svg" /></NextLink>
                            </Box>
                        </Box>

                    </Box>
                </Box>
    
            </Box>



            {/* Mobile version */}
            <Box w='100%' position='relative' d={{base:'block',sm:'block',md:'block',lg:'none',xl:'none'}} >
                <Box textAlign='center' p='5vw' d='flex' flexDirection='column' alignItems='center' justifyContent='space-between' position='absolute' h='auto' bg='#FCFDFF' borderRadius='20px' right='10vw'  zIndex='2' boxShadow='0px 1px 20px 0px rgba(0, 0, 0, 0.1)' w={{base:'80vw',sm:'80vw',md:'80vw'}}>
                    <Text  fontWeight='bold' fontSize={{base:'30px',sm:'35px',md:'35px'}} >Stay updated, live and  work better .</Text>
                    <Text mt='20px' color='#495057'mb='20px' fontSize='17px'>You can subscribe to our newsletter for more information, news updates and promotion.</Text>
                    <FormControl d='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                        <Input  _placeholder={{fontSize:'18px'}} fontSize='18px' border='1px solid #8C949C' borderRadius='10px' h='60px' placeholder='Type Email here' w='80%'/>
                        <Button mt='10px' p={{base:'3vw',sm:'2vw',md:'1.5vw'}} color='#ffffff' _hover={{bg:'#603E94'}} bg='#603E94' w='auto' h='auto' borderRadius='5px' fontSize={{base:'12px',sm:'15px',md:'18px'}} >SUBSCRIBE</Button>
                    </FormControl>
                    

                </Box><Box h={{base:'190px',sm:'170px',md:'200px'}} bg='#ffffff'></Box>


                <Box h='auto' bg='#3E2366' p='300px 5vw 5vh 5vw' pt={{base:'240px',sm:'240px',md:'200px'}} textAlign='center' >
                    <Text color='#ffffff' mb='3vh' fontSize={{base:'12px',sm:'13px',md:'14 px'}}>FIND THE RIGHT JOBS AND GIGS IN 10 MINUTES</Text>
                    <Text color='#ffffff' mb='2vh' fontSize={{base:'25px',sm:'25px',md:'30px'}}>OPEN AN ACCOUNT TODAY FOR FREE .</Text>
                    <NextLink href="/signup-page">
                        <Button cursor='pointer'   _hover={{bg:'#ffffff'}} bg='#ffffff' w='auto' h='5vh' borderRadius='5px' fontSize={{lg:'15px',xl:'15px'}} >CREATE ACCOUNT</Button>
                    </NextLink>
                </Box>


                <Box h='auto' bg='#2E1A4D'  pb='5vh'   >
                    <Box d='flex' justifyContent='space-between' flexDirection='column' maxW={{xl:"84vw", lg:"85vw", md:"92vw", sm:"92vw", base:"92vw"}} m="0 auto" pt='50px'>
                        
                        <Box>
                            <NextLink cursor='pointer' href="/" >
                                <Image cursor='pointer' src="/Icon/Layout/gigyLogoW.svg" />
                            </NextLink>
                            <Text  mb='1.5vh' mt='2vh' color='#DDE2E5' >Stay fluid, get the mobile application today !</Text>
                            <Button borderRadius='5px' bg='#190D2B' _hover={{bg:'#190D2B'}} >
                                <Image src='./Icon/Website/Layout/AndroidIcon.svg' />
                                <Text cursor='pointer' color='#FCFDFF' pl='0.5vw' >Android</Text>
                            </Button>
                            <Button borderRadius='5px' ml='1vw' bg='#190D2B' _hover={{bg:'#190D2B'}} >
                                <Image src='./Icon/Website/Layout/IsoIcon.svg' />
                                <Text cursor='pointer' color='#FCFDFF' pl='0.5vw' >ISO</Text>
                            </Button>
                        </Box>

                        <Box mb='5vh' justifyContent='space-between' mt='5vh' d={{base:'none',sm:'flex',md:'flex'}}>
                            <Box>
                                <NextLink href="/login-page">
                                    <Text cursor='pointer' fontFamily='lato' fontSize={{base:'15px',sm:'16px',md:'17px'}}  color='#FFFFFF'>LOG IN</Text>
                                </NextLink>
                                <NextLink href="/signup-page">
                                    <Text cursor='pointer' mt='1vh' fontFamily='lato' fontSize={{base:'15px',sm:'16px',md:'17px'}}  color='#FFFFFF'>CREATE ACCOUNT</Text>
                                </NextLink>
                                <NextLink href="/gigamarket">
                                    <Text cursor='pointer' mt='1vh' fontFamily='lato' fontSize={{base:'15px',sm:'16px',md:'17px'}}  color='#FFFFFF'>GIGAMARKET</Text>
                                </NextLink>
                            </Box>
                            
                            <Box>
                                <NextLink href="/about-us">
                                    <Text cursor='pointer'  fontFamily='lato' fontSize={{base:'15px',sm:'16px',md:'17px'}}  color='#FFFFFF'>LEGAL  AND  T&C</Text>
                                </NextLink>
                                <NextLink href="/about-us">
                                    <Text cursor='pointer' mt='1vh' fontFamily='lato' fontSize={{base:'15px',sm:'16px',md:'17px'}}  color='#FFFFFF'>ABOUT US </Text>
                                </NextLink>
                                <NextLink href="/blog-page">
                                    <Text cursor='pointer' mt='1vh' fontFamily='lato' fontSize={{base:'15px',sm:'16px',md:'17px'}}  color='#FFFFFF'>BLOG</Text>
                                </NextLink>
                            </Box>
                           
                            <NextLink href="/contact-us">
                                <Text cursor='pointer' fontFamily='lato' fontSize={{base:'15px',sm:'16px',md:'17px'}}  color='#FFFFFF'>Contact & FAQ</Text>
                            </NextLink>
                        </Box>

                        <Box mb='5vh' d={{base:'flex',sm:'none',md:'none'}} justifyContent='space-between' mt='5vh'>
                            <Box>
                                <NextLink href="/login-page">
                                    <Text cursor='pointer' fontFamily='lato' fontSize={{base:'15px',sm:'16px',md:'17px'}}  color='#FFFFFF'>LOG IN</Text>
                                </NextLink>
                                <NextLink href="/signup-page">
                                    <Text cursor='pointer' mt='1vh' fontFamily='lato' fontSize={{base:'15px',sm:'16px',md:'17px'}}  color='#FFFFFF'>CREATE ACCOUNT</Text>
                                </NextLink>
                                <NextLink href="/gigamarket">
                                    <Text cursor='pointer' mt='1vh' fontFamily='lato' fontSize={{base:'15px',sm:'16px',md:'17px'}}  color='#FFFFFF'>GIGAMARKET</Text>
                                </NextLink>
                            </Box>
                            
                            <Box>
                                <NextLink href="/about-us">
                                    <Text cursor='pointer' fontFamily='lato' fontSize={{base:'15px',sm:'16px',md:'17px'}}  color='#FFFFFF'>LEGAL  AND  T&C</Text>
                                </NextLink>
                                <NextLink href="/about-us">
                                    <Text cursor='pointer' mt='1vh' fontFamily='lato' fontSize={{base:'15px',sm:'16px',md:'17px'}}  color='#FFFFFF'>ABOUT US </Text>
                                </NextLink>
                                <NextLink href="/blog-page">
                                    <Text cursor='pointer' mt='1vh' fontFamily='lato' fontSize={{base:'15px',sm:'16px',md:'17px'}}  color='#FFFFFF'>BLOG</Text>
                                </NextLink>
                                <NextLink href="/contact-us">
                                    <Text cursor='pointer' mt='1vh' fontFamily='lato' fontSize={{base:'15px',sm:'16px',md:'17px'}}  color='#FFFFFF'>Contact & FAQ</Text>
                                </NextLink>
                            </Box>
                        </Box>


                        <Box d='flex' flexDirection='column' >
                            <Text color='#ffffff' fontSize='18px'>JOIN THE CONVERSATION</Text>
                            <Box d='flex' mt='2vh' alignItems='center' gridGap='1vw'   >
                                <NextLink href="#"><Image cursor='pointer' boxSize={{base:'27px',sm:'29px',md:'35px'}} src="/Icon/Website/FaceBookWhiteIcon.svg" /></NextLink>
                                <NextLink href="#"><Image cursor='pointer' boxSize={{base:'27px',sm:'29px',md:'35px'}} src="/Icon/Website/InstagramWhiteIcon.svg" /></NextLink>
                                <NextLink href="#"><Image cursor='pointer' boxSize={{base:'27px',sm:'29px',md:'35px'}} src="/Icon/Website/TwiterWhiteIcon.svg" /></NextLink>
                                <NextLink href="#"><Image cursor='pointer' boxSize={{base:'27px',sm:'29px',md:'35px'}} src="/Icon/Website/InstagramWhiteIcon.svg" /></NextLink>
                            </Box>
                        </Box>

                    </Box>
                </Box>
    
            </Box>

        </>
        

        
    )
}

export default Footer

