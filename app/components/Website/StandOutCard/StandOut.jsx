import React from 'react';
import { Box, Text } from '@chakra-ui/layout';

const StandOut = (props) => {

    return (
        <Box 
            d="flex" 
            flexDirection="column" 
            gridGap="10px" 
            pr={{xl:"0", lg:"0", md:"20vw", sm:"20vw", base:"20vw"}}
            w={{xl:"500px", lg:"500px", md:"87vw", sm:"87vw", base:"87vw"}} 
        >
            <Box w={{xl:"200px", lg:"180px", md:"140px", sm:"122px", base:"122px"}}>
                <img src={props.image} alt="image" />
            </Box>
            <Text
                fontWeight="500"
                fontSize={{xl:"26px", lg:"25px", md:"22px", sm:"22px", base:"22px"}}
                color="black"
            >
                {props.title}
            </Text>
            <Text
                fontSize={{xl:"22px", lg:"21px", md:"18px", sm:"17px", base:"16px"}}
                color="#495057"
                fontWeight="400"
            >
                {props.text}
            </Text>
        </Box>
    );
};

export default StandOut;