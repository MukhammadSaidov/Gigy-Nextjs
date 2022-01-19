import React from 'react';
import { Box, GridItem } from '@chakra-ui/layout';
import BigContent from '../../../components/Website/BigContent/BigContent'
import ContactUsForm from '../../../components/Website/ContactUsForm/ContactUsForm';
import ContactUsAccordion from '../../../components/Website/ContactUsAccordion/ContactUsAccordion';
import data from "../../../../fake_api/Website/ContactUs/Accordion.json"
import { Accordion } from '@chakra-ui/accordion';


const ContactUs = () => {
    const index1 = data.length / 2
    const index2 = data.length
    return (
        <Box 
            maxW={{xl:"84vw", lg:"85vw", md:"92vw", sm:"92vw", base:"92vw"}} 
            m="0 auto" 
            d="flex"
            flexDir="column" 
            justifyContent={{xl:"start", lg:"start", md:"center", sm:"center", base:"center"}}
            gridGap="100px"
        >
            <BigContent
                bigImage="/Icon/website-icons/about-us/people.svg"
                title="Contact us"
                bigText="Get in touch through our numerous channels ."
                smallText="You can send us a message, give us a call or follow us social media."
            />
            <ContactUsForm/>
            <Box w={{lg:"45vw", xl:"45vw", md:"45vw", sm:"45vw", base:"50vw"}} >
                <img src="/Icon/website-icons/line.svg" alt="" />
            </Box>
            <BigContent
                bigImage="/Icon/website-icons/question.svg"
                title="frequently asked questions"
                bigText="Have questions about Gigy?"
                smallText="We know you have some questions in mind, we have tried to list the most important ones. "
                rotate="true"
            />
            <Box d='flex' justifyContent='space-between' p="25px" bgColor="#603E94" borderRadius="12px" >
                <Box w='100%' p='2vw'>
                    <Accordion bg="#603E94" d="grid" gridGap="50px"  allowToggle>
                        {data.slice(0 , index1 ).map((item)=>
                            <GridItem>
                                <ContactUsAccordion title={item.title} text={item.text}/>
                            </GridItem>
                        )}
                    </Accordion>
                </Box>
                <Box w='100%' p='2vw' >
                    <Accordion bg="#603E94" d="grid" gridGap="50px"  allowToggle >
                        {data.slice(index1 , index2 ).map((item)=>
                            <GridItem>
                                <ContactUsAccordion title={item.title} text={item.text}/>
                            </GridItem>
                        )}
                    </Accordion>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactUs;