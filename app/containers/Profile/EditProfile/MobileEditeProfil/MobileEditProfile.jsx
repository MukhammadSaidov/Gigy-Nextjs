import React from "react";
import { Box , Text} from "@chakra-ui/layout";
import { SettingsIcon , UnlockIcon ,InfoIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { useDisclosure } from "@chakra-ui/hooks";
import { ArrowUpIcon } from "@chakra-ui/icons";
import { FiMenu } from "react-icons/fi";
import { Avatar } from "@chakra-ui/avatar";
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent} from "@chakra-ui/react"
import { FormLabel , FormControl } from "@chakra-ui/form-control";

import MobilePersonalProfileInformation from "./MobileProfileInformationBlok";
import MobileSkillsetAndSubscriptions from "./MobileSkillsetBlok";
import MobileSecurity from "./MobileSecurityBlok";

import { DraverMobile } from "../../../../themes/framerVariants";
import { motion } from "framer-motion";

const MobileEditProfile =()=>{

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [active, setActive] = React.useState("InfoProfile")

    return(
        
        <Box d={{base:'block' , sm:"block" , md:'block' , lg:'none', xl:'none' }} mt='-1vw'>
            <Box position='fixed' right='1.8vw' top='70px' zIndex='11' >
                <Image onClick={onOpen}  fontSize='30px'  src="/Icon/Layout/Mobil/EditIcon.svg" />
            </Box>
            <Box>
                <Box    >
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
                            variants={DraverMobile}
                            pl='2vw' >
                                <FormLabel  >
                                    <FormControl bgColor="#fff">
                                        <Box m='2vw 0px 0vw 1vw' onClick={()=>{if (active != "InfoProfile"){setActive("InfoProfile")}}} cursor='pointer' w='100%' d='flex' alignItems='center'  >
                                            <InfoIcon onClick={onClose} fontSize='25px' color={active == 'InfoProfile' ? "#603E94" : '#8C949C'} />
                                            <Text onClick={onClose}  ml='20px' fontSize='20px' color={active == 'InfoProfile' ? "#603E94" : 'black'}>Personal Profile Information</Text>
                                        </Box>

                                        <Box m='2vw 0px 0vw 1vw' onClick={()=>{ if (active != "settingProfil"){setActive("settingProfil")}}} cursor='pointer' w='100%' d='flex' alignItems='center' >
                                            <SettingsIcon onClick={onClose} fontSize='25px' color={active == 'settingProfil' ? "#603E94" : '#8C949C'} />
                                            <Text onClick={onClose} ml='20px' fontSize='20px' color={active == 'settingProfil' ? "#603E94" : 'black'}>Skillset and Subscriptions</Text>
                                        </Box>

                                        <Box m='2vw 0px 0vw 1vw' onClick={()=>{if (active != "SecurityProfil"){setActive("SecurityProfil")}}} cursor='pointer' w='100%' d='flex' alignItems='center' >
                                            <UnlockIcon onClick={onClose} fontSize='25px' color={active == 'SecurityProfil' ? "#603E94" : '#8C949C'} />
                                            <Text onClick={onClose} ml='20px' fontSize='20px' color={active == 'SecurityProfil' ? "#603E94" : 'black'}>Security</Text>
                                        </Box>
                                    </FormControl>
                                </FormLabel>
                            </DrawerBody>
                        </DrawerContent>
                    </Drawer>
                </Box>
            </Box>


            <MobilePersonalProfileInformation
             display={active == "InfoProfile" ? 'block':'none'}
             />

            <MobileSkillsetAndSubscriptions
            display={active == "settingProfil" ? 'block':'none'}
            />

            <MobileSecurity 
            display={active == "SecurityProfil" ? 'block':'none'} 
            />

        </Box>
    )
}
export default MobileEditProfile;