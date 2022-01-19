import React from "react";
import { Avatar } from "@chakra-ui/avatar";
import { Box,Text} from "@chakra-ui/layout";
import {FiMenu} from 'react-icons/fi'
import { Image } from "@chakra-ui/image";
import { useDisclosure } from "@chakra-ui/hooks";
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent} from "@chakra-ui/react"
import { FormLabel } from "@chakra-ui/form-control";
import { ArrowUpIcon } from "@chakra-ui/icons";

import { DraverMobileLayoutSearch } from "../../../themes/framerVariants";
import { motion } from "framer-motion";

const LayoutMobilHeadSearch = (props) => {
  
    const { isOpen, onOpen, onClose } = useDisclosure()


    return (
        <>
                        {/* open:header:> searchIcon , filterIcon , backIcon , pageText*/}
            <Box ml='3vw' >
                <Image onClick={onOpen}  fontSize='30px' src="/Icon/Layout/Mobil/searchLogo.svg" />
            </Box>

                        {/*open: layout content */}
            <Box p='0px' >                           
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
                    <DrawerBody w='100%' pl='2vw' transition="450ms ease-in-out"as={motion.main}exit="exit"initial="hidden"animate="enter"variants={DraverMobileLayoutSearch}
                    >
                      <FormLabel w='100%' justifyContent='center' d="flex"  >
                        {props.searchInput}
                        {props.searchButton}
                      </FormLabel>
                    </DrawerBody>
                </DrawerContent>
                </Drawer>
            </Box>
                              {/*Closs: layout content */}
    </>
  )
}

export default LayoutMobilHeadSearch

