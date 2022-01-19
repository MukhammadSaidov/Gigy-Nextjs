import React from "react";
import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { Container, Box, Text } from "@chakra-ui/layout";
import { BellIcon, ArrowLeftIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, MenuList, MenuItem, Link } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Image } from "@chakra-ui/image";
import LayoutMobil from "./LayoutMobile/LayoutMobil.jsx";
import { FiMenu } from "react-icons/fi";
import NextLink from "next/link";
import { useDisclosure } from "@chakra-ui/hooks";
import {Drawer,DrawerBody,DrawerContent} from '@chakra-ui/react'

import { PageTransitionVariant } from "../../themes/framerVariants.js";
import { motion } from "framer-motion";



const Layout = (props) => {
  const [navSize, setNavSize] = React.useState("large");

  const router = useRouter();

  const uRouter = router.pathname.slice(4, 7);
  const uRouterUser = router.pathname;

  const onPushLink =()=>{
    router.push('/')
}


const { isOpen, onOpen, onClose } = useDisclosure()
const btnRef = React.useRef()

  return (
    <Box>
      <Box d={{ base: "none", sm: "none", md: "none", lg: "block" }}>
        <Container
          d={{ base: "none", sm: "none", lg: "block", md: "none" }}
          w={navSize == "small" ? "70px" : "230px"}
          pl="10px"
          pr="5px"
          backgroundColor="#F5F4F6"
          zIndex="99"
          position="fixed"
          h="100vh"
          borderRight="0.7px solid #DDE2E5"
          mt="60px"
          transition={navSize == "large" ? "width 600ms" : "width 600ms"}
          overflow="hidden"
        >
          <IconButton
            ml="6px"
            mt="10px"
            background="none"
            _hover={{ background: "none" }}
            icon={navSize == "small" ? <FiMenu /> : <ArrowLeftIcon />}
            onClick={() => {
              if (navSize == "small") {
                setNavSize("large");
              } else setNavSize("small");
            }}
          />

          <NextLink href="/me/overview">
            <Link
              w="150px"
              cursor="pointer"
              transition="500ms ease-in-out"
              d="flex"
              color="#fff"
              mt="35px"
              ml={navSize == "small" ? "15px" : "35px"}
              alignItems="center"
            >
              <img
                src={
                  uRouter == "ove"
                    ? "/Icon/Layout/overviewIconActive.svg"
                    : "/Icon/Layout/overviewIcon.svg"
                }
              />
              <Text
                color={uRouter == "ove" ? "#603E94" : "#8C949C"}
                ml={navSize == "small" ? "-220px" : "7px"}
                fontFamily="Lato"
                fontWeight="bold"
              >
                Overview
              </Text>
            </Link>
          </NextLink>

          <NextLink href="/me/job/jobs">
            <Link
              w="150px"
              cursor="pointer"
              transition="500ms ease-in-out"
              d="flex"
              color="#fff"
              mt="35px"
              ml={navSize == "small" ? "15px" : "35px"}
              alignItems="center"
            >
              <img
                src={
                  uRouter == "job"
                    ? "/Icon/Layout/jobsIconActive.svg"
                    : "/Icon/Layout/jobsIcon.svg"
                }
              />
              <Text
                ml="7px"
                d={navSize == "small" ? "none" : "block"}
                color={uRouter == "job" ? "#603E94" : "#8C949C"}
                fontFamily="Lato"
                fontWeight="bold"
              >
                Job Centre
              </Text>
            </Link>
          </NextLink>

          <NextLink href="/me/academy">
            <Link
              w="150px"
              cursor="pointer"
              transition="500ms ease-in-out"
              d="flex"
              color="#fff"
              mt="35px"
              ml={navSize == "small" ? "15px" : "35px"}
              alignItems="center"
            >
              <img
                src={
                  uRouter == "aca"
                    ? "/Icon/Layout/academyIconActive.svg"
                    : "/Icon/Layout/academyIcon.svg"
                }
              />
              <Text
                ml="7px"
                d={navSize == "small" ? "none" : "block"}
                color={uRouter == "aca" ? "#603E94" : "#8C949C"}
                fontFamily="Lato"
                fontWeight="bold"
              >
                Academy
              </Text>
            </Link>
          </NextLink>

          <NextLink href="/me/profile/profile">
            <Link
              w="150px"
              cursor="pointer"
              transition="500ms ease-in-out"
              d="flex"
              color="#fff"
              mt="35px"
              ml={navSize == "small" ? "15px" : "35px"}
              alignItems="center"
            >
              <img
                src={
                  uRouter == "pro"
                    ? "/Icon/Layout/profileIconActive.svg"
                    : "/Icon/Layout/profileIcon.svg"
                }
              />
              <Text
                ml="7px"
                d={navSize == "small" ? "none" : "block"}
                color={uRouter == "pro" ? "#603E94" : "#8C949C"}
                fontFamily="Lato"
                fontWeight="bold"
              >
                Profile
              </Text>
            </Link>
          </NextLink>

          <NextLink href="/me/knowledge">
            <Link
              w="150px"
              cursor="pointer"
              transition="500ms ease-in-out"
              d="flex"
              color="#fff"
              mt="35px"
              ml={navSize == "small" ? "15px" : "35px"}
              alignItems="center"
            >
              <img
                src={
                  uRouter == "kno"
                    ? "/Icon/Layout/baseIconActive.svg"
                    : "/Icon/Layout/baseIcon.svg"
                }
              />
              <Text
                ml="7px"
                d={navSize == "small" ? "none" : "block"}
                color={uRouter == "kno" ? "#603E94" : "#8C949C"}
                fontFamily="Lato"
                fontWeight="bold"
              >
                Knowledge Base
              </Text>
            </Link>
          </NextLink>
        </Container>

        <Box
          d={{ base: "none", sm: "none", md: "none", lg: "flex" }}
          backgroundColor="white"
          zIndex="10"
          position="fixed"
          padding="0px 2vw"
          borderBottom="0.7px solid #DDE2E5"
          textAlign="center"
          h="60px"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
        >
          <NextLink href="/me/overview">
            <Link>
              <img src="/Icon/Layout/gigyLogo.svg" />
            </Link>
          </NextLink>

          <Box
            d="flex"
            alignItems="center"
            justifyContent="flex-end"
            height="auto"
            maxWidth="none"
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              height="auto"
            >
              <NextLink href="/notifications">
                <Link d="flex">
                  <BellIcon w="25px" h="25px" mr="10px" />
                </Link>
              </NextLink>

              <NextLink href="/profile/profile">
                <Link d="flex">
                  <Avatar h="43px" w="43px" mr="10px" />
                </Link>
              </NextLink>

              <NextLink href="/me/profile/profile">
                <Link
                  d="flex"
                  color="#603E94"
                  fontSize="18px"
                  marginLeft="6px"
                  font-family="Lato"
                  font-style="normal"
                  font-weight="600"
                >
                  Joseph Abia
                </Link>
              </NextLink>

              <Menu d="flex" zIndex="10">
                <MenuButton
                  textAlign="center"
                  d="flex"
                  justifyContent="center"
                  alignItems="center"
                  color="purple"
                  p="0px"
                  ml="10px "
                  backgroundColor="#fff"
                  h="30px"
                  w="30px"
                  as={Button}
                >
                  <ChevronDownIcon
                    w="30px"
                    h="30px"
                    d={{
                      lg: "inline-block",
                      md: "inline-block",
                      base: "none",
                      sm: "none",
                    }}
                  />
                </MenuButton>
                <MenuList
                  w="230px"
                  mr="-53px"
                  mt="8px"
                  d={{ lg: "flex", base: "none", md: "flex", sm: "none" }}
                  flexDirection="column"
                  border="0.7px solid #DDE2E5"
                >
                  <NextLink href="/me/profile/editProfile">
                    <Link _hover={{ textDecoration: "none" }}>
                      <MenuItem
                        fontSize="17px"
                        p="10px"
                        color={
                          uRouterUser == "/me/profile/editProfile"
                            ? "#603E94"
                            : "#8C949C"
                        }
                        _hover={{ textDecoration: "none" }}
                      >
                        <Image
                          src={
                            uRouterUser == "/me/profile/editProfile" ? "/Icon/Layout/settingsActive.svg" : "/Icon/Layout/settings.svg"
                          }
                          h="20px"
                          w="20px"
                          mr="6px"
                        />{" "}
                        Setting
                      </MenuItem>
                    </Link>
                  </NextLink>

                  <NextLink href="/me/blog/blog">
                    <Link _hover={{ textDecoration: "none" }}>
                      <MenuItem
                        fontSize="17px"
                        p="10px"
                        color={
                          uRouterUser == "/me/blog/blog" ? "#603E94" : "#8C949C"
                        }
                        _hover={{ textDecoration: "none" }}
                      >
                        <Image
                          src={
                            uRouterUser == "/me/blog/blog"
                              ? "/Icon/Layout/newsActive.svg"
                              : "/Icon/Layout/news.svg"
                          }
                          h="20px"
                          w="20px"
                          mr="6px"
                        />{" "}
                        News and Blog
                      </MenuItem>
                    </Link>
                  </NextLink>

                  
                    <Link _hover={{ textDecoration: "none" }}  ref={btnRef} onClick={onOpen}>
                      <MenuItem fontSize="17px" p="10px" color="#E8417C">
                        <Image
                          src="/Icon/Layout/logOut.svg"
                          h="20px"
                          w="20px"
                          mr="6px"
                        />{" "}
                        Log Out
                      </MenuItem>
                    </Link>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Box>

        <Box>
          <Drawer
            isOpen={isOpen}
            placement='top'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerContent bg='none' h='100%' w='100%' d='flex' justifyContent='center' alignItems='center' >
              <DrawerBody  d='flex' justifyContent='center' alignItems='center'>
                <Box  bg='gray.200' h='200px' gridGap='30px' borderRadius='20px' w='400px' d='flex' alignItems='center' justifyContent='center'>
                  <Button onClick={onPushLink} _hover={{bg:'red.400'}} bg='red.400' fontSize='25px' h='50px' w='100px'>Yes</Button>
                  <Button onClick={onClose} _hover={{bg:'green.400'}} bg='green.400' fontSize='25px' h='50px' w='100px'>No</Button>
                </Box>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>


        <Box
          d={{ base: "none", sm: "none", md: "none", lg: "flex" }}
          zIndex="4"
          transition="450ms ease-in-out"
          backgroundColor="white"
          marginTop="60px"
          position="fixed"
          pl={navSize == "small" ? "60px" : "230px"}
          borderBottom="0.7px solid #DDE2E5"
          h="60px"
          justifyContent="space-between"
          alignItems="center"
          w="100%"
        >
          <Box
            d="flex"
            transition="600ms ease-in-out"
            alignItems="center"
            p="0px 2vw"
          >
            <Link
              href={props.link}
              cursor="default"
              fontFamily="Lato"
              fontWeight="600"
              fontSize="18px"
              lineHeight="19,2"
              zIndex="2"
            >
              {props.linkName}
            </Link>

            <Text cursor="default" fontSize="18px">
              {props.slash}
            </Text>

            <Text
              cursor="default"
              fontFamily="Lato"
              fontSize="18px"
              fontWeight="600"
              lineHeight="19,2"
            >
              {props.currentPage}
            </Text>
          </Box>

          <Box d="flex" pr="2vw">
            {props.mobileSearchButton}
            {props.mobilePageButton}
            {props.searchInput}
            {props.linkButton}
          </Box>
        </Box>

        <Box
          mb="100px"
          as={motion.main}
          exit="exit"
          initial="hidden"
          animate="enter"
          variants={PageTransitionVariant}
          pt="120px"
          pl={{
            md: "none",
            lg: navSize == "small" ? "70px" : "230px",
            xl: navSize == "small" ? "70px" : "230px",
            sm: "none",
            base: "none",
          }}
          transition="450ms ease-in-out"
        >
          {props.children}
        </Box>
      </Box>

      {/* /////////////// */}

      <Box d={{ base: "block", sm: "block", md: "block", lg: "none" }}>
        <Box pt="100px">
          <LayoutMobil
            searchInput={props.searchInput}
            searchButton={props.searchButton}
            searchIcon={props.searchIcon}
            LinkIcon={props.LinkIcon}
            filter={props.filter}
            editProfil={props.editProfil}
            filterNoSelect={props.filterNoSelect}
          />
        </Box>

        <Box 
          pt="0vh" 
          transition="450ms ease-in-out"
          as={motion.main}
          exit="exit"
          initial="hidden"
          animate="enter"
          variants={PageTransitionVariant}
        >
          {props.children}
        </Box>
      </Box>
    </Box>
  );
};
export default Layout;
