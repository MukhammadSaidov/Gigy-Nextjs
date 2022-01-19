import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import data from '../../../fake_api/JsonCardOverview/JsonCardOverview.json'
import { Flex } from "@chakra-ui/layout";


const ContainerCard =(props)=>{

    return(
        <>

            <Box width="100%" mb='2vw' >
                <Box width="100%"  mt='2vw'  >
                    <Flex flexWrap='wrap' justifyContent='center' gridGap='1vw' columns={{base:'1' , sm:'1' , md:'2'}}>
                        {props.CardOverview}
                    </Flex>
                </Box>
            </Box>

            
            <Box width="100%" mb='2vw' >

                <Box  mb='2vw' borderBottom='0.7px solid #DDE2E5'  borderTop='0.7px solid #DDE2E5' p='10px 0px 10px 25px'>
                    <Text  fontFamily='Lato' fontWeight='600' fontSize='20px'>{data[0].ContainerJobsCard.NameContainer}</Text>
                </Box>

                <Flex flexWrap='wrap' justifyContent='center' gridGap='1vw' columns={{base:'1' , sm:'1' , md:'2'}}>
                    {props.CardJobs}
                </Flex>
            </Box>



            <Box width="100%" mb='2vw' >

                <Box mb='2vw' borderBottom='0.7px solid #DDE2E5'  borderTop='0.7px solid #DDE2E5' p='10px 0px 10px 25px' >
                    <Text  fontFamily='Lato' fontWeight='600' fontSize='20px'>{data[0].ContainerCardJobPostings.NameContainer}</Text>
                </Box>

        
                <Flex flexWrap='wrap' justifyContent='center' gridGap='1vw' columns={{base:'1' , sm:'1' , md:'2'}}>
                    {props.CardJobPostings}
                </Flex>
            </Box>


            
            <Box width="100%" mb='2vw' >
                <Box borderBottom='0.7px solid #DDE2E5' mb='2vw' borderTop='0.7px solid #DDE2E5' p='10px 0px 10px 25px' >
                    <Text  fontFamily='Lato' fontWeight='600' fontSize='20px'>{data[0].ContainerCardRecentPosts.NameContainer}</Text>
                </Box>

                
                <Flex flexWrap='wrap' justifyContent='center' gridGap='1vw' columns={{base:'1' , sm:'1' , md:'2'}}>
                    {props.CardRecentPosts}
                </Flex>
            </Box>


        </>
    )
}
export default ContainerCard



