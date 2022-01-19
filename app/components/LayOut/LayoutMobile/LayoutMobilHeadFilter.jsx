import React from "react";
import { Avatar } from "@chakra-ui/avatar";
import { Box,Text} from "@chakra-ui/layout";
import {FiMenu} from 'react-icons/fi'
import { Image } from "@chakra-ui/image";
import { useDisclosure } from "@chakra-ui/hooks";
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent} from "@chakra-ui/react"
import { FormLabel , FormControl , FormHelperText } from "@chakra-ui/form-control";
import CustomCheckbox from "../../CheckBoxes/Checkbox";
import { Stack } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import data from '../../../../fake_api/Checkboxes.json'
import { ArrowUpIcon } from "@chakra-ui/icons";
import { DraverMobileLayoutFilter } from "../../../themes/framerVariants";
import { motion } from "framer-motion";
import { Button } from "@chakra-ui/button";

const LayoutMobilHeadFilter = (props) => {
  
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
                        {/* open:header:> searchIcon , filterIcon , backIcon , pageText*/}
            <Box ml='3vw' >
                <Image onClick={onOpen}  fontSize='30px' src="/Icon/Layout/Mobil/FilterLogo.svg" />
                
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

                        <DrawerBody
                        w='100%' 
                        pl='2vw'
                        transition="450ms ease-in-out"
                        as={motion.main}
                        exit="exit"
                        initial="hidden"
                        animate="enter"
                        variants={DraverMobileLayoutFilter}
                        >
                        <FormLabel w='100%' justifyContent='center' d="flex"  >
                            <FormControl  bgColor="#fff" p='2vw' flexDirection="column">
                                <Stack spacing="5" p='1vw 0px'  >
                                    {data.map((item)=>(
                                        <CustomCheckbox
                                        item={item}
                                        />
                                    ))}
                                </Stack>   
                                <Stack marginBottom="30px" d={props.filterNoSelect == 'filterNoSelect' ? 'none' : 'block'}>
                                    <FormHelperText marginTop="20px" marginBottom="10px">SORT BY DATE</FormHelperText>
                                    <Select bgColor="blackAlpha.200" marginBottom="20px" variant="outline" >
                                        <option value="New">Newest First</option>
                                        <option value="Old">Oldest First</option>
                                    </Select>
                                </Stack>
                                <Stack marginBottom="30px" d={props.filterNoSelect == 'filterNoSelect' ? 'none' : 'block'}>
                                <FormHelperText marginBottom="10px" >SORT BY EARNINGS</FormHelperText>
                                    <Select bgColor="blackAlpha.200" marginBottom="20px" variant="outline">
                                        <option value="100">100$</option>
                                        <option value="200">200$</option>
                                        <option value="300">300$</option>
                                    </Select>
                                </Stack>
                                <Stack marginBottom="20px" d={props.filterNoSelect == 'filterNoSelect' ? 'none' : 'block'}>
                                    <FormHelperText marginBottom="10px" >JOB/GIG LOCATION</FormHelperText>
                                    <Select bgColor="blackAlpha.200" marginBottom="20px" variant="outline">
                                        <option value="Madrid">Madrid</option>
                                        <option value="Manchester">Manchester</option>
                                        <option value="London">London</option>
                                    </Select>
                                </Stack>
                                <Stack marginBottom="40px" onClick={onClose} >
                                    <Button bg='#603E94' color='#FFFFFF' >APPLY FILTER</Button>
                                </Stack>
                            </FormControl>
                        </FormLabel>
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
                              {/*Closs: layout content */}
    </>
  )
}

export default LayoutMobilHeadFilter

