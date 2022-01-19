import { Box , Text } from "@chakra-ui/layout";
import React from "react";
import LineGraph from "../LineGraph/LineGraph";


const CardOverview =(props)=>{

    const index = [1,5,3,7,5,6,3,5,8]

    return(
        <> 
            <Box d='flex' flexDirection='column' justifyContent='flex-end' >
                <Text color="#8C949C" fontSize="16px" >{props.name} gig earnings1</Text>
                <Text fontWeight='bold' fontSize="18px" color='#495057' >{props.price}$ 2340</Text>
            </Box>
            <Box >
                <Text d='flex' justifyContent='flex-end' mb='1vw' color="#603E94" fontSize='16px' >{props.percentage}+23%</Text>
                <Box mb='-20px' w={{base:'auto',sm:'auto',md:'auto',lg:'auto',xl:'130px'}}>
                    <LineGraph data={index}/>
                </Box>
            </Box>
        </>
         
    )
}

export default CardOverview