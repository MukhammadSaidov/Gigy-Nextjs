import { Box, Container } from "@chakra-ui/layout";
import React from "react";
import { Input } from "@chakra-ui/input";
import { AddIcon  } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/icon";


const FormInput =(data)=>{
    return(
        <form onSubmit={data.handleSubmit}>
            <Box mt='0.5vw' d='flex' alignItems='center'>
                <Input backgroundColor='#F5F4F6' mt='10px' w={data.width == '100%' ? '100%' : '19vw'}  ml='-15px'   value={data.typeValue} onChange={data.handleChange} required type={data.type} placeholder={data.placeholder}></Input>
                <button style={{ color:'green.800', borderRadius:'5px' , padding:'1px' ,marginTop:'10px', height:'40px' , width:'60px', border:'0.7px solid #DDE2E5' , marginLeft:'10px' , backgroundColor:'#EDF2F7'}} ><Icon as={AddIcon} color="#603E94" /></button>
            </Box>
        </form>
    )
}
export default FormInput