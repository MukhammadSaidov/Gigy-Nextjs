import React from "react";
import { Stack, Text } from "@chakra-ui/layout";
import academyCheckbox from '../../../../fake_api/AcademyCheckbox.json'
import { FormControl, FormHelperText } from "@chakra-ui/form-control";
import { Select } from "@chakra-ui/select";
import CheckboxItem from '../../../components/CheckBoxes/Checkbox'

 
const Checkbox = () => {
    return(
       <>
         <FormControl display={{base: "none", lg: "flex", md:"none", sm: "none"}} position={{md: "fixed", lg: "fixed", xl: "fixed"}} maxWidth="450px" flexDirection="column" width="350px" height="100vh" borderRight="1px solid #CCC" paddingTop="25px" marginLeft="38px" paddingRight="20px"  borderRightColor="blackAlpha.100">
        <Text fontSize="10px" textTransform="uppercase" marginBottom="15px  " color="#8C949C">Academy categories</Text>
            <Stack display="flex" spacing="5" flexDir="column" padding="0 0">
                {academyCheckbox.map((item)=>(
                    <CheckboxItem
                        item={item}
                     />
                ))}
            </Stack>     
            <Stack marginBottom="30px">
                <FormHelperText marginTop="40px" marginBottom="10px">SORT BY DATE</FormHelperText>
                <Select bgColor="blackAlpha.200" marginBottom="20px" variant="outline" >
                    <option value="New">Newest First</option>
                </Select>
            </Stack>
            <Stack marginBottom="30px">
            <FormHelperText marginBottom="10px" textTransform="uppercase" >sort by course length</FormHelperText>
                <Select bgColor="blackAlpha.200" marginBottom="20px" variant="outline">
                    <option value="Less than 10 minutes ">Less than 10 minutes $</option>
                </Select>
            </Stack>
        </FormControl>
       </>
    )
}

export default Checkbox;