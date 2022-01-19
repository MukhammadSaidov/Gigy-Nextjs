import { Image } from "@chakra-ui/image";
import { Box , Text} from "@chakra-ui/layout";
import React from "react";

const CardJobs =(props)=>{ 
    return(
        <>
            <Box  display='flex' alignItems='center' w='auto'>
                <Image borderRadius='4px' alignItems='flex-start' display='flex'  boxSize='70px'  src='https://tokeneo.com/uploads/2020/07/najwieksze-gieldy-kryptowalut-1.jpg'/>
                <Box ml="10px" >
                    <Text color='#23272E' fontSize='16px' fontWeight='600'>{props.name}Food Delivery1</Text>
                    <Text color='#495057' fontSize='15px'>{props.text1}Pepsi Co</Text>
                    <Text color='#495057' fontSize='15px'>{props.text2}Odense, Denmark</Text>
                </Box>
            </Box>
            <Text fontSize= "22px" color="#603E94">{props.price}$60</Text>

        </>
         
    )
}

export default CardJobs