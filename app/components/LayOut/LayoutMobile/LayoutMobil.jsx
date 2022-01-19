import React from "react";
import { Avatar } from "@chakra-ui/avatar";
import { Box,Text} from "@chakra-ui/layout";
import {  Link   } from "@chakra-ui/react"
import {IconButton} from '@chakra-ui/react'
import {FiMenu} from 'react-icons/fi'
import { Image } from "@chakra-ui/image";
import { useDisclosure } from "@chakra-ui/hooks";
import { useRouter } from "next/router"
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent} from "@chakra-ui/react"
import LayoutMobilHeadSearch from "./LayoutMobilHeadSearch";
import LayoutMobilHeadFilter from "./LayoutMobilHeadFilter";
import { ArrowUpIcon } from "@chakra-ui/icons";
import NextLink from 'next/link'

import { DraverMobileLayout } from "../../../themes/framerVariants";
import { motion } from "framer-motion";


const LayoutMobil = (props) => {
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  
  const router = useRouter()
  const uRouter = router.pathname.slice(4,7)
  const uRouterUser = router.pathname


  return (
    <>
                        {/* open: layout icon and gigy logo */}
      <Box backgroundColor='whiteAlpha.900' zIndex='10' w='100%' top='0px' height='55px' position='fixed' d='flex' justifyContent='space-between' alignItems='center'  p='1vw'>
        <NextLink  href='/me/overview' >
          <Link >
            <img  src="/Icon/Layout/gigyLogo.svg"  />
          </Link>
        </NextLink>

        <IconButton
              background="none"
              _hover={{ background: 'none' }}
              icon={<FiMenu />}
              onClick={onOpen}
              fontSize='30px'
              color='#603E94'
          />
      </Box>

                        {/* closs: layout icon and gigy logo */}
      <Text w="100%" m='10px 0px' h= "0.7px" cursor='none' ></Text>
                        {/* open:header:> searchIcon , filterIcon , backIcon , pageText*/}
      
      <Box backgroundColor='whiteAlpha.900' zIndex='10' borderTop='0.7px solid #DDE2E5' borderBottom='0.7px solid #DDE2E5' position='fixed' w='100%' p='2vw' top='55px' h='50px' d='flex' alignItems='center' justifyContent='space-between'  >
        <Text>lorem</Text>
        
        <Box d='flex' alignItems='center'  >

          
          {props.filter == 'filter' ?
            <LayoutMobilHeadFilter 
            searchInput={props.searchInput}
            searchButton={props.searchButton}
            filterNoSelect={props.filterNoSelect}
          />: console.log() }


          {props.LinkIcon == 'iconjopcenter' ?
          <NextLink href="/me/job/my-job/my-jobs-main">
            <Link ml='3vw' ><Image  src="/Icon/Layout/Mobil/JobCenterLogo.svg"/></Link></NextLink> : console.log()}
          

          {props.searchIcon == 'searchIcon' ?
            <LayoutMobilHeadSearch 
            searchInput={props.searchInput}
            searchButton={props.searchButton}
            />: console.log() }

          {props.editProfilList == 'editProfilList' ?
            <EditProfilList 
            />: console.log() }

          {props.editProfil == 'editProfil' ?
           <NextLink href='/me/profile/editProfile'> 
              <Image src="/Icon/Layout/Mobil/EditIcon.svg" ></Image>
           </NextLink>
           : console.log() }
          
          
          
        </Box>

      </Box>
                        {/* Closs:header:> searchIcon , filterIcon , backIcon , pageText*/}
                        {/*open: layout content */}
      <Box>                           
        <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay/>
            <DrawerContent>
              <Box borderBottomWidth="1px" p='2vw' >
                <DrawerHeader p='0px'  ><ArrowUpIcon float="right"  background="none" _hover={{ background: 'none' }} icon={<FiMenu />} onClick={onClose} fontSize='30px' color='#603E94'/></DrawerHeader>
                <Box d='flex' alignItems='center' float="left">
                  <Avatar h='40px' w='40px' mr='10px'/>
                  <Text fontSize='20px' fontFamily='Lato' >Joseph Abia</Text>
                </Box>
              </Box >
                <DrawerBody
                  transition="450ms ease-in-out"
                  as={motion.main}
                  exit="exit"
                  initial="hidden"
                  animate="enter"
                  variants={DraverMobileLayout}
                >
                  <NextLink href='/me/overview'>
                    <Link  w='180px' cursor="pointer" transition='800ms ease-in-out' d='flex' color='#fff'  mt='15px' alignItems='center'>
                    <Image style={{height:"25px"}} src={uRouter == "ove" ? "/Icon/Layout/overviewIconActive.svg" : "/Icon/Layout/overviewIcon.svg"}  />
                    <Text color={uRouter == "ove" ? '#603E94' : '#8C949C'}  fontSize='20px' ml='7px' fontFamily='Lato' fontWeight='bold' >Overview</Text>
                    </Link>
                  </NextLink>

                  <NextLink href='/me/job/jobs'>
                    <Link w='180px' cursor="pointer" transition='800ms ease-in-out' d='flex' color='#fff' mt='25px' alignItems='center'>
                    <Image style={{height:"25px"}} src={uRouter == "job" ? "/Icon/Layout/jobsIconActive.svg" : "/Icon/Layout/jobsIcon.svg"}/>
                    <Text color={uRouter == "job" ? '#603E94' : '#8C949C'} fontSize='20px' ml='7px'  fontFamily='Lato' fontWeight='bold' >Job Centre</Text>
                    </Link>
                  </NextLink>

                  <NextLink href='/me/academy'>
                    <Link w='180px' cursor="pointer" transition='800ms ease-in-out' d='flex' color='#fff' mt='25px' alignItems='center'>
                    <Image style={{height:"25px"}} src={uRouter == "aca" ? "/Icon/Layout/academyIconActive.svg" : "/Icon/Layout/academyIcon.svg"}/>
                    <Text color={uRouter == "aca" ? '#603E94' : '#8C949C'} fontSize='20px' ml='7px' fontFamily='Lato' fontWeight='bold' >Academy</Text>
                    </Link>
                  </NextLink>
                  
                  <NextLink href='/me/profile/profile'>
                    <Link w='180px' cursor="pointer" transition='800ms ease-in-out' d='flex' color='#fff' mt='25px' alignItems='center'>
                    <Image style={{height:"25px"}} src={uRouterUser == "/me/profile/profile" ? "/Icon/Layout/profileIconActive.svg" : "/Icon/Layout/profileIcon.svg"}/>
                    <Text color={uRouterUser == "/profile/profile" ? '#603E94' : '#8C949C'} fontSize='20px' ml='7px' fontFamily='Lato' fontWeight='bold' >Profile</Text>
                    </Link>
                  </NextLink>
                
                  <NextLink href='/me/knowledge'>
                    <Link w='180px' cursor="pointer" transition='800ms ease-in-out' d='flex' color='#fff' mt='25px' alignItems='center'>
                    <Image style={{height:"25px"}} src={uRouter == "kno" ? "/Icon/Layout/baseIconActive.svg" : "/Icon/Layout/baseIcon.svg"}/>
                    <Text color={uRouter == "kno" ? '#603E94' : '#8C949C'} fontSize='20px' ml='7px' fontFamily='Lato' fontWeight='bold'>Knowledge Base</Text>
                    </Link>
                  </NextLink>

                  <Text w="100%" h= "0.7px" mt='25px' cursor='none' backgroundColor='gray.300'ё></Text>

                  <NextLink href="/me/profile/editProfile">
                    <Link _hover={{ textDecoration:'none'}} w='180px' cursor="pointer"  d='flex'  mt='25px' alignItems='center'>
                    <Image style={{height:"25px"}} src={uRouterUser == "/me/profile/editProfile" ? "/Icon/Layout/settingsActive.svg" : "/Icon/Layout/settings.svg"}/>
                    <Text   color={uRouterUser == "/profile/editProfile" ? '#603E94' : '#8C949C'} fontSize='20px' ml='7px'   _hover={{ textDecoration:'none'}} fontFamily='Lato' fontWeight='bold'>Setting</Text>
                    </Link>
                  </NextLink>
                  
                  <NextLink href="/me/blog/blog">
                    <Link _hover={{ textDecoration:'none'}} w='180px' cursor="pointer"  d='flex'  mt='25px' alignItems='center'>
                    <Image style={{height:"25px"}} src={uRouterUser == "/me/blog/blog" ? "/Icon/Layout/newsActive.svg" : "/Icon/Layout/news.svg"}/>
                    <Text   color={uRouterUser == "/blog/blog" ? '#603E94' : '#8C949C'} fontSize='20px' ml='7px'  _hover={{ textDecoration:'none'}} fontFamily='Lato' fontWeight='bold'> News and Blog</Text>
                    </Link>
                  </NextLink>
                  
                  <NextLink href="/" >
                    <Link mb='2vw' _hover={{ textDecoration:'none'}}  w='180px' cursor="pointer"  d='flex'  mt='25px' alignItems='center'>
                    <Image style={{height:"25px"}}   src='/Icon/Layout/logOut.svg'/>
                    <Text fontSize='20px' ml='7px' color='#E8417C' fontFamily='Lato' fontWeight='bold'> Log Out</Text>
                    </Link>
                  </NextLink>
                  
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
                              {/*Closs: layout content */}
    </>
  )
}

export default LayoutMobil

