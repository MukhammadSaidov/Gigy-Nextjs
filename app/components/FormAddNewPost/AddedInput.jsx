import {Box} from "@chakra-ui/layout";
import React from "react";
import { Input } from "@chakra-ui/input";
import { CloseIcon  } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/icon";
import { Button } from "@chakra-ui/button";


const AddedInput =(data)=>{ 
    return(
        <Box  >
            <Box transition='800ms ease-in-out' id={data.id} mt='0.5vw' d='flex' alignItems='center'>
                <Input backgroundColor='#F5F4F6' mt='10px' ml='-15px'  w={data.width == '100%' ? '100%' : '19vw'} readOnly defaultValue={data.text}></Input>
                <Button onClick={() => data.handleDelete(data.id)} style={{ color:'green.800', borderRadius:'5px' , padding:'1px' ,marginTop:'10px', height:'40px' , width:'60px', border:'0.7px solid #DDE2E5' , marginLeft:'10px' , backgroundColor:'#EDF2F7'}}><Icon as={CloseIcon} color="red.500" /></Button>
            </Box>
        </Box>
    )
}
export default AddedInput