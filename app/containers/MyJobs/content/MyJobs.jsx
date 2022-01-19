import React from "react";
import { Box, Text } from "@chakra-ui/layout";
import ucData from "../../../../fake_api/UpcomingGigs.json"
import { Button } from "@chakra-ui/button";
import UpcomingGigsCard from "../../../components/UpcomingGigsCard/UpcomingGigsCard";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'

const MyJobs = (props) => {

    return (
        <Box d="flex" flexDir="column">
            <Box maxW="2000px" d="flex" p="35px" justifyContent="space-between">
                {props.jobItem}
                {/* {data.map(item=>
                    <JobItem
                    key={item.id}
                    image={item.img} 
                    company={item.name} 
                    jobRole={item.job} 
                    companyName={item.company} 
                    about={item.about} 
                    salary={item.salary} 
                    price={item.price} 
                    link={item.link}                  
                    path={item.path}
                    width="340px"
                /> 
                )} */}
            </Box>
            <Box backgroundColor='white' borderTop="0.7px solid #DDE2E5" borderBottom="0.7px solid #DDE2E5" h="60px" d='flex' justifyContent='space-between' alignItems='center' w="100%">
                <Box pl="30px" d="flex" justifyContent="flex-start" transition='500ms ease-in-out' d="flex">
                    <Text fontSize="x-large" color="black">
                        My Calendar and Availability
                    </Text> 
                </Box>
                <Button variant="outline" colorScheme="purple" zIndex="0" marginRight="50px" >
                    ADJUST CALENDAR 
                </Button>
            </Box>
            <Box>
                <Box d="flex" pl="50px" justifyContent="space-between" pr="25px" >
                    <Box w="1000px">
                        <Calendar />
                    </Box>
                    <Box>    
                    <Text color="#8C949C" fontSize="x-large" >Upcoming gigs</Text>
                        {ucData.map((item)=>
                            <UpcomingGigsCard
                                rColor={item.rColor}
                                job={item.job}
                                company={item.company}
                                image={item.image}
                                time={item.time}
                                uploadTime={item.uploadTime}
                                money={item.money}
                            />
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
} 

export default MyJobs