import React from "react";
import { Box, Text } from '@chakra-ui/layout';
import BigContent from '../../../components/Website/BigContent/BigContent';
import { Image } from "@chakra-ui/react";
import Carousel from "./Carousel";



const Landing = (props) => {

    return (
        <Box >
            <Box 
                maxW={{xl:"84vw", lg:"85vw", md:"92vw", sm:"92vw", base:"92vw"}} 
                m="0 auto" 
                d="flex"
                flexDir="column" 
                justifyContent={{xl:"start", lg:"start", md:"center", sm:"center", base:"center"}}
                gridGap="100px"
                mt={{base: "50px", lg: "100px", xl: "100px", md: "70px", sm: "50px"}}
            >
                <BigContent
                    bigImage="/Icon/website-icons/LandingPage/Computer.svg"
                    title="Be truly flexible"
                    bigText="Delegation is the future of work."
                    smallText="Gigy reinforces a new way to work so you can put your skills to use and live life on your own terms"
                    smallText2="Get remote jobs tailored to you within 10 minutes"
                    smallText3="Already have an account?"
                    signIn="Sign in"
                    button={true}
                    buttonText='get started'
                    rotate='false'
                /> 
                <Box w={{lg:"45vw", xl:"45vw", md:"45vw", sm:"45vw", base:"50vw"}} >
                        <img src="/Icon/website-icons/line.svg" />
                </Box> {/* Line */}

                <BigContent
                    bigImage="/Icon/website-icons/LandingPage/Video.svg"
                    title="join us today"
                    bigText="Built for tomorrow’s jobs ."
                    smallText="See how we work and why thousands of people and the best brands out there trust us. "
                    rotate='true'
                /> {/* Video  */}
            </Box>
            <Box mt={{base: "70px", lg: "96px", xl: "96px", md: "70px", sm: "70px"}} width="100%" p='2vw 0vw' background="#EEF3F7">
                <Box d={{base: "none", lg: "flex", xl: "flex", md: "none", sm: "none"}} alignItems="center" justifyContent='space-between'  maxWidth="84vw" m="0 auto">
                    <Image src="/Icon/website-icons/LandingPage//Partners/text.svg" alt="text" />
                    <Image src="/Icon/website-icons/LandingPage//Partners/@lg.svg" alt="@lg" />  
                    <Image src="/Icon/website-icons/LandingPage//Partners/cocacola.svg" alt="cocacola" />  
                    <Image src="/Icon/website-icons/LandingPage//Partners/facebook.svg" alt="facebook" />  
                    <Image src="/Icon/website-icons/LandingPage//Partners/paypal.svg" alt="paypal" />  
                    <Image src="/Icon/website-icons/LandingPage//Partners/shopi.svg" alt="shopi" />  
                </Box>
                <Box d={{base: "flex", lg: "none", xl: "none", md: "flex", sm: "flex"}} alignItems="center" justifyContent={{sm: "center", md: "center", base: "center"}} padding="33px 0"  maxWidth="84vw" margin="0 auto">
                    <Image src="/Icon/website-icons/LandingPage//Partners/Partners-mobile.svg" />
                </Box> {/* Mobile Partners */}
            </Box> {/* Partners */}
            <Box position="relative" maxW={{xl:"84vw", lg:"85vw", md:"92vw", sm:"92vw", base:"92vw"}} m="0 auto">
                <Box pos="absolute" right="0" top="-60px" d={{lg: "block", xl: "block", md: "none", sm: "none", base: "none"}} >
                    <img src="/Icon/website-icons/LandingPage/line-rotate.svg" />
                </Box> {/* Line */}

                <Text mt={{base: "90px", lg: "150px", xl: "150px", md: "90px", sm: "90px"}} mb="45px" fontSize={{base: "28px", lg: "38px", xl: "38px", md: "30px", sm: "28px"}} lineHeight="36px" fontWeight="bold" fontFamily="Lato" fontStyle="normal" textAlign={{base: "center", md: "center", sm: "center"}}>Choose a better way to work and live .</Text>

                <Box mt="75px" d={{base:"none",sm:'none',md:'grid',lg:'none',xl:'none'}} m='0px auto'>
                    <Box d='flex'alignItems='center' justifyContent='space-around' mb='20px'>
                        <Box mb='30px'>
                            <Image boxSize='150px' src="/Icon/website-icons/LandingPage/hours.svg" />
                            <Text m="1vw 0px" fontSize="21px" fontWeight="600"  lineHeight="25px" fontFamily="Lato">Flexible work hours</Text>
                            <Text maxW='250px' color="#495057" fontSize="16px" fontFamily="Lato" lineHeight="19px" >The decision of when and where to work is all up to you . </Text>
                        </Box> {/* Item */}
                        <Box mb='30px'>
                            <Image boxSize='150px' src="/Icon/website-icons/LandingPage/payment.svg" />
                            <Text m="1vw 0px" fontSize="21px" fontWeight="600"  lineHeight="25px" fontFamily="Lato">Secure payment</Text>
                            <Text maxW='250px' color="#495057" fontSize="16px" fontFamily="Lato" lineHeight="19px" >The decision of when and where to work is all up to you . </Text>
                        </Box> {/* Item */}
                    </Box>
                    <Box d='flex'alignItems='center' justifyContent='space-around'>
                        <Box mb='30px'>
                            <Image boxSize='150px' src="/Icon/website-icons/LandingPage/friendly.svg" />
                            <Text m="1vw 0px" fontSize="21px" fontWeight="600"  lineHeight="25px" fontFamily="Lato">Remote friendly</Text>
                            <Text maxW='250px' color="#495057" fontSize="16px" fontFamily="Lato" lineHeight="19px" >The decision of when and where to work is all up to you . </Text>
                        </Box> {/* Item */}
                        <Box mb='30px'>
                            <Image boxSize='150px' src="/Icon/website-icons/LandingPage/less-time.svg" />
                            <Text m="1vw 0px" fontSize="21px" fontWeight="600"  lineHeight="25px" fontFamily="Lato">Do more in less time</Text>
                            <Text maxW='250px' color="#495057" fontSize="16px" fontFamily="Lato" lineHeight="19px" >The decision of when and where to work is all up to you . </Text>
                        </Box> {/* Item */}
                    </Box>
                </Box> {/*  */}
                <Box d={{base:"none",sm:'none',md:'grid',lg:'none',xl:'none'}} w="45vw" mt="70px">
                    <img src="/Icon/website-icons/line.svg" alt="" />
                </Box>  {/* Line */}
                <Box justifyContent='space-between' mt={{base: "75px", lg: "120px", xl: "120px", md: "75px", sm: "75px"}} d={{base:"block",sm:'block',md:'none',lg:'flex',xl:'flex'}} alignItems="center">
                    <Box mb={{base:'30px',sm:'30px',md:'30px',lg:'0px',xl:'0px'}}>
                        <Image boxSize={{base:'100px',sm:'120px',md:'150px',lg:'auto',xl:'auto'}} src="/Icon/website-icons/LandingPage/hours.svg" />
                        <Text m="1vw 0px" fontSize="21px" fontWeight="600"  lineHeight="25px" fontFamily="Lato">Flexible work hours</Text>
                        <Text maxW={{lg:'200px',xl:'250px'}} color="#495057" fontSize="16px" fontFamily="Lato" lineHeight="19px" >The decision of when and where to work is all up to you . </Text>
                    </Box> {/* Item */}
                    <Box mb={{base:'30px',sm:'30px',md:'30px',lg:'0px',xl:'0px'}}>
                        <Image boxSize={{base:'100px',sm:'120px',md:'150px',lg:'auto',xl:'auto'}} src="/Icon/website-icons/LandingPage/payment.svg" />
                        <Text m="1vw 0px" fontSize="21px" fontWeight="600"  lineHeight="25px" fontFamily="Lato">Secure payment</Text>
                        <Text maxW={{lg:'200px',xl:'250px'}} color="#495057" fontSize="16px" fontFamily="Lato" lineHeight="19px" >The decision of when and where to work is all up to you . </Text>
                    </Box> {/* Item */}
                    <Box mb={{base:'30px',sm:'30px',md:'30px',lg:'0px',xl:'0px'}}>
                        <Image  boxSize={{base:'100px',sm:'120px',md:'150px',lg:'auto',xl:'auto'}} src="/Icon/website-icons/LandingPage/friendly.svg" />
                        <Text m="1vw 0px" fontSize="21px" fontWeight="600"  lineHeight="25px" fontFamily="Lato">Remote friendly</Text>
                        <Text maxW={{lg:'200px',xl:'250px'}} color="#495057" fontSize="16px" fontFamily="Lato" lineHeight="19px" >The decision of when and where to work is all up to you . </Text>
                    </Box> {/* Item */}
                    <Box mb={{base:'30px',sm:'30px',md:'30px',lg:'0px',xl:'0px'}}>
                        <Image boxSize={{base:'100px',sm:'120px',md:'150px',lg:'auto',xl:'auto'}} src="/Icon/website-icons/LandingPage/less-time.svg" />
                        <Text m="1vw 0px" fontSize="21px" fontWeight="600"  lineHeight="25px" fontFamily="Lato">Do more in less time</Text>
                        <Text maxW={{lg:'200px',xl:'250px'}} color="#495057" fontSize="16px" fontFamily="Lato" lineHeight="19px" >The decision of when and where to work is all up to you . </Text>
                    </Box> {/* Item */}

                    <Box w={{lg:"45vw", xl:"45vw", md:"45vw", sm:"45vw", base:"50vw"}} mt="70px" d={{lg: "none", xl: "none", md: "block", sm: "block", base: "block"}}  >
                        <img src="/Icon/website-icons/line.svg" alt="" />
                    </Box>  {/* Line */}
                </Box> {/*  */}
            </Box>
                <Box position='relative'  w='100%' m='auto'  >
                    <Carousel/>
                </Box>
        </Box>
    );
};


export default Landing;
