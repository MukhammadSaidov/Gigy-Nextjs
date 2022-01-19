import React from "react";
import {Alert,AlertIcon,AlertTitle } from "@chakra-ui/react"
import { Box, Text,HStack } from "@chakra-ui/layout";
import { InputGroup , InputRightElement, Input } from "@chakra-ui/input";
import { Button  } from "@chakra-ui/button";
import { CloseButton } from "@chakra-ui/close-button";
import { ViewIcon , ViewOffIcon } from "@chakra-ui/icons";
import { RadioGroup, Radio } from "@chakra-ui/radio";


const MobileSecurity =({display})=>{
    
    const [stateInput1, setStateInput1] = React.useState(false)     //  states show hide password
    const [stateInput2, setStateInput2] = React.useState(false)     //  states show hide password
    const [stateInput3, setStateInput3] = React.useState(false)     //  states show hide password
    const handleClick1 = () => setStateInput1(!stateInput1)         //  states show hide password
    const handleClick2 = () => setStateInput2(!stateInput2)         //  states show hide password
    const handleClick3 = () => setStateInput3(!stateInput3)         //  states show hide password
    
    
    
    const [oldPassword, setOldPassword] = React.useState('12345678')                   //  Old password state

    const [typeOldPassword, setTypeOldPassword] = React.useState()                     //  password states
    const [newPassword1, setNldPassword1] = React.useState()                           //  password states
    const [newPassword2, setNldPassword2] = React.useState()                           //  password states                                             
                                                                                       
    const handleOldPasswordChange =(event)=>{ setTypeOldPassword(event.target.value)}  //  password change
    const handleNewPassword1Change =(event)=>{ setNldPassword1(event.target.value)}    //  password change
    const handleNewPassword2Change =(event)=>{ setNldPassword2(event.target.value)}    //  password change
    


    const [alertStatusError1, setAlertStatusError1] = React.useState('none')      //  alerts state
    const [alertStatusError2, setAlertStatusError2] = React.useState('none')      //  alerts state
    const [alertStatusError3, setAlertStatusError3] = React.useState('none')      //  alerts state
    const [alertStatusSuccess, setAlertStatusSuccess] = React.useState('none')    //  alerts state
    

    const [stateRadio, setStateRadio] = React.useState("SMS")            //  Radio state

    const handlePasswordSubmit =(event)=>{
        event.preventDefault();
        if( oldPassword === typeOldPassword){
            if(oldPassword != newPassword1){
                if(newPassword1 === newPassword2){
                    setOldPassword(newPassword1)
                    setTypeOldPassword('')
                    setNldPassword1('')
                    setNldPassword2('')
                    setAlertStatusSuccess('flex')
                    setTimeout(() => setAlertStatusSuccess('none'), 5000)

                }else setNldPassword1('') , setNldPassword2('') ,setAlertStatusError3('flex')  ,setTimeout(() => setAlertStatusError3('none'), 5000)
            }else setNldPassword1('') , setNldPassword2('') ,setAlertStatusError2('flex') ,setTimeout(() => setAlertStatusError2('none'), 5000)
        }else setTypeOldPassword('') , setAlertStatusError1('flex') ,setTimeout(() => setAlertStatusError1('none'),5000)
    }
    
    return(
        
        <Box d={display} w='100vw' p='0px 2vw ' >

            <Alert d={alertStatusError1} status="error"  >
                <AlertIcon />
                <AlertTitle mr={2}>Old password does not match with new!</AlertTitle>
                <CloseButton onClick={()=>{setAlertStatusError1('none')}} position="absolute" right="8px" top="8px" />
            </Alert>
            <Alert d={alertStatusError2} status="error">
                <AlertIcon />
                <AlertTitle mr={2}>The old password must not be the same as the new password!</AlertTitle>
                <CloseButton onClick={()=>{setAlertStatusError2('none')}} position="absolute" right="8px" top="8px" />
            </Alert>
            <Alert d={alertStatusError3} status="error">
                <AlertIcon />
                <AlertTitle mr={2}>New passwords do not match!</AlertTitle>
                <CloseButton onClick={()=>{setAlertStatusError3('none')}} position="absolute" right="8px" top="8px" />
            </Alert>

            <Alert d={alertStatusSuccess} status="success">
                <AlertIcon />
                <AlertTitle mr={2}>Password changed!</AlertTitle>
                <CloseButton onClick={()=>{setAlertStatusSuccess('none')}} position="absolute" right="8px" top="8px" />
            </Alert>

            <Box m='3vh 0px'  >

                <Box mb='3vw'>
                    <Text cursor='default' >Change Password</Text>
                    <Text cursor='default'  fontSize='15px' mt='8px' color='#8C949C'>Keep your password safe from breach by changing it regularly</Text>
                </Box>

                <Box >
                    <Text cursor='default'  fontSize='15px' color='#8C949C'>OLD PASSWORD</Text>
                    <Box transition='800ms ease-in-out'>
                        <form  onSubmit={handlePasswordSubmit}>
                            <InputGroup mt='10px'  >
                                <Input onClick={()=>{setAlertStatusSuccess('none') , setAlertStatusError1('none') }} value={typeOldPassword} onChange={handleOldPasswordChange} pr="4.5rem" border='3px solid #603E94' type={stateInput1 ? "text" : "password"} placeholder="Old password"  minlength='8' required/>
                                <InputRightElement width="4.5rem">
                                    <Button h="1.75rem" size="sm" onClick={handleClick1}>{stateInput1 ? <ViewOffIcon/> : <ViewIcon/>}</Button>
                                </InputRightElement>
                            </InputGroup>
                            
                            <Text cursor='default' mt='20px'  fontSize='15px' color='#8C949C'>NEW PASSWORD</Text>

                            <InputGroup mt='10px'  >
                                <Input onClick={()=>{setAlertStatusSuccess('none') , setAlertStatusError2('none') , setAlertStatusError3('none')}} value={newPassword1} onChange={handleNewPassword1Change} pr="4.5rem" border='3px solid #603E94' type={stateInput2 ? "text" : "password"} placeholder="New password" minlength='8' required/>
                                <InputRightElement width="4.5rem">
                                    <Button h="1.75rem" size="sm" onClick={handleClick2}>{stateInput2 ? <ViewOffIcon/> : <ViewIcon/>}</Button>
                                </InputRightElement>
                            </InputGroup>

                            <Text cursor='default' mt='20px'  fontSize='15px' color='#8C949C'>CONFIRM NEW PASSWORD</Text>
                            
                            <InputGroup mt='10px'  >
                                <Input onClick={()=>{setAlertStatusSuccess('none') , setAlertStatusError2('none') , setAlertStatusError3('none') }} value={newPassword2} onChange={handleNewPassword2Change} pr="4.5rem" border='3px solid #603E94' type={stateInput3 ? "text" : "password"} placeholder="Confirm new password" minlength='8' required/>
                                <InputRightElement width="4.5rem">
                                    <Button h="1.75rem" size="sm" onClick={handleClick3}>{stateInput3 ? <ViewOffIcon/> : <ViewIcon/>}</Button>
                                </InputRightElement>
                            </InputGroup>

                            <button style={{borderRadius:'5px' , padding:'5px', width:'100%' ,marginTop:'20px', height:'auto' , border:'3px solid #BDA9DA' ,  backgroundColor:'#BDA9DA' }} >CHANGE PASSWORD</button>

                        </form>     
                    </Box>
                    
                </Box>
            </Box>

            <Text  w="100%" h= "0.7px" backgroundColor="#DDE2E5"  ></Text>

            <Box m='3vh 0px'>
                <Box mb='3vw'>
                    <Text cursor='default' >Subscriptions</Text>
                    <Text cursor='default'  fontSize='15px' mt='10px' color='#8C949C'>Select your subscriptions. This personalizes what kind of mails and alerts you get from Gigy</Text>
                </Box>
                <Box>
                    <Box>
                        <RadioGroup onChange={setStateRadio} defaultValue={stateRadio} >
                            <HStack  spacing="24px"  >
                                <Radio value="SMS" >SMS</Radio>
                                <Radio value="Email" >Email</Radio>
                            </HStack>
                        </RadioGroup>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}
export default MobileSecurity;