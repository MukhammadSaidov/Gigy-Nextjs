import React from "react";
import { Box, Text, ListItem, UnorderedList } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";

const MainJobItem = (props) => {
    return(
        <>
            <Box borderRadius="4px" h="770px" border="0.5px solid #DDE2E5" w="100%">
                <Box h="250px" p="40px" justifyContent="space-between" d="flex" w="100%">
                    <Box>
                        <Image w="80px" borderRadius="8px" h="80px" src="https://avatars.mds.yandex.net/i?id=f600d5b665a2fc46a6ea2f243b8e6ab3-5086868-images-thumbs&n=13" />
                        <Text fontSize="2xl" marginTop="25px">Cab Driving</Text>
                        <Box marginTop="20px" d="flex">
                            <Text color="#495057" marginRight="15px">
                                <bagIcon/>
                                Uber
                            </Text>
                            <Text color="#495057">
                                <bagIcon/>
                                Odense, Denmark
                            </Text>
                        </Box>
                    </Box>
                    <Box d="flex" flexDir="column">
                        <Box marginBottom="100px">
                            <Button variant="outline" colorScheme="purple" w="200px" h="60px">APPLY NOW</Button>
                        </Box>
                        <Box d="flex">
                            <Text color="#495057" marginRight="15px">
                                <bagIcon/>
                                7 days ago
                            </Text>
                            <Text color="#495057">
                                <bagIcon/>
                                14 Applicants
                            </Text>
                        </Box>
                    </Box>
                </Box>
                <Box d="flex" justifyContent="space-between" height="90px" borderTop="0.5px solid #DDE2E5" borderBottom="0.5px solid #DDE2E5">
                    <Box w="25%" borderRight="0.5px solid #DDE2E5" d="flex" flexDir="column" p="10px 15px 5px 15px">
                        <Text fontSize="md" marginBottom="15px">Compensation</Text>
                        <Text fontSize="lg">Up to $80 monthly</Text>
                    </Box>
                    <Box w="25%" borderRight="0.5px solid #DDE2E5" d="flex" flexDir="column" p="10px 15px 5px 15px">
                        <Text fontSize="md" marginBottom="15px">Job Type</Text>
                        <Text fontSize="lg">Flexible</Text>
                    </Box>
                    <Box w="25%" borderRight="0.5px solid #DDE2E5" d="flex" flexDir="column" p="10px 15px 5px 15px" >
                        <Text fontSize="md" marginBottom="15px">Experience</Text>
                        <Text fontSize="lg">No prior experience</Text>
                    </Box>
                    <Box w="25%" d="flex" flexDir="column" pb="25px" p="10px 15px 5px 15px">
                        <Text fontSize="md" marginBottom="15px">Job Frequency</Text>
                        <Text fontSize="lg">Weekly</Text>
                    </Box>
                </Box>
                <Box p="50px">
                    <Box marginBottom="25px">
                        <Text marginBottom="25px">Job Overview</Text>
                        <Text color="#495057">Product designers discuss designs with colleagues and clients, as well as working closely with engineers, model makers, sales and marketing staff and other skilled people. They use drawings, 3-D models and computer designs to express their ideas. They should understand technology, production methods and materials, and be able to meet deadlines and work within budgets.</Text>
                    </Box>
                    <Box>
                        <Text marginBottom="15px">Roles and Responsibilities</Text>
                        <UnorderedList spacing="10px">
                            <ListItem color="#495057">Researching similar products and developing ideas</ListItem>        
                            <ListItem color="#495057">Making sketches of ideas by hand or computer, and developing the most effective ideas into detailed drawings using specialist computer software. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quasi numquam dolorum saepe odit optio.</ListItem>        
                            <ListItem color="#495057">Overseeing the testing of the chosen design</ListItem>        
                            <ListItem color="#495057">Working within budgets to save cost and maximize output</ListItem>        
                        </UnorderedList>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default MainJobItem