import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import BigContent from '../../../components/Website/BigContent/BigContent';
import StandOut from '../../../components/Website/StandOutCard/StandOut';
import data from '../../../../fake_api/Website/about-page/smItems.json'
import datas from '../../../../fake_api/Website/about-page/smitemms.json'

const AboutPage = () => {
    return (
        <Box 
            maxW={{xl:"84vw", lg:"85vw", md:"92vw", sm:"92vw", base:"92vw"}} 
            m="0 auto" 
            d="flex"
            flexDir="column" 
            justifyContent={{xl:"start", lg:"start", md:"center", sm:"center", base:"center"}}
            gridGap="100px"
        >
            <BigContent
                bigImage="/Icon/website-icons/about-us/people.svg"
                title="about us"
                bigText="Accessible and affordable services at your finger tips."
                smallText="We are the preferred hub for selection and hiring of trained, prodfessional and skilled assistance. Our gigs range from fixing things around the home, grocery shopping, care-giving, to software development."
                smallText2="We support remote workers and are strong proponents of the gig economy."
                rotate='true'
            />
            <Box d="flex" gridGap="60px" flexDir="column">
                <Text 
                    textAlign={{xl:"start", lg:"start", md:"center", sm:"center", base:"center"}}
                    color="#17191C" 
                    fontWeight="700"
                    fontSize={{xl:"50px", lg:"40px", md:"25px", sm:"25px", base:"25px"}}
                >
                    What stands us out .
                </Text>
                <Box d="flex" gridGap="50px" flexDir={{xl:"row", lg:"row", md:"column", sm:"column", base:"column"}}>
                    {data.map((item)=>
                        <StandOut
                            image={item.img}
                            title={item.title}
                            text={item.text}
                        />
                    )}
                </Box>
                
                <Box w={{lg:"45vw", xl:"45vw", md:"45vw", sm:"45vw", base:"50vw"}} >
                    <img src="/Icon/website-icons/line.svg" alt="" />
                </Box>
                <Box gridGap="30px" d="flex" justifyContent="space-between" flexDir={{xl:"row", lg:"row", md:"column", sm:"column", base:"column"}} >
                    <Box w={{xl:"35%", lg:"40%", md:"87%", sm:"87%", base:"87%"}}  >
                        <Text 
                            textAlign="start"
                            color="#17191C" 
                            fontWeight="600"
                            fontSize={{xl:"30px", lg:"25px", md:"23px", sm:"23px", base:"23px"}}
                        >
                            Our Vision and Mission
                        </Text>
                        <Text
                            fontSize={{xl:"22px", lg:"21px", md:"18px", sm:"17px", base:"16px"}}
                            color="#495057"
                            fontWeight="400"
                        >
                            We want to be at the forefront of the gig economy, rewarding skilles and know-how appropriately while helping you live your best life.
                        </Text>
                    </Box>
                    <Box w={{xl:"35%", lg:"40%", md:"87%", sm:"87%", base:"87%"}}>
                        <Text 
                            textAlign="start"
                            color="#17191C" 
                            fontWeight="600"
                            fontSize={{xl:"30px", lg:"25px", md:"23px", sm:"23px", base:"23px"}}
                        >
                            Our Values at Gigy
                        </Text>
                        <Text
                            fontSize={{xl:"22px", lg:"21px", md:"18px", sm:"17px", base:"16px"}}
                            color="#495057"
                            fontWeight="400"
                        >
                            We value ingenuity, problem solving, integrity as well as commitment to excellent performance in service delivery and  client satisfaction.
                        </Text>
                    </Box>
                </Box>
                <Text 
                    textAlign={{xl:"start", lg:"start", md:"center", sm:"center", base:"center"}}
                    color="#17191C" 
                    w={{xl:"100%", lg:"100%", md:"95%", sm:"95%", base:"95%"}}
                    fontWeight="700"
                    fontSize={{xl:"50px", lg:"40px", md:"27px", sm:"27px", base:"27px"}}
                >
                    Use Gigy in Three simple steps .
                </Text>
                <Box gridGap="30px" d="flex" justifyContent="space-between" flexDir={{xl:"row", lg:"row", md:"column", sm:"column", base:"column"}} >
                    
                    {datas.map((item)=>
                        <StandOut
                            image={item.img}
                            title={item.title}
                        />
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default AboutPage;