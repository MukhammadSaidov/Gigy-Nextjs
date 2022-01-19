import { Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import React from 'react'
import NextLink from "next/link";
import { Text } from '@chakra-ui/layout';
import { useDisclosure } from "@chakra-ui/hooks";
import {Drawer,DrawerHeader,DrawerOverlay,DrawerContent} from "@chakra-ui/react"
import { ArrowUpIcon } from "@chakra-ui/icons";
import {FiMenu} from 'react-icons/fi'
import { FormLabel } from "@chakra-ui/form-control";
import { IconButton } from '@chakra-ui/button';

import { PageTransitionVariant } from "../../../themes/framerVariants.js";
import { motion } from "framer-motion";


const Header = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
            <Box position='fixed' w='100%' top='0px' zIndex='5'  p={{base:'2vw 0px',sm:'2vw 0px',md:'2vw 0px',lg:'1vw 0px',xl:'1vw 0px'}} bg='whiteAlpha.900' boxShadow='0px 1px 20px 0px rgba(0, 0, 0, 0.1)'>

                <Box d='flex' justifyContent='space-between' alignItems='center' maxW={{xl:"84vw", lg:"85vw", md:"92vw", sm:"92vw", base:"92vw"}} m="0 auto"  >
                    <NextLink href="/">
                        <Image cursor='pointer' src="/Icon/Layout/gigyLogo.svg" />
                    </NextLink>

                    <Box gridGap='1.5vw' d={props.logIn == true || props.singUp == true ? "none" : "flex" ,{base:'none',sm:'none',md:'none',lg:'flex',xl:'flex'}} alignItems='center' >
                        <NextLink href='/blog-page'>
                            <Text color='#17191C' cursor='pointer' fontSize={{lg:'17px',xl:'17px'}} d={props.logIn == true || props.singUp == true ? "none" : "flex"} >Blog</Text>
                        </NextLink>
                        <NextLink href='/about-us'>
                            <Text color='#17191C' cursor='pointer' fontSize={{lg:'17px',xl:'17px'}} d={props.logIn == true || props.singUp == true ? "none" : "flex"} >About Us</Text>
                        </NextLink>
                        <NextLink href='/contact-us'>
                            <Text color='#17191C' cursor='pointer' fontSize={{lg:'17px',xl:'17px'}} d={props.logIn == true || props.singUp == true ? "none" : "flex"} >Contact Us</Text>
                        </NextLink>
                        <NextLink href='/login-page'>
                            <Box cursor='pointer' w='100px' h='35px' justifyContent='center' alignItems='center' d={props.logIn == true || props.singUp == true ? "none" : "flex"}>
                                <Text fontWeight='700' cursor='pointer' color='#17191C' fontSize='17px' >LOG IN</Text>
                            </Box>
                        </NextLink>
                        <NextLink href='/signup-page'>
                            <Box cursor='pointer' borderRadius='4px' bg='#603E94' w='100px' h='35px' justifyContent='center' alignItems='center' d={props.logIn == true || props.singUp == true ? "none" : "flex"}>
                                <Text fontWeight='700' cursor='pointer' color='#FFFFFF' fontSize='17px' >SIGN UP</Text>
                            </Box>
                        </NextLink>
                    </Box>
                        {/* Mobile */}
                    <Box d={{base:'flex',sm:'flex',md:'flex',lg:'none',xl:'none'}} >    
                        <IconButton
                            background="none"
                            _hover={{ background: 'none' }}
                            icon={<FiMenu />}
                            onClick={onOpen}
                            fontSize={{base:'22px',sm:'25px',md:'28px',lg:'30px',xl:'30px'}}
                            color='#603E94'
                        />
                        <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay/>
                            <DrawerContent >

                                <DrawerHeader p={{base:'2.2vw 0px',sm:'2.2vw 0px',md:'2.2vw 0px',lg:'1vw 0px',xl:'1vw 0px'}}  maxW={{xl:"84vw", lg:"85vw", md:"92vw", sm:"92vw", base:"92vw"}} m="0 auto" w='100%' d='flex' alignItems='center' justifyContent='space-between'    >
                                    <NextLink href="/">
                                        <Image cursor='pointer' src="/Icon/Layout/gigyLogo.svg" />
                                    </NextLink> 
                                    <ArrowUpIcon  onClick={onClose} fontSize={{base:'27px',sm:'30px',md:'33px'}} color='#603E94'/>
                                </DrawerHeader>
                                
                                <FormLabel  pl={{base:'5vw',sm:'5vw',md:'5vw'}} gridGap='10vh' m='0px' pb='0px' bg='#2E1A4C' w='100%' justifyContent='center' d="flex" justifyContent='start' flexDirection='column' >
                                    <Box mt='8vh' >
                                            
                                        <NextLink href="/login-page">
                                            <Text cursor='pointer' mt='3vh' fontFamily='lato' fontSize={{base:'22px',sm:'23px',md:'25px'}}  color='#FFFFFF'>Log In</Text>
                                        </NextLink>
                                        <NextLink href="/signup-page">
                                            <Text cursor='pointer' mt='3vh' fontFamily='lato' fontSize={{base:'22px',sm:'23px',md:'25px'}}  color='#FFFFFF'>Create Account</Text>
                                        </NextLink>
                                        <NextLink href="/gigamarket">
                                            <Text cursor='pointer' mt='3vh' fontFamily='lato' fontSize={{base:'22px',sm:'23px',md:'25px'}}  color='#FFFFFF'>Gigamarket</Text>
                                        </NextLink>
                                        <NextLink href="/about-us">
                                            <Text cursor='pointer' mt='3vh' fontFamily='lato' fontSize={{base:'22px',sm:'23px',md:'25px'}}  color='#FFFFFF'>About Us </Text>
                                        </NextLink>
                                        <NextLink href="/blog-page">
                                            <Text cursor='pointer' mt='3vh' fontFamily='lato' fontSize={{base:'22px',sm:'23px',md:'25px'}}  color='#FFFFFF'>Blog</Text>
                                        </NextLink>
                                        <NextLink href="/contact-us">
                                            <Text cursor='pointer' mt='3vh' fontFamily='lato' fontSize={{base:'22px',sm:'23px',md:'25px'}}  color='#FFFFFF'>Contact & Faq</Text>
                                        </NextLink>
                                    </Box>
                                        {/* Social network icon */}
                                    <Box d='flex' alignItems='center' gridGap='2vw' mb='30vh' >
                                        <NextLink href="#"><Image cursor='pointer' boxSize={{base:'27px',sm:'29px',md:'35px'}} src="/Icon/Website/FaceBookWhiteIcon.svg" /></NextLink>
                                        <NextLink href="#"><Image cursor='pointer' boxSize={{base:'27px',sm:'29px',md:'35px'}} src="/Icon/Website/InstagramWhiteIcon.svg" /></NextLink>
                                        <NextLink href="#"><Image cursor='pointer' boxSize={{base:'27px',sm:'29px',md:'35px'}} src="/Icon/Website/TwiterWhiteIcon.svg" /></NextLink>
                                        <NextLink href="#"><Image cursor='pointer' boxSize={{base:'27px',sm:'29px',md:'35px'}} src="/Icon/Website/InstagramWhiteIcon.svg" /></NextLink>
                                    </Box>
                                </FormLabel>
                            </DrawerContent>
                        </Drawer>
                    </Box>
                    {/* LogIn And SingUp Header Link  */}
                    <Box gridGap='1.5vw' d={{base:'none',sm:'none',md:'none',lg:props.logIn == true || props.singUp == true ? "flex" : "none",xl:props.logIn == true || props.singUp == true ? "flex" : "none"}} alignItems='center'>
                        <NextLink href='blog-page'>
                            <Text color='#17191C' cursor='pointer' fontSize={{lg:'17px',xl:'17px'}}  >Blog</Text>
                        </NextLink>
                        <NextLink href='/about-us'>
                            <Text color='#17191C' cursor='pointer' fontSize={{lg:'17px',xl:'17px'}}  >About Us</Text>
                        </NextLink>
                        <NextLink href='/contact-us'>
                            <Text color='#17191C' cursor='pointer' fontSize={{lg:'17px',xl:'17px'}}  >Contact Us</Text>
                        </NextLink>
                        <NextLink href='/login-page'>
                            <Box cursor='pointer' borderRadius='4px' border='0.5px solid #603E94' w={{base:'70px',sm:'80px',md:'90px',lg:'100px',xl:'100px'}} h={{base:'25px',sm:'30px',md:'35px',lg:'35px',xl:'35px'}} justifyContent='center' alignItems='center' d={props.logIn == true ? "flex" : "none"}>
                                <Text fontWeight='700' color='#603E94' cursor='pointer' fontSize={{base:'14px',sm:'15px',md:'16px',lg:'17px',xl:'17px'}} >LOG IN</Text>
                            </Box>
                        </NextLink>
                        <NextLink href='/signup-page'>
                            <Box cursor='pointer' borderRadius='4px' border='0.5px solid #603E94' w={{base:'70px',sm:'80px',md:'90px',lg:'100px',xl:'100px'}} h={{base:'25px',sm:'30px',md:'35px',lg:'35px',xl:'35px'}} justifyContent='center' alignItems='center' d={props.singUp == true ? "flex" : "none"}>
                                <Text fontWeight='700' color='#603E94' cursor='pointer' fontSize={{base:'14px',sm:'15px',md:'16px',lg:'17px',xl:'17px'}} >SIGN UP</Text>
                            </Box>
                        </NextLink>
                    </Box>
                </Box>
            </Box>
            <Box
            transition="450ms ease-in-out"
            as={motion.main}
            exit="exit"
            initial="hidden"
            animate="enter"
            variants={PageTransitionVariant}    
            >
                {props.children}
            </Box>
        </>
    )
}

export default Header
