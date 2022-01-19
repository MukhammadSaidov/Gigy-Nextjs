import React from 'react';
import JobCenter from './Jobs'
import JobItem from '../../components/JobItem/JobItem';
import Link from 'next/link'
import { Box } from '@chakra-ui/layout'

const RoutedJobs = ({ninja}) => {
    return (
        
        <JobCenter
        jobItem={  
            ninja.map(item =>  
              <Link href={'/me/job/' + item.id + '/info'} key={item.id} >
                  <Box padding="2vw" width={{xl:"18vw",lg:"30vw", md:"45vw",sm:"87vw",base:"87vw",}}  borderRadius="4px" border="0.7px solid #DDE2E5" display="flex" flexDir="column" >
                    <a href="">
                      <JobItem
                        image="https://allears.net/wp-content/uploads/2020/06/Uber-logo.jpg"
                        companyName={item.name}  
                        // key={item.id}
                        // image={item.img} 
                        // company={item.name} 
                        // jobRole={item.job} 
                        // companyName={item.company} 
                        // about={item.about} 
                        // salary={item.salary} 
                        // price={item.price} 
                        // link={item.link}                  
                        // path={item.path}
                        />        
                    </a>
                  </Box>    
              </Link>
            )}
        />
    );
};

export default RoutedJobs;