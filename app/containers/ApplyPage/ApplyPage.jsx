import React from 'react';
import Layout from '../../components/LayOut/Layout';
import { Input } from '@chakra-ui/input';
import { Text } from '@chakra-ui/layout';
import { Link } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Box } from '@chakra-ui/layout';

const ApplyPage = (props) => {
    return (
        <Layout
            link="/job/jobs" 
            slash="/" 
            linkName="Job Centre" 
            linkPath="/me/job/jobs"
            currentPage="My Jobs" 
            searchInput={<Input placeholder="Search" w="18vw"/>} 
            linkButton={<Link href="/me/job/jobs"><Button colorScheme="purple" fontWeight="normal" textTransform="uppercase" marginLeft="25px">Go to job centre</Button></Link>}  
            searchButton={<Button ml='5vw'  colorScheme="purple" w="20vw" fontWeight="normal">Search</Button>}   
            searchIcon={"searchIcon"}
            LinkIcon={'iconjopcenter'}
        >
            <Box d="flex" flexDirection={{lg:'row', base:'column', md:'column', sm:'column',}} p="0" height="" >
                <Box width="" p="25px" height="85%" >
                    {props.mainJobItem}
                    {/* {data.map((item)=>
                        <MainJobItem
                            image={item.image}  
                            job={item.job}company={item.company}
                            location={item.location}
                            compensation={item.compensation}
                            jobType={item.jobType}
                            experience={item.experience}
                            jobFrequency={item.jobFrequency}
                            jobOverview={item.jobOverview}
                            listOne={item.listOne}
                            listTwo={item.listTwo}
                            listThree={item.listThree}
                            listFour={item.listFour}
                        />      
                    )} */}
                </Box>  
                <Box h="100%" d={{lg:'block', sm:"none", md:"none", base:"none",}} borderRight="1px solid #DDE2E5"></Box>
                <Box  d="flex" p="25px" flexDir="column">
                    <Box d="flex" flexDir="column" marginBottom="30px">
                        <Text ml="17px" fontSize="15px" color="#8C949C" marginBottom="25px" fontWeight="700" textTransform="uppercase" >Job statistics</Text>
                        {props.academyGraphCard}
                        {/* <AcademyGraphCard
                            cardType={}
                            graphValue={}
                            graphPercentage={}
                            totalOrders={}
                        /> */}
                    </Box>
                    <Box d="flex" flexDir="column">
                        <Text ml="17px" fontSize="15px" color="#8C949C" marginBottom="25px" width="100%" fontWeight="700" textTransform="uppercase" >upcoming gigs</Text>
                        {props.smallUpcomingGigsCard}
                        {/* <SmallUpcomingGigsCard
                            job={}
                            company={}
                            location={}
                            time={}
                            uploadTime={}
                            money={}
                        /> */}
                    </Box>
                </Box>  
            </Box>
            {/* <ApplyItems/> */}
        </Layout>
    );
};

export default ApplyPage;