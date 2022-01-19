import React from "react";
import { Image } from "@chakra-ui/image";
import { Box , Text } from "@chakra-ui/layout";

const CardRecentPosts =(props)=>{
    return(
        <>
            <Text color='#23272E' fontSize='16px' fontWeight='600' >{props.title}Technology and remote work: A blessing or a curse?</Text>

            <Box 
                d= 'flex'
                alignItems= 'center'
                justifyContent= 'space-between'
                margin='20px 0px'
            >
                <Box  m='0px' display='flex' p='0px' alignItems='center' w='auto'>
                    <Image borderRadius='4px' alignItems='flex-start' display='flex'  height= "50px" width= "50px" borderRadius='100%'  src='https://tokeneo.com/uploads/2020/07/najwieksze-gieldy-kryptowalut-1.jpg'/>
                    <Box ml="10px" >
                        <Text color='#23272E' fontSize='16PX' fontWeight='600'>{props.name}Jude Sampson Jr.1</Text>
                        <Text color='#495057' fontSize='15px'>{props.text1}software developer</Text>
                        <Text color='#495057' fontSize='15px'>{props.text2}</Text>
                    </Box>
                </Box>
            </Box>

            <Box>
                <Box  d='flex' alignItems='center'>
                    <Image mr='5px' w='12px' h='10px' src='https://tokeneo.com/uploads/2020/07/najwieksze-gieldy-kryptowalut-1.jpg'/>        
                    <Text>{props.textTime}3 minute read</Text>
                </Box>
            </Box>
            
        </>
         
    )
}

export default CardRecentPosts