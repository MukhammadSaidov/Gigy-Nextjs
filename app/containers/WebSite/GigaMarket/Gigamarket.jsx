import React from 'react';
import { Box, Text, Link } from '@chakra-ui/layout';
import BigContent from '../../../components/Website/BigContent/BigContent';
import { Input, Select, Button, Image } from "@chakra-ui/react"
import GigaCategory from '../../../components/Website/Giga-Categories/GigaCategory';
import data from '../../../../fake_api/Website/Giga-Market/Gigamarket.json'

const Gigamarket = () => {
    return (
        <div>
             <Box 
                maxW={{xl:"84vw", lg:"85vw", md:"92vw", sm:"92vw", base:"92vw"}} 
                m="0 auto" 
                d="flex"
                flexDir="column" 
                justifyContent={{xl:"start", lg:"start", md:"center", sm:"center", base:"center"}}
                gridGap="100px"
                mt={{base: "50px", lg: "100px", xl: "100px", md: "70px", sm: "50px"}}
            >
                <BigContent
                    bigImage="/Icon/website-icons/Giga-Market/Giga-Market.svg"
                    title="Job marketplace"
                    bigText="Find the perfect Gigs tailored to your skills ."
                    smallText="Search through thousands of gigs and openings and find one that suits your skills and schedule."
                    rotate='false'
                /> 
                <Box width="100%" background="#FCFDFF" padding="35px 70px" boxShadow="0px 3px 12px -1px rgba(28, 52, 84, 0.1), 0px 2px 4px -1px rgba(28, 55, 90, 0.16)"> 
                    <Text fontWeight="500" fontSize="24px" color="#495057" textAlign={{lg: "left", xl: "left", md: "center", sm: "center", base: "center"}} fontFamily="Lato" lineHeight="19px">Search for gigs and jobs</Text> {/* Title Search */}
                    <Box d="flex" flexDirection={{ base: "column", lg: "initial", xl: "initial", md: "column", sm: "column"}} justifyContent={{base: "center", md: "center", sm: "center"}}  alignItems="center" mt="40px">
                        <Input _hover={{borderColor: "#3E2366"}} _focus={{borderColor: "#3E2366"}} borderRadius="8px" padding="0 7px 0 15px" w={{base: "250px", lg: "500px", xl: "500px", md: "500px", sm: "312px"}} height={{base: "35px",lg: "60px", xl: "60px", md: "50px", sm: "35px"}} placeholder="UI/UX Designer" color="#495057" fontSize="20px" fontFamily="Lato" />
                        <Select borderRadius="8px" _hover={{borderColor: "#3E2366"}}  _focus={{borderColor: "#3E2366"}} w={{base: "250px", lg: "500px", xl: "500px", md: "500px", sm: "312px"}} height={{base: "35px",lg: "60px", xl: "60px", md: "50px", sm: "35px"}} color="#495057" fontSize="20px" ml={{lg: "70px", xl: "70px", md: "0", sm: "0"}} mt={{base: "16px",lg: "0", xl: "0", md: "16px", sm: "16px"}} fontFamily="Lato">
                            <option value="Odense">Odense, Denmark</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Joseph">Joseph</option>
                        </Select>
                        <Button type="submit" ml={{lg: "70px", xl: "70px", md: "0", sm: "0"}} mt={{base: "24px",lg: "0", xl: "0", md: "30px", sm: "24px"}} _hover="none" _focus="none" w={{base: "152px",lg: "300px", xl: "300px", md: "250px", sm: "152px"}} height={{base: "35px",lg: "60px", xl: "60px", md: "50px", sm: "35px"}} fontSize="16px" fontWeight="500" fontFamily="Lato" lineHeight="19px" background="#603E94" borderRadius="8px" color="#fff" textTransform="uppercase" >search jobs</Button>
                    </Box>
                </Box> {/* Search Content */}
                <Box>
                    <Text fontSize={{base: "35px", lg: "50px", xl: "50px", md: "35px", sm: "35px"}} fontWeight="800" fontFamily="Lato" lineHeight={{base: "42px", lg: "60px", xl: "60px", md: "42px", sm: "42px"}} color="#17191C" textAlign={{base: "center", md: "center", sm: "center"}}>Top gig search by categories .</Text> {/* Title Categories */}
                    
                    <Box d="flex" flexWrap="wrap" alignItems="center" justifyContent={{base: "center", md: "center", sm: "center"}} gridGap="30px" mt="50px">
                        {data.map((item)=>
                            <GigaCategory
                                img={item.img}
                                text={item.text}
                                views={item.views}
                            />
                        )}
                    </Box>
                    
                    
                </Box>
            </Box>
        </div>
    );
};


export default Gigamarket;