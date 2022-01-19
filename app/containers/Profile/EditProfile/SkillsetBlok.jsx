import { Box, Container , Text , Stack} from "@chakra-ui/layout";
import React from "react";
import CustomCheckbox from "../../../components/CheckBoxes/Checkbox";
import DataCheckbox from '../../../../fake_api/EditProfile.jsx/CheckboxItem.json'
import { useState } from "react";
import FormInput from "../../../components/FormAddNewPost/FormInput";
import AddedInput from "../../../components/FormAddNewPost/AddedInput";
import { v4 as uuidv4 } from 'uuid';

const SkillsetAndSubscriptions =({display})=>{

    const [skillset, setSkillset] = useState({type:'' , id:'' });
    const [skillsetData, setSkillsetData] = useState([]);
    
    const DeleteButton = ( id) => {
        setSkillsetData(skillsetData.filter((item) => item.id != id))
    }

    const handleSkillsetChange =(event)=>{ setSkillset({type:event.target.value , id:uuidv4()})}

    const handleSkillsetSubmit =(event)=>{
        event.preventDefault();
        setSkillsetData([...skillsetData , skillset])
        setSkillset({ type: "", id: "" })
    }
    
    const Skill =()=>{
        return(
            <Container>
                {skillsetData.map((item)=>(<AddedInput handleDelete={DeleteButton} id={item.id} text={item.type}/>))}
            </Container>
        )
    }
   

    return(

        <>

            <Box d={display} >

                <Box m='3vh 0px' d='flex' p='1vw'>
                    
                    <Box w={{lg:'200px',xl:'220px'}}>
                        <Text cursor='default' >Skillset</Text>
                        <Text cursor='default'  fontSize='15px' mt='10px' color='#8C949C'>Select your skillset. This personalizes what kind of gigs you apply for. You can select a maximum of 5 skills</Text>
                    </Box>

                    <Box pl='2vw'>
                        <Text cursor='default'  fontSize='15px' color='#8C949C'>SKILLSET</Text>
                        <Container>
                            <FormInput
                                handleChange={handleSkillsetChange}
                                handleSubmit={handleSkillsetSubmit}
                                type='text'
                                placeholder='Add skillset'
                                typeValue={skillset.type}
                            />
                        </Container>
                        <Skill/>
                        
                    </Box>
                </Box>

                <Text  w="100%" h= "0.7px" backgroundColor="#DDE2E5"  ></Text>

                <Box  mt='3vh' d='flex' pt='1vw' pl='1vw'>

                    <Box w={{lg:'200px',xl:'220px'}}>
                        <Text cursor='default' >Subscriptions</Text>
                        <Text cursor='default'  fontSize='15px' mt='10px' color='#8C949C'>Select your subscriptions. This personalizes what kind of mails and alerts you get from Gigy</Text>
                    </Box>

                    <Stack spacing="5" pl='2vw'>
                        {DataCheckbox.map((item)=>
                            <CustomCheckbox
                            item={item}
                            />
                        )}
                        
                    </Stack>

                </Box>
            </Box>
        </>
    )
}
export default SkillsetAndSubscriptions;