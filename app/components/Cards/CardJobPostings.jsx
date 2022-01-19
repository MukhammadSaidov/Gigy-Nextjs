import React from "react";
import { Image } from "@chakra-ui/image";
import { Box , Text } from "@chakra-ui/layout";

const CardJobPostings =(props)=>{

    return(
        <>
            <Box display='flex' alignItems='center'>
                <Image borderRadius='4px' alignItems='flex-start' display='flex'  height= "70px" width= "70px"  src='https://tokeneo.com/uploads/2020/07/najwieksze-gieldy-kryptowalut-1.jpg'/>
                <Box ml="10px" >
                    <Text color='#23272E' fontSize='16px' fontWeight='600'>{props.name}Food Delivery1</Text>
                    <Text color='#495057' fontSize='15px'>{props.text1}Pepsi Co</Text>
                    <Text color='#495057' fontSize='15px'>{props.text2}Odense, Denmark</Text>
                </Box>
            </Box>

            <Box mt='10px' d='flex' alignItems='center'  >
                <Box d='flex' alignItems='center'>
                    <Image mr='5px' w='12px' h='10px' src='https://tokeneo.com/uploads/2020/07/najwieksze-gieldy-kryptowalut-1.jpg'/>                            
                    <Text fontSize='14px'color='#603E94' fontWeight='bold' >{props.price}$60</Text> <Text>{props.textPrice}/month</Text>
                </Box>
                <Box ml='20px' d='flex' alignItems='center'>
                    <Image borderRadius='100%' mr='5px' w='10px' h='10px' src='https://tokeneo.com/uploads/2020/07/najwieksze-gieldy-kryptowalut-1.jpg'/>        
                    <Text fontSize='14px' >{props.textTime}Posted 7 days ago </Text>
                </Box>
            </Box>
        </>
         
    )
}

export default CardJobPostings