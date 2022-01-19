import React from "react";
import { Stack } from "@chakra-ui/layout";
import data from '../../../../fake_api/Checkboxes.json'
import { FormControl, FormHelperText } from "@chakra-ui/form-control";
import { Select } from "@chakra-ui/select";
import CustomCheckbox from "../../../components/CheckBoxes/Checkbox";

 
const CheckboxCont = () => {

    return(
        <FormControl w='500px' flexDirection="column" h="100vh" borderRight="1px solid #DDE2E5">
            <Stack display="flex" spacing="5" flexDir="column" padding="25">
                {data.map((item)=>(
                    <CustomCheckbox
                    item={item}
                    />
                ))}
            </Stack>   
            <Stack marginBottom="30px">
                <FormHelperText marginTop="20px" marginBottom="10px">SORT BY DATE</FormHelperText>
                <Select bgColor="blackAlpha.200" marginBottom="20px" variant="outline" >
                    <option value="New">Newest First</option>
                    <option value="Old">Oldest First</option>
                </Select>
            </Stack>
            <Stack marginBottom="30px">
            <FormHelperText marginBottom="10px" >SORT BY EARNINGS</FormHelperText>
                <Select bgColor="blackAlpha.200" marginBottom="20px" variant="outline">
                    <option value="100">100$</option>
                    <option value="200">200$</option>
                    <option value="300">300$</option>
                </Select>
            </Stack>
            <Stack marginBottom="30px">
                <FormHelperText marginBottom="10px" >JOB/GIG LOCATION</FormHelperText>
                <Select bgColor="blackAlpha.200" marginBottom="20px" variant="outline">
                    <option value="Madrid">Madrid</option>
                    <option value="Manchester">Manchester</option>
                    <option value="London">London</option>
                </Select>
            </Stack>
        </FormControl>
    )
}

export default CheckboxCont