import React from 'react';
import JobsInfoCenter from './JobsInfoCenter';
import MainJobItem from '../../../app/components/MainJobInfo/MainJobInfo';
import JobInfoItem from '../../../app/components/InfoItem/InfoItem';
import Link from 'next/link';
import { Button } from '@chakra-ui/button';

const RoutedJobsInfo = ({ninja, item}) => {

    return(

        <JobsInfoCenter
      
            jobInfoItem={
              ninja.map(items =>
                <Link href={'/me/job/' + items.id + '/info'} key={items.id} >
                  <a href="#">
                    <JobInfoItem 
                      companyName={items.name}
                    //   image={item.img}
                    //   company={item.company}
                    //   jobRole={item.job}
                    //   companyName={item.company}
                    //   location={item.location}
                    //   salary={item.salary}
                    //   price={item.price}
                    //   date={item.date}
                    />
                  </a>
                </Link>
              )
            }
      
            mainJobItem={
              <MainJobItem
                image="https://allears.net/wp-content/uploads/2020/06/Uber-logo.jpg"  
                job={item.name}
                applyBtn={<Button variant="outline" colorScheme="purple" w="180px" h="60px">APPLY NOW</Button>}
                dateIcon={<img src="/Icon/Job-Item/clock.svg" style={{marginRight:"5px", width:"17px"}} />}
                applicationsIcon={<img src="/Icon/Job-Item/application-icon.svg" style={{marginRight:"5px", width:"17px"}} />}
                button={<Button d={{base:"block", sm:"block", md:"block", lg:"none"}} variant="solid" colorScheme="purple" w="100%" h="60px">APPLY NOW</Button>}
                // company={item.company}
                // location={item.location}
                // date={item.date}
                // applications={item.applications}
                // compensation={item.compensation}
                // jobType={item.jobType}
                // experience={item.experience}
                // jobFrequency={item.jobFrequency}
                // jobOverview={item.jobOverview}
                // listOne={item.listOne}
                // listTwo={item.listTwo}
                // listThree={item.listThree}
                // listFour={item.listFour}
              />  
                        
            }
        />
    );
};


export default RoutedJobsInfo;