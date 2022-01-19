import React from "react";
import JobInfoItem from "../../../components/InfoItem/InfoItem";
import { Box } from "@chakra-ui/layout";
import data from '../../../../fake_api/JobInfoSmall.json'
import MainJobItem from "../../../components/MainJobInfo/MainJobInfo";
import mainData from '../../../../fake_api/MainJobItem.json'
import { Button } from "@chakra-ui/button";
import { StarIcon } from "@chakra-ui/icons";




const JobsInfo = (props) => {
    return (       
        <Box d="flex">
            <Box d="flex" h="87vh" overflowY="scroll" flexDir="column" borderRight="1px solid #CCC">
                {data.map((item)=> 
                    <JobInfoItem
                        image={item.img}
                        company={item.company}
                        jobRole={item.job}
                        companyName={item.company}
                        location={item.location}
                        salary={item.salary}
                        price={item.price}
                        date={item.date}
                    />
                )}
            </Box>
            <Box p="25px" w="1220px">
              {props.MainJobItem}
                {mainData.map((item)=>
                    <MainJobItem
                        image={item.image}  
                        job={item.job}
                        applyBtn={<Button variant="outline" colorScheme="purple" w="180px" h="60px">APPLY NOW</Button>}
                        company={item.company}
                        location={item.location}
                        dateIcon={<StarIcon marginRight="5px"/>}
                        date={item.date}
                        applicationsIcon={<StarIcon marginRight="5px"/>}
                        applications={item.applications}
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
                )}    
            </Box>
        </Box>
    )
}

export default JobsInfo