import { Box,Grid } from "@chakra-ui/layout";
import React from "react";
import JobItem from "../../../components/JobItem/JobItem";
import data from '../../../../fake_api/Jobs.json'

const JobSide = () => {
    return (
        <Box display="flex" justifyContent="center" w='100%'>

            <Grid padding="25" templateColumns="repeat(3, 1fr)" gridGap="12" justifyContent="center" >
                {data.map((item) =>
                    <JobItem
                        image={item.img} 
                        company={item.company} 
                        jobRole={item.job} 
                        companyName={item.company} 
                        about={item.about} 
                        salary={item.salary} 
                        price={item.price} 
                        link={item.link}                  
                        path={item.path}
                        width="350px"
                    />
                    )}
            </Grid>

        </Box>
    )
} 

export default JobSide














