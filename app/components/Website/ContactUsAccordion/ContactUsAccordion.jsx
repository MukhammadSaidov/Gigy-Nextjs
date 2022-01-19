import { Box, Text } from '@chakra-ui/layout';
import React from 'react';
import {
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react"


const ContactUsAccordion = (props) => {
    return (
        <Box h="auto" >
            <AccordionItem borderBottomColor="#FBFCFE26" borderColor="#603E94" color="#ACB5BD" >
              <AccordionButton _focus={{bg:"none", bgClip:"none"}} fontSize='30px' >
                <Box flex="1" textAlign="left">
                    <Text color="#FCFDFF" fontWeight="500" fontSize="22px" >
                      {props.title}
                    </Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                  <Text color="#ACB5BD" fontSize="20px" >
                    {props.text}
                  </Text>
              </AccordionPanel>
            </AccordionItem>          
        </Box>
    );
};

export default ContactUsAccordion;