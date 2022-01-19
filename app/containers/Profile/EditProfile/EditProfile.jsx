import React from "react";
import { Box, Container , Text} from "@chakra-ui/layout";
import { SettingsIcon , UnlockIcon ,InfoIcon } from "@chakra-ui/icons";

import PersonalProfileInformation from "./ProfileInformationBlok";
import SkillsetAndSubscriptions from "./SkillsetBlok";
import Security from "./SecurityBlok";


const EditProfile =()=>{

    const [active, setActive] = React.useState("InfoProfile")

    return(

        <Box d={{base:'none' , sm:"none" , md:'none' , lg:'block', xl:'block' }}>
            <Box h='100%' position='fixed' w={{xl:'20%',lg:'21%'}} borderRight="0.7px solid #DDE2E5" >
                <Box pt='1vw'  gridGap='30px' d='grid'  justifyContent='center'>
                    <Container  onClick={()=>{if (active != "InfoProfile"){setActive("InfoProfile")}}} cursor='pointer' w='100%' d='flex' alignItems='center'  >
                        <InfoIcon fontSize='20px' color={active == 'InfoProfile' ? "#603E94" : '#8C949C'} />
                        <Text  ml={{xl:'20px',lg:'10px'}} fontSize={{xl:'20px',lg:'18px'}} color={active == 'InfoProfile' ? "#603E94" : '#8C949C'}  >Personal Profile Information</Text>
                    </Container>

                    <Container onClick={()=>{if (active != "settingProfil"){setActive("settingProfil")}}} cursor='pointer' w='100%' d='flex' alignItems='center' >
                        <SettingsIcon fontSize='20px'  color={active == 'settingProfil' ? "#603E94" : '#8C949C'} />
                        <Text ml={{xl:'20px',lg:'10px'}} fontSize={{xl:'20px',lg:'18px'}}  color={active == 'settingProfil' ? "#603E94" : '#8C949C'} >Skillset and Subscriptions</Text>
                    </Container>

                    <Container onClick={()=>{if (active != "SecurityProfil"){setActive("SecurityProfil")}}} cursor='pointer' w='100%' d='flex' alignItems='center' >
                        <UnlockIcon fontSize='20px'  color={active == 'SecurityProfil' ? "#603E94" : '#8C949C'} />
                        <Text ml={{xl:'20px',lg:'10px'}} fontSize={{xl:'20px',lg:'18px'}} color={active == 'SecurityProfil' ? "#603E94" : '#8C949C'} >Security</Text>
                    </Container>
                </Box>
            </Box>

            <Box    ml={{xl:'20vw' , lg:'22vw'}} >

                <PersonalProfileInformation
                display={active == "InfoProfile" ? 'block':'none'}

                />

                <SkillsetAndSubscriptions
                display={active == "settingProfil" ? 'block':'none'}

                />

                <Security 
                display={active == "SecurityProfil" ? 'block':'none'} 

                />

            </Box>

        </Box>
    )
}
export default EditProfile;