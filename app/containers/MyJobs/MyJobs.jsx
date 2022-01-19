import React from "react";
import Layout from "../../components/LayOut/Layout";
import { Box, Text, Flex } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import EmptyMainPage from "../jobs/empty/EmptyMainpage";
import Link from "next/link";

const MyJobsPage = (props) => {

    return(
        <>
            <Layout
            link="/me/job/jobs" 
            slash="/" 
            linkName="Job Centre" 
            currentPage="My Jobs" 
            searchInput={<Input  w={{lg:"18vw" , base:"75vw"}}  placeholder="Search "/>}
            linkButton={<Link href="/me/job/jobs"><Button colorScheme="purple" w={{lg:"120px" , base:"20vw"}} fontWeight="normal" marginLeft="25px">MY JOBS</Button></Link>}  
            searchButton={<Button ml='5vw'  colorScheme="purple" w="20vw" fontWeight="normal">Search</Button>}   
            searchIcon={"searchIcon"}
            LinkIcon={'iconjopcenter'}
            >
               {false ? (<EmptyMainPage/>)
                : (<Box d="flex" flexDir="column">
                    {/* <SimpleGrid columns={{lg:"4", sm:"1", md:"2", base:"1"}} d="grid" gap="25px"  justifyItems="center" p="35px" alignItems="center" justifyContent="center"> */}
                    {/* </SimpleGrid> */}
                   <Flex wrap="wrap" justifyContent="center" gridGap="22px" p="25px" >
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
                    </Flex>
                    <Box backgroundColor='white' borderTop="0.7px solid #DDE2E5" borderBottom="0.7px solid #DDE2E5" h="60px" d='flex' justifyContent={{base:'center', sm:'center', md:'center', lg:"space-between"}} alignItems='center' w="100%">
                        <Box pl="30px" d="flex" justifyContent="flex-start" transition='500ms ease-in-out' d="flex">
                            <Text fontSize="x-large" color="black">
                                My Calendar and Availability
                            </Text> 
                        </Box>
                        <Button d={{lg:"block", sm:"none", md:"none", base:"none",}} variant="outline" colorScheme="purple" zIndex="0" marginRight="50px" >
                            ADJUST CALENDAR 
                        </Button>
                    </Box>
                    <Box>
                        <Box d="flex" flexDirection={{lg:"row", sm:"column", md:"column", base:"column"}} pl="" alignItems="center" justifyContent="space-between" pr="" >
                            <Box marginTop="50px" >
                                <Calendar />
                            </Box>
                            <Box>    
                                <Text color="#8C949C" fontSize="x-large" marginTop="25px" >Upcoming gigs</Text>
                                {props.upcomingGigsCard}
                                {/* {ucData.map((item)=>
                                    <UpcomingGigsCard
                                        rColor={item.rColor}
                                        job={item.job}
                                        company={item.company}
                                        image={item.image}
                                        time={item.time}
                                        uploadTime={item.uploadTime}
                                        money={item.money}
                                    />
                                )} */}
                            </Box>
                        </Box>
                    </Box>
                </Box>)}
            </Layout>
        </>
    )
}

export default MyJobsPage