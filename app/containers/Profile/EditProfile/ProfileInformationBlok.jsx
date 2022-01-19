import { Box, Container , Text , Link} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import React from "react";
import {ArrowUpIcon } from "@chakra-ui/icons";
import { Select } from "@chakra-ui/react"
import { Input } from "@chakra-ui/input";
import FormInput from "../../../components/FormAddNewPost/FormInput";
import AddedInput from "../../../components/FormAddNewPost/AddedInput";
import { useState } from "react";
import { CheckIcon} from '@chakra-ui/icons'
import { Icon } from "@chakra-ui/icon";
import { v4 as uuidv4 } from 'uuid';



const PersonalProfileInformation =({display})=>{
    

    const Email =()=>{
        return(
            <Container>
                {emailData.map((item)=>(<AddedInput handleDelete={handleEmailDelete} id={item.id} text={item.type}/>))}
            </Container>
        )
    }
    const Number =()=>{
        return(
            <Container>
                {numberData.map((item)=>(<AddedInput handleDelete={handleNumberDelete} id={item.id} text={item.type}/>))}
            </Container>
        )
    }
    const Education =()=>{
        return(
            <Container>
                {educationData.map((item)=>(<AddedInput handleDelete={handleEducationDelete} id={item.id} text={item.type}/>))}
            </Container>
        )
    }
    const Language =()=>{
        return(
            <Container>
                {languageData.map((item)=>(<AddedInput handleDelete={handleLanguageDelete} id={item.id} text={item.type}/>))}
            </Container>
        )
    }

    
    // NEW STATE EMAIL
    const [email, setEmail] = useState({type:'' , id:''});
    // NEW STATE NUMBER
    const [number, setNumber] = useState({type:'' , id:''});
    // NEW STATE EDUCATION
    const [education, setEducation] = useState({type:'' , id:''});
    // NEW STATE LANGUAGE
    const [language, setLanguage] = useState({type:'' , id:''});


    
    // LIST NEW STATE EMAIL
    const [emailData, setEmailData] = useState([]);
    // LIST NEW STATE NUMBER
    const [numberData, setNumberData] = useState([]);
    // LIST NEW STATE EDUCATION
    const [educationData, setEducationData] = useState([]);
    // LIST NEW STATE LANGUAGE
    const [languageData, setLanguageData] = useState([]);

    

    // CHANGE NEW STATE EMAIL
    const handleEmailChange =(event)=>{ setEmail({type:event.target.value , id:uuidv4()})}
    // CHANGE NEW STATE NUMBER
    const handleNumberChange =(event)=>{ setNumber({type:event.target.value , id:uuidv4()})}
    // CHANGE NEW STATE EDUCATION
    const handleEducationChange =(event)=>{ setEducation({type:event.target.value , id:uuidv4()})}
    // CHANGE NEW STATE LANGUAGE
    const handleLanguageChange =(event)=>{ setLanguage({type:event.target.value , id:uuidv4()})}


    // PUSH NEW STATE EMAIL
    const handleEmailSubmit =(event)=>{
        event.preventDefault();
        setEmailData([...emailData , email])
        setEmail({ type: "", id: "" })
    }
    // PUSH NEW STATE NUMBER
    const handleNumberSubmit =(event)=>{
        event.preventDefault();
        setNumberData([...numberData , number])
        setNumber({ type: '', id: '' })
    }
    // PUSH NEW STATE EDUCATION
    const handleEducationSubmit =(event)=>{
        event.preventDefault();
        setEducationData([...educationData , education])
        setEducation({ type: "", id: "" })
    }
    // PUSH NEW STATE LANGUAGE
    const handleLanguageSubmit =(event)=>{
        event.preventDefault();
        setLanguageData([...languageData , language])
        setLanguage({ type: "", id: "" })
    }


     // DELETE EMAIL STATE
     const handleEmailDelete =(itemId)=>{
        setEmailData(emailData.filter((item) => item.id !== itemId))
    }
    // DELETE NUMBER STATE
    const handleNumberDelete =(itemId)=>{
        setNumberData(numberData.filter((item) => item.id !== itemId))
    }
    // DELETE EDUCATION STATE
    const handleEducationDelete =(itemId)=>{
        setEducationData(educationData.filter((item) => item.id !== itemId))
    }
    // DELETE LANGUAGE STATE
    const handleLanguageDelete =(itemId)=>{
        setLanguageData(languageData.filter((item) => item.id !== itemId))
    }

        //  NEW NAME STATE
    const [name, setName] = useState();
    const [nameData, setNameData] = useState('Joseph');
    const handleNewNameChange =(event)=>{setName(event.target.value)}
    const handleNewNameSubmit =(event)=>{event.preventDefault();setNameData('');setNameData(name);setName('')}
        //  LAST NEW NAME STATE
    const [lastName, setLastName] = useState();
    const [lastNameData, setLastNameData] = useState('Abia');
    const handleNewLastNameChange =(event)=>{setLastName(event.target.value)}
    const handleNewLastNameSubmit =(event)=>{event.preventDefault();setLastNameData('');setLastNameData(lastName);setLastName('');}

    return(

        <>
            <Box d={display}>

                <Box  d='flex' mb='1vw' p='1vw'>

                    <Box w={{lg:'200px',xl:'220px'}}>
                        <Text cursor='default' >Name</Text>
                        <Text cursor='default'  fontSize='15px' mt='10px' color='#8C949C'>Update how your name is displayed on your profile</Text>
                    </Box>

                    <Box  pl='2vw'>

                        <Box >
                            <Text d='flex' alignItems='center' cursor='default'  fontSize='15px'  color='#8C949C'>FiRST NAME <Text pl='0.5vw' cursor='default'  fontSize='18px'  color='#603E94' >{nameData}</Text></Text>
                            <form onSubmit={handleNewNameSubmit}>
                                <Container mt='0.5vw' d='flex' alignItems='center'>
                                    <Input maxLength='10' required onChange={handleNewNameChange} value={name} placeholder='ADD  FIRST NAME'  backgroundColor='#F5F4F6' mt='10px' w='19vw' ml='-15px'></Input>
                                    <button style={{ color:'green.800', borderRadius:'5px' , padding:'1px' ,marginTop:'10px', height:'40px' , width:'60px', border:'0.7px solid #DDE2E5' , marginLeft:'10px' , backgroundColor:'#EDF2F7'}} ><Icon as={CheckIcon} color='green.800' /></button>
                                </Container>
                            </form>
                        </Box>

                        <Box mt='1vw'>
                            <Text d='flex' alignItems='center' cursor='default'  fontSize='15px' color='#8C949C'>LAST NAME <Text pl='0.5vw' cursor='default'  fontSize='18px'  color='#603E94' >{lastNameData}</Text></Text>
                            <form onSubmit={handleNewLastNameSubmit}>
                                <Container mt='0.5vw' d='flex' alignItems='center'>
                                    <Input maxLength='10' required onChange={handleNewLastNameChange} value={lastName} placeholder='ADD  LAST NAME'  backgroundColor='#F5F4F6' mt='10px' w='19vw' ml='-15px'/>
                                    <button style={{ color:'green.800', borderRadius:'5px' , padding:'1px' ,marginTop:'10px', height:'40px' , width:'60px', border:'0.7px solid #DDE2E5' , marginLeft:'10px' , backgroundColor:'#EDF2F7'}} ><Icon as={CheckIcon} color='green.800' /></button>
                                </Container>
                            </form>
                        </Box>
                    </Box>
                </Box>

                <Text  w="100%" h= "0.7px" backgroundColor="#DDE2E5"  ></Text>

                <Box m='3vh 0px 1vw 0vw' d='flex' p='1vw' >
                    <Box w={{lg:'200px',xl:'220px'}}>
                        <Text cursor='default' >Email Address</Text>
                        <Text cursor='default'  fontSize='15px' mt='10px' color='#8C949C'>LInk one or more Email Addresses to your account</Text>
                    </Box>
                    <Box  pl='2vw'>
                        <Text cursor='default'  fontSize='15px' color='#8C949C'>EMAIL ADDRESS</Text>
                        <Container>
                            <FormInput
                                handleChange={handleEmailChange}
                                handleSubmit={handleEmailSubmit}
                                type='email'
                                placeholder='Add Email Address'
                                typeValue={email.type}
                            />
                        </Container>
                        <Email/>
                        

                    </Box>
                </Box>

                <Text  w="100%" h= "0.7px" backgroundColor="#DDE2E5"  ></Text>

                <Box m='3vh 0px'  d='flex' p='1vw'>
                    <Box w={{lg:'200px',xl:'220px'}}>
                        <Text cursor='default' >Profile Image/Avatar</Text>
                        <Text cursor='default'  fontSize='15px' mt='10px' color='#8C949C'>Add, edit or remove the image used for your avatar. Supports SVG, PNG, JPG or GIF</Text>
                    </Box>
                    <Box w='24.7vw'  pl='2vw' d='flex' alignItems='center'>
                        <Image mr='1vw' borderRadius='100%' h='50px' w='50px' src='https://uprostim.com/wp-content/uploads/2021/03/image096-74.jpg' />
                        <Box backgroundColor='#F5F4F6' borderRadius='3%' p='1vw' justifyContent='center' textAlign='center'>
                            <ArrowUpIcon  w='25px' h='25px' alignItems='center' color='#603E94'/>
                            <Text cursor='default'  alignItems='center' fontSize='15px' ><Link fontWeight='700' fontSize='15px' color='#603E94'>Click here </Link> to upload files or drag and drop to upload</Text>
                        </Box>
                    </Box>
                </Box>

                <Text  w="100%" h= "0.7px" backgroundColor="#DDE2E5"  ></Text>

                <Box m='3vh 0px'  d='flex' p='1vw'>
                    <Box w={{lg:'200px',xl:'220px'}}>
                        <Text cursor='default' >Location</Text>
                        <Text cursor='default'  fontSize='15px' mt='10px' color='#8C949C'>Easily find gigs and jobs in and around your location or residence</Text>
                    </Box>
                    <Box pl='2vw'>
                        <Text cursor='default'  fontSize='15px' color='#8C949C'>LOCATION</Text>
                        <Select backgroundColor='#F5F4F6' fontSize='md' w='22.7vw' mt='15px' >
                            <option>Option 1</option>
                            <option>Option 2</option>
                            <option>Option 3</option>
                        </Select>
                    </Box>
                </Box>

                <Text   w="100%" h= "0.7px" backgroundColor="#DDE2E5"  ></Text>

                <Box m='3vh 0px' d='flex' p='1vw'>
                    <Box w={{lg:'200px',xl:'220px'}}>
                        <Text cursor='default' >Mobile Contact</Text>
                        <Text cursor='default'  fontSize='15px' mt='10px' color='#8C949C'>Add a mobile number to your account for SMS based notifications and multi-factor authentication</Text>
                    </Box>
                    <Box pl='2vw'>
                        <Text cursor='default'  fontSize='15px' color='#8C949C'>MOBILE NUMBER</Text>
                        <Container>
                            <FormInput
                                handleChange={handleNumberChange}
                                handleSubmit={handleNumberSubmit}
                                type='number'
                                placeholder='Add mobile Contact'
                                typeValue={number.type}
                            />
                        </Container>
                        <Number/>
                        
                        
                    </Box>
                </Box>

                <Text  w="100%" h= "0.7px" backgroundColor="#DDE2E5"  ></Text>

                <Box m='3vh 0px' d='flex' p='1vw'>
                    <Box w={{lg:'200px',xl:'220px'}}>
                        <Text cursor='default' >Education</Text>
                        <Text cursor='default'  fontSize='15px' mt='10px' color='#8C949C'>Update the most relevant or recent academic background</Text>
                    </Box>
                    <Box pl='2vw'>
                        <Text cursor='default'  fontSize='15px' color='#8C949C'>EDUCATION</Text>
                        <Container>
                            <FormInput
                                handleChange={handleEducationChange}
                                handleSubmit={handleEducationSubmit}
                                type='text'
                                placeholder='Add Education'
                                typeValue={education.type}
                            />
                        </Container>
                        <Education/>
                        
                    </Box>
                </Box>

                <Text  w="100%" h= "0.7px" backgroundColor="#DDE2E5"  ></Text>

                <Box m='3vh 0px' d='flex' mb='10vh' p='1vw'>
                    <Box w={{lg:'200px',xl:'220px'}}>
                        <Text cursor='default' >Language</Text>
                        <Text cursor='default'  fontSize='15px' mt='10px' color='#8C949C'>Select your localization language preference</Text>
                    </Box>
                    <Box pl='2vw'>
                        <Text cursor='default'  fontSize='15px' color='#8C949C'>LANGUAGES</Text>
                        <Container>
                            <FormInput
                                handleChange={handleLanguageChange}
                                handleSubmit={handleLanguageSubmit}
                                type='text'
                                placeholder='Add Language'
                                typeValue={language.type}
                            />
                        </Container>
                        <Language/>
                    </Box>
                </Box>

            </Box>
        </>
    )
}
export default PersonalProfileInformation;