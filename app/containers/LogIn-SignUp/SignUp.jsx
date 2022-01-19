import React, { useState } from 'react';
import {Box, Text, Link } from '@chakra-ui/layout';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import NextLink from "next/link";
import { useRouter } from 'next/router';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import { FormControl, FormHelperText } from '@chakra-ui/form-control';

const SignUpPage = () => {

    const router = useRouter()

    const [name, setName] = useState() 
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const [display, setDisplay] = useState('none')

    const [data, setData] = useState([]);
    
    const handleSubmit =(event)=>{
        event.preventDefault();
        if(password === confirmPassword){
            setData([...data, {name, email, password}])
            setName('')
            setEmail('')
            setPassword('')
            setConfirmPassword('')
            setDisplay('none')
            router.push('/login-page')
        } else {
            setDisplay('block')
        }
        console.log(data);
    }

    const handleEmailChange = (event) => {setEmail(event.target.value)}
    const handleNameChange = (event) => {setName(event.target.value)}
    const handlePasswordChange = (event) => {setPassword(event.target.value)}
    const handleConfirmPasswordChange = (event) => {setConfirmPassword(event.target.value)}

    console.log(data);

    const [stateInput1, setStateInput1] = React.useState(false)     
    const handleClick1 = () => setStateInput1(!stateInput1)         
    const [stateInput2, setStateInput2] = React.useState(false)     
    const handleClick2 = () => setStateInput2(!stateInput2)         
    

    return (
        <Box maxW={{xl:"45vw", lg:"87vw", md:"87vw", sm:"87vw", base:"87vw"}} gridGap="1vh" m="0 auto" d="flex" flexDir="column" alignItems="center" textAlign="center" >
            <Text fontSize={{xl:"45px", lg:"40px", md:"30px", sm:"30px", base:"30px"}} color="#17191C" fontWeight={{xl:"700", lg:"600", md:"600", sm:"600", basse:"600"}} >Create a free Gigy account today</Text>
            <Text mb='1vw' w={{xl:"50%", lg:"70%", md:"80%", sm:"80%", base:"80%"}} fontSize={{xl:"19px", lg:"19px", md:"15px", sm:"15px", base:"15px"}} color="#495057" >Get a Gigy account in 2 easy steps, fill out the form below and verify your Email address.</Text>
            <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", marginTop:"2vh", gridGap:"3vh", width:"100%"}}>

                <FormControl paddingStart="0" id="" maxW="none" paddingInlineEnd="0" >
                    <Text d='flex' textTransform="uppercase" alignItems='center' cursor='default'  fontSize='15px'  color='#8C949C'>first and last name</Text>
                    <Input height="48px" onChange={handleNameChange} value={name} backgroundColor='#F5F4F6' type="text" required maxW="none" w='100%' />
                </FormControl>

                <FormControl paddingStart="0" id="" maxW="none" paddingInlineEnd="0" >
                    <Text d='flex' textTransform="uppercase" alignItems='center' cursor='default'  fontSize='15px'  color='#8C949C'>EMAIL ADDRESS</Text>
                    <Input height="48px" onChange={handleEmailChange} value={email} backgroundColor='#F5F4F6' type="email" required maxW="none" w='100%' />
                </FormControl>

                <FormControl paddingStart="0" paddingInlineEnd="0" id="" maxW="none" >
                    <Text d='flex' textTransform="uppercase" alignItems='center' cursor='default'  fontSize='15px'  color='#8C949C'>PASSWORD</Text>
                    <InputGroup>
                    <Input height="48px" onChange={handlePasswordChange} value={password} backgroundColor='#F5F4F6' type={stateInput1 ? "text" : "password"} required maxW="none" w='100%' />
                        <InputRightElement height="48px" width="">
                            <Button _focus colorScheme="none" color="black" size="lg" onClick={handleClick1}>{stateInput1 ? <ViewOffIcon/> : <ViewIcon/>}</Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <FormControl paddingStart="0" paddingInlineEnd="0" id="" maxW="none">
                    <Text d='flex' textTransform="uppercase" alignItems='center' cursor='default'  fontSize='15px'  color='#8C949C'>CONFIRM PASSWORD</Text>
                    <InputGroup>
                    <Input height="48px" onChange={handleConfirmPasswordChange} value={confirmPassword} type={stateInput2 ? "text" : "password"} backgroundColor='#F5F4F6' required maxW="none" w='100%' />
                        <InputRightElement height="48px" d="flex" alignItems="center" justifyContent="center" width="">
                            <Button _focus colorScheme="none" color="black" size="lg" onClick={handleClick2}>{stateInput2 ? <ViewOffIcon/> : <ViewIcon/>}</Button>
                        </InputRightElement>
                    </InputGroup>
                    <FormHelperText d={display} color="red" textTransform="uppercase">passwords do not match</FormHelperText>
                </FormControl>

                <Text fontSize={{xl:"19px", lg:"19px", md:"15px", sm:"15px", base:"15px"}} color="#495057" >
                    By clicking the “Sign Up’ button, you are creating a Gigy Account and you agree to DoScouting’s <Link href="" color="#603E94" >Privacy Policy</Link> and <Link href="" color="#603E94" >Terms and Conditions</Link> 
                </Text>

                <button style={{height:"5vh", marginTop:'1vw', fontWeight:"400", backgroundColor:"rgba(96, 62, 148, 1)", textTransform:"uppercase", fontSize:"21px", borderRadius:"4px", color:"white"}} >
                    sign up
                </button>

            </form>

            <NextLink href="/login-page" color="#495057" textDecor="underline" fontSize={{xl:"19px", lg:"19px", md:"15px", sm:"15px", base:"15px"}} >
                Already have an account? Log In securely
            </NextLink>
        </Box>
    );
};

export default SignUpPage;