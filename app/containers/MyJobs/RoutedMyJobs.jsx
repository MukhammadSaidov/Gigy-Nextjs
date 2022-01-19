import React from 'react';
import MyJobsPage from "./MyJobs";
import Link from "next/link";
import JobItem from "../../components/JobItem/JobItem";
import UpcomingGigsCard from "../../components/UpcomingGigsCard/UpcomingGigsCard";
import { Box } from "@chakra-ui/layout";


const RoutedMyJobs = ({ninja}) => {
    return (
        <MyJobsPage
            jobItem={  
             ninja.map(item =>  
               <Link href={'/me/job/applypage/' + item.id} key={item.id} >
                 <a href="">
                 <Box padding="2vw" width={{xl:"18vw",lg:"30vw", md:"45vw",sm:"87vw",base:"87vw",}}  borderRadius="4px" border="0.7px solid #DDE2E5" display="flex" flexDir="column" >
                  <JobItem
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
                    // width="350px"
                  />        
                  </Box>
                 </a>
               </Link>
             )}    
             upcomingGigsCard={
             ninja.map(item =>  
             <Link href={'/me/job/applypage/' + item.id} key={item.id} >
               <a href="">
                <Box w={{xl:"400px", lg:"300px", md:"87vw", sm:"87vw", base:"87vw"}}>
                  <UpcomingGigsCard
                    job={item.name}  
                   // rColor={item.rColor}
                   // job={item.job}
                   // company={item.company}
                   // image={item.image}
                   // time={item.time}
                   // uploadTime={item.uploadTime}
                   // money={item.money}
                   // width="350px"
                   />        
                </Box>
               </a>
             </Link>
            )}
        />
    );
};

export default RoutedMyJobs;