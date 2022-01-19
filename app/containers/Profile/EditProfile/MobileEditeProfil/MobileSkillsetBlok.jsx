import { Box, Container , Text , Stack} from "@chakra-ui/layout";
import React from "react";
import { useState } from "react";

import CustomCheckbox from "../../../../components/CheckBoxes/Checkbox";
import DataCheckbox from '../../../../../fake_api/EditProfile.jsx/CheckboxItem.json'
import FormInput from "../../../../components/FormAddNewPost/FormInput.jsx";
import AddedInput from "../../../../components/FormAddNewPost/AddedInput.jsx";

import { v4 as uuidv4 } from 'uuid';


const MobileSkillsetAndSubscriptions =({display})=>{

    const Skill =()=>{
        return(
            <Container>
                {skillsetData.map((item)=>(<AddedInput handleDelete={DeleteButton} id={item.id} text={item.type}/>))}
            </Container>
        )
    }

    const [skillset, setSkillset] = useState({type:'' , id:'' });
    const [skillsetData, setSkillsetData] = useState([]);

    const handleSkillsetChange =(event)=>{ setSkillset({type:event.target.value , id:uuidv4()})}

    const handleSkillsetSubmit =(event)=>{
        event.preventDefault();
        setSkillsetData([...skillsetData , skillset])
        setSkillset({ type: "", id: "" })
    }
    const handleSkillsetDelete =(id)=>{
        setSkillsetData(skillsetData.filter((item) => item.id != id))
    }

    return(

        <>

            <Box d={display} w='99vw' alignItems='center' justifyContent='center'>
                <Box m='3vh 0px' p='2vw' >
                    <Box >
                        <Text cursor='default' >Skillset</Text>
                        <Text cursor='default'  fontSize='15px' mt='8px' color='#8C949C'>Select your skillset. This personalizes what kind of gigs you apply for. You can select a maximum of 5 skills</Text>
                    </Box>
                    <Box mt='3vw'>
                        <Text cursor='default'  fontSize='15px' color='#8C949C'>SKILLSET</Text>
                        <Box ml='1.5vw'>
                            <FormInput
                                handleChange={handleSkillsetChange}
                                handleSubmit={handleSkillsetSubmit}
                                type='text'
                                placeholder='Add skillset'
                                typeValue={skillset.type}
                                width='100%'
                            />
                            <Skill/>
                        </Box>
                    </Box>
                </Box>

                <Text  w="100%" h= "0.7px" backgroundColor="#DDE2E5"  ></Text>

                <Box m='3vh 0px' p='2vw'>
                    <Box mb={{base:'20px',sm:'2vw',md:'2vw'}}>
                        <Text cursor='default' >Subscriptions</Text>
                        <Text cursor='default'  fontSize='15px' mt='10px' color='#8C949C'>Select your subscriptions. This personalizes what kind of mails and alerts you get from Gigy</Text>
                    </Box>
                    <Stack spacing="5" ml='0.2vw'>
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
export default MobileSkillsetAndSubscriptions;