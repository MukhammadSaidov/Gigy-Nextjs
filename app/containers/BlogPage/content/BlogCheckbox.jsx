import React from "react";
import { Box, Stack, Text } from "@chakra-ui/layout";
import data from '../../../../fake_api/NewsBlog/BlogCHeckbox.json'
import { FormControl, FormHelperText } from "@chakra-ui/form-control";
import { Select } from "@chakra-ui/select";
import CheckboxItem from '../../../components/CheckBoxes/Checkbox'

 
const BlogCheckbox = () => {
    return(
      <>
         <Box marginLeft={{base: "0", lg: "45px", md: "30px", sm: "30px"}}>
            <FormControl display={{base: "none", lg: "flex", md:"none", sm: "none"}} maxWidth={{base: "0", lg: "450px", md: "400px", sm: "0"}} flexDirection="column" width="350px" height="100vh" borderRight="1px solid #CCC" paddingTop="25px" paddingRight="20px"  borderRightColor="blackAlpha.100">
            <Text fontSize="10px" textTransform="uppercase" marginBottom="15px  " color="#8C949C">Post categories</Text>
                <Stack display="flex" spacing="5" flexDir="column" padding="0 0">
                    {data.map((item)=>(
                        <CheckboxItem
                            item={item}
                        />
                    ))}
                </Stack>     
                <Stack marginBottom="30px">
                    <FormHelperText marginTop="40px" marginBottom="10px" textTransform="uppercase">publication date preference</FormHelperText>
                    <Select bgColor="blackAlpha.200" marginBottom="20px" variant="outline" >
                        <option value="New">Newest First</option>
                    </Select>
                </Stack>
                <Stack marginBottom="30px">
                <FormHelperText marginBottom="10px" textTransform="uppercase" >article length</FormHelperText>
                    <Select bgColor="blackAlpha.200" marginBottom="20px" variant="outline">
                        <option value="Less than 10 minutes ">Less than 10 minutes $</option>
                    </Select>
                </Stack>
            </FormControl>
       </Box>
      </>
    )
}

export default BlogCheckbox;