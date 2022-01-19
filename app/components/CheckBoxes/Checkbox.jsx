import React, {useState} from "react";
import { Checkbox } from "@chakra-ui/checkbox";
import { Text, Badge, Box } from "@chakra-ui/layout";

const CustomCheckbox = (props) => {
    const [ checkedActive, setChecked ] = useState(true)
    
    return(
        <Box p='0px' m='0px' d='flex' w='auto' >
            <Checkbox 
            id={props.item.id} 
            zIndex="1"
            onChange={() => {if(checkedActive == true){setChecked(false)} else setChecked(true)}} 
            checked={checkedActive == true ? true : false} 
            size="lg" colorScheme="purple"
            mr='10px'
            borderColor='rgba(96, 62, 148, 0.5)'
            >
            <Box  d='flex' justifyContent="space-between"> 
                <Text pl='15px' w={{xl:"276px",lg:'250px'}} id={props.item.id} color={checkedActive == true ? 'gray': 'purple'}>
                    {props.item.job}
                </Text>
                <Badge alignItems="flex-end" colorScheme={props.item.count >= 0 ? 'gray': ''}  id={props.item.id}>
                    <Text color={checkedActive == true ? 'gray': 'purple'} >
                        {props.item.count}    
                    </Text>
                </Badge>
            </Box>
            </Checkbox>
        </Box>
    )
}

export default CustomCheckbox