import React from "react";
import Layout from "../../components/LayOut/Layout";
import { Box } from "@chakra-ui/layout";
import data from '../../../fake_api/LayoutTags.json'
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import Link from "next/link";


const JobsInfoCenter = (props) => {
    return (
        <>
            {data.map((item)=>
                <Layout
                    link="/me/job/jobs" 
                    slash="/" 
                    currentPage={item.jobInfo}
                    linkName={item.job} 
                    searchInput={<Input placeholder="Search" width="18vw"/>} 
                    linkButton={<Link href="/me/job/my-job/my-jobs-main"><Button colorScheme="purple" w={{lg:"120px" , base:"20vw"}} fontWeight="normal" marginLeft="25px">MY JOBS</Button></Link>}  
                    searchButton={<Button ml='5vw'  colorScheme="purple" w="20vw" fontWeight="normal">Search</Button>}   
                    searchIcon={"searchIcon"}
                    LinkIcon={'iconjopcenter'}
                >
                      <Box d="flex" pl="" pr="" flexDirection={{base:"column-reverse", sm:"column-reverse", md:"column-reverse", lg:"row"}} >
                            <Box d="flex" position={{xl:"fixed", lg:"fixed", md:"static", sm:"static", base:"static"}} h="87.7vh" width={{base:"100%", md:"100%",lg:"400px"}} alignItems="center" overflowY={{md:"none",lg:"scroll"}} flexDir="column" borderRight={{md:"none",lg:"1px solid #CCC"}}>
                                {props.jobInfoItem}
                            </Box>
                            <Box ml={{base:"0", md:"0",lg:"400px"}} p="15px" >
                              {props.mainJobItem}
                            </Box>
                        </Box>
                    
                </Layout>
            )}
        </>
    )
}

export default JobsInfoCenter