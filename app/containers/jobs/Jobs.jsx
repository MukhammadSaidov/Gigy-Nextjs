import React from "react";
import Layout from "../../components/LayOut/Layout";
import { Box, Stack, Flex } from "@chakra-ui/layout";
import datas from '../../../fake_api/LayoutTags.json'
import data from '../../../fake_api/Checkboxes.json'
import { Input } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { FormControl, FormHelperText } from "@chakra-ui/form-control";
import { Select } from "@chakra-ui/select";
import CustomCheckbox from "../../components/CheckBoxes/Checkbox";
import Link from "next/link";


const JobCenter = (props) => {
    return (
        <>
            {datas.map((item) =>
                <Layout 
                linkPath="/me/job/jobs"
                currentPage={item.job} 
                linkButton={<Link href="/me/job/my-job/my-jobs-main"><Button colorScheme="purple" w={{lg:"120px" , base:"20vw"}} fontWeight="normal" marginLeft="25px">MY JOBS</Button></Link>}  
                searchInput={<Input  w={{lg:"18vw" , base:"75vw"}}  placeholder="Search "/>} 
                searchButton={<Button ml='5vw'  colorScheme="purple" w="20vw" fontWeight="normal">Search</Button>}   
                searchIcon={"searchIcon"}
                filter={"filter"}
                LinkIcon={'iconjopcenter'}
            >
                    <Box maxW="100vw" display="flex" justifyContent={{xl:"space-between",lg:"space-between",md:"center",sm:"center",base:"center", }}>
                        <FormControl d={{base:"none", sm:"none",md:"none", lg:"block"}} pos="fixed" bgColor="#fff" p='2vw' flexDirection="column"  width={{xl:"400px", lg:"300px"}} height="100vh" borderRight="1px solid #DDE2E5">
                            <Stack spacing="5" p='1vw 0px'  >
                                {data.map((item)=>(
                                    <CustomCheckbox
                                    item={item}
                                    />
                                ))}
                            </Stack>   
                            <Stack marginBottom="30px">
                                <FormHelperText marginTop="20px" marginBottom="10px">SORT BY DATE</FormHelperText>
                                <Select bgColor="blackAlpha.200" marginBottom="20px" variant="outline" >
                                    <option value="New">Newest First</option>
                                    <option value="Old">Oldest First</option>
                                </Select>
                            </Stack>
                            <Stack marginBottom="30px">
                            <FormHelperText marginBottom="10px" >SORT BY EARNINGS</FormHelperText>
                                <Select bgColor="blackAlpha.200" marginBottom="20px" variant="outline">
                                    <option value="100">100$</option>
                                    <option value="200">200$</option>
                                    <option value="300">400$</option>
                                </Select>
                            </Stack>
                            <Stack marginBottom="30px">
                                <FormHelperText marginBottom="10px" >JOB/GIG LOCATION</FormHelperText>
                                <Select bgColor="blackAlpha.200" marginBottom="20px" variant="outline">
                                    <option value="Madrid">Madrid</option>
                                    <option value="Manchester">Bayern</option>
                                    <option value="London">London</option>
                                </Select>
                            </Stack>
                        </FormControl>
                        <Box display="flex" w="100%" justifyContent="center" pl={{xl:"460px",lg:"290px", md:"0", sm:"0", base:"0"}} alignItems="center">
                            <Flex flexWrap="wrap" w="100%" padding="25" gridGap="22px" alignContent="center" justifyContent="center" >
                                {props.jobItem}
                            </Flex>
                        </Box>
                    </Box>
                </Layout>
            )}
        </>
    )
}

export default JobCenter