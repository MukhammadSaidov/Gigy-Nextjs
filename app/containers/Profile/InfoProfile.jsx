import { Box } from "@chakra-ui/layout";
import React from "react";

const InfoProfile =(props)=>{

    return(
        <Box h='100%' w={{lg:'250px',xl:'330px'}} p='1vw 1vw 2vw 1vw'borderLeft="0.7px solid #DDE2E5" alignItems='center' justifyContent='center'>
            

            <Box borderRadius='4%' p='2vw' mb='2vw' h='380px' textAlign='center' bgGradient={["linear(to-tr, teal.300, yellow.400)","linear(to-t, blue.200, teal.500)","linear(to-b, orange.100, purple.300)",]}>
                <h2>Calendar</h2>
            </Box>


            <Box>
                <h4>Upcoming gigs</h4>

                {props.upcomingGigsCard}                
            </Box>
        </Box>
    )
}
export default InfoProfile;