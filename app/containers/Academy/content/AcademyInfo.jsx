import React from 'react';
import data from '../../../../fake_api/Academy.json'
import AcademyItem from '../../../components/AcademyInfo/AcademyItem';
import { Box, Flex } from '@chakra-ui/layout';


const AcademyInfo = () => {
    return (
        <Flex display="flex" gridGap="22px" justifyContent="center" alignItems="center" ml={{base: "0px", lg: "350px",  xl: "400px", md: "0px", sm: "0px"}} flexWrap="wrap" padding="25" maxH="80vh" >
            
            {data.map((item)=>
                <Box margin="0 " width="auto">
                    <AcademyItem
                    image={item.img} 
                    company={item.company} 
                    title={item.title}
                    about={item.about} 
                    salary={item.salary} 
                    price={item.price} 
                    link={item.link}                  
                    path={item.path}
                    proof={item.proof}
                    duration={item.duration}
                    showEmail={false}
                    />
                </Box>
            )}

         </Flex>
    );
};


export default AcademyInfo;