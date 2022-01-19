import React from 'react';
import { Box, Text, Link } from '@chakra-ui/layout';
import NextLink from 'next/link';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react"; /* Accordion  */

import data from "../../../../fake_api/KnowledgeAccordion.json"

const KnowAccordion = () => {
    return (
        
        <Box borderRight={{base: "none", lg: "1px solid #F0F0F0", xl: "1px solid #F0F0F0", md: "none", sm: "none"}} h={{base: "50vh", lg: "87vh", md: "50vh", sm: "50vh"}} pos="relative" width={{base: "100vw", lg: "850px", xl: "80vw", md: "100vw", sm: "100vw"}} padding="0"  ml={{base: "0px", lg: "350px",  xl: "400px", md: "0px", sm: "0px"}}>
                {data.map((item)=>(
                    <Accordion allowToggle>
                        <AccordionItem padding={{base: "0 15px", md: "0", lg: "0", xl: "0 10px"}}>
                            <h2>
                            <AccordionButton _focus={{border: "none"}} >
                                <Box paddingTop="10px"  height="48px" flex="1" textAlign="left">
                                <Text>{item.text}</Text>
                                </Box>  
                                <AccordionIcon width="30px" height="20px" />
                            </AccordionButton>
                            </h2>
                                <AccordionPanel color="#8C949C" pb={10}>{item.panelText}</AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                ))}
        

            <NextLink href="/me/contactsupport">
                <Link margin="80px auto 0 auto" pt="10px" fontWeight="600" color="#603E94" border="0.5px solid #603E94" borderRadius="4px" textAlign="center" background="none" d={{lg:"none", md:"block", sm:"block", base:"block"}} w={{base: "88vw", lg: "0", md: "90vw", sm: "93vw"}} height="46px" textTransform="uppercase" >go to support</Link>
            </NextLink>
        </Box>

    );
};


export default KnowAccordion;