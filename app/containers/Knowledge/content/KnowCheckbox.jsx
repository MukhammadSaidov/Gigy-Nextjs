import React from "react";
import { Stack, Text } from "@chakra-ui/layout";
import KnowledgeInfo from '../../../../fake_api/KnowledgeBase.json'
import { FormControl} from "@chakra-ui/form-control";
import CheckboxItem from '../../../components/CheckBoxes/Checkbox'
 
const KnowCheckbox = () => {
    return (
       <>

         <FormControl position={{md: "fixed", lg: "fixed", xl: "fixed"}} d={{lg:"block", md:"none",sm:"none",base:"none",}} maxWidth={{lg: "350px", xl: "350px", md: "300px", sm: "0px"}} flexDirection="column" width={{lg: "400px", xl: "450px"}} height="100vh" borderRight="1px solid #CCC" paddingTop="35px" marginLeft="45px" paddingRight="20px"  borderRightColor="blackAlpha.100">
            <Text fontSize="10px" textTransform="uppercase" marginBottom="15px  " color="#8C949C">knowledge base categories</Text>
                <Stack display="flex" spacing="5" flexDir="column" padding="0 0">
                    {KnowledgeInfo.map((item)=>(
                        <CheckboxItem
                            item={item}
                        />
                    ))}
                </Stack>
        </FormControl>

       </>
    )
}

export default KnowCheckbox;