import React from "react";
import { Box, Text, ListItem, UnorderedList, SimpleGrid } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

const MainJobItem = (props) => {
    return(
        <>
            <Box w="100%" height="" pb="25px" border="0.5px solid #DDE2E5" borderRadius="8px">
                <Box height="" d="flex" flexDirection="column" justifyContent="space-between" p={{base:"10px", sm:"10px", md:"10px",lg:"20px", xl:"25px"}}> 
                    <Box d="flex" justifyContent="space-between" >
                        <Box>
                            <Image borderRadius="4px" w={{base:"70px", sm:"70px", md:"70px",lg:"105px"}} marginBottom="25px" h={{base:"70px", sm:"70px", md:"70px",lg:"105px"}} src={props.image}/>
                            <Text fontSize="lg" marginBottom="25px" >
                                {props.job}
                            </Text>
                        </Box>
                        <Box marginBottom=""  d={{base:"none", sm:"none", md:"none", lg:"block"}}>
                            {props.applyBtn}
                        </Box>
                    </Box>
                    <Box d="flex"  justifyContent="space-between" alignItems="flex-end" >
                        <Box alignItems="center" d="flex" flexDirection={{base:"column", sm:"column", md:"column",lg:"row"}} >
                            <Text fontSize="large" fontWeight="100" color="#495057" mr="25px">
                            <img src="/Icon/Job-Item/u_briefcase.svg" style={{width:"17px"}} />
                                {props.company}
                            </Text>
                            <Text fontWeight="100" fontSize="large" color="#495057" mr="25px">
                            <img src="/Icon/Job-Item/u_location-point.svg" style={{width:"17px"}} />
                                {props.location}
                            </Text>
                        </Box>
                        <Box alignItems="center" d="flex" flexDirection={{base:"column", sm:"column", md:"column",lg:"row"}} >
                            <Text fontSize="large" fontWeight="100" color="#495057" mr="25px">
                                {props.dateIcon}
                                {props.date}
                            </Text>
                            <Text fontWeight="100" fontSize="large" color="#495057" mr="25px">
                                {props.applicationsIcon}
                                {props.applications}
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <SimpleGrid columns={{base:2, sm:2, md:2, lg:2, xl:"4"}} borderTop="0.5px solid #DDE2E5" borderBottom="0.5px solid #DDE2E5">
                    <Box p="7px 0px 15px 25px" borderRight="0.5px solid #DDE2E5" borderBottom="0.5px solid #DDE2E5"  d="flex" flexDir="column" >
                        <Text fontSize={{base:"18px", sm:"18px", md:"18px", lg:"md"}} color="#495057" marginBottom="7px">Compensation</Text>
                        <Text fontSize="lg">{props.compensation}</Text>
                    </Box>
                    <Box p="7px 0px 15px 25px" borderRight="0.5px solid #DDE2E5" borderBottom="0.5px solid #DDE2E5" d="flex" flexDir="column" >
                        <Text fontSize={{base:"18px", sm:"18px", md:"18px", lg:"md"}} color="#495057" marginBottom="7px">Job Type</Text>
                        <Text fontSize="lg">{props.jobType}</Text>
                    </Box>
                    <Box p="7px 0px 15px 25px" borderRight="0.5px solid #DDE2E5"  d="flex" flexDir="column" >
                        <Text fontSize={{base:"18px", sm:"18px", md:"18px", lg:"md"}} color="#495057" marginBottom="7px">Experience</Text>
                        <Text fontSize="lg">{props.experience}</Text>
                    </Box>  
                    <Box p="7px 0px 15px 25px" d="flex" flexDir="column"  >
                        <Text fontSize={{base:"18px", sm:"18px", md:"18px", lg:"md"}} color="#495057" marginBottom="7px">Job Frequency</Text>
                        <Text fontSize="lg">{props.jobFrequency}</Text>
                    </Box>
                </SimpleGrid>
                <Box p="20px 30px 0 30px">
                    <Box>
                        <Text fontSize="large" mb="10px" >Job Overview</Text>
                        <Text color="#495057" mb="20px" >{props.jobOverview}Product designers discuss designs with colleagues and clients, as well as working closely with engineers, model makers, sales and marketing staff and other skilled people. They use drawings, 3-D models and computer designs to express their ideas. They should understand technology, production methods and materials, and be able to meet deadlines and work within budgets.</Text>
                    </Box>
                    <Box>
                        <Text marginBottom="15px">Roles and Responsibilities</Text>
                        <UnorderedList spacing="6">
                            <ListItem color="#495057">{props.listOne}</ListItem>        
                            <ListItem color="#495057">{props.listTwo}</ListItem>        
                            <ListItem color="#495057">{props.listThree}</ListItem>        
                            <ListItem mb="30px" color="#495057" >{props.listFour}</ListItem>        
                        </UnorderedList>
                        {props.button}
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default MainJobItem