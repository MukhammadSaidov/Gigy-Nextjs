import React from 'react';
import { Box } from '@chakra-ui/layout';
import MainJobItem from '../../../components/MainJobInfo/MainJobInfo';
import data from '../../../../fake_api/MainJobItem.json'

const ApplyItems = () => {
    return (
        <Box d="flex" p="25px">
            <Box width="">
                {data.map((item)=>
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
                )}
            </Box>  
            <Box width="30%">
                
            </Box>  
        </Box>
    );
};

export default ApplyItems;