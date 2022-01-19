import React, { useState } from 'react';
import { Container, Box, Text, Link } from '@chakra-ui/layout';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { ViewOffIcon, ViewIcon } from '@chakra-ui/icons';
import NextLink from "next/link";
import { useRouter } from 'next/router';


const LogInPage = () => {
    
    const router = useRouter()

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const [data, setData] = useState([]);

    const handleSubmit =(event)=>{
        event.preventDefault();
        setData([...data , {email , password}])
        setEmail('')
        setPassword('')
        router.push('/me/overview')
        console.log(data);
    }

    
    const handleEmailChange =(event)=>{ setEmail(event.target.value)}
    const handlePasswordChange =(event)=>{ setPassword(event.target.value)}


    const [stateInput1, setStateInput1] = React.useState(false)     
    const handleClick1 = () => setStateInput1(!stateInput1)           


    return (
        <Box maxW={{xl:"45vw", lg:"87vw", md:"87vw", sm:"87vw", base:"87vw"}} gridGap="3vh" m="0 auto" d="flex" flexDir="column" alignItems="center" textAlign="center" >
            <Text fontSize={{xl:"45px", lg:"40px", md:"30px", sm:"30px", base:"30px"}} color="#17191C" fontWeight={{xl:"700", lg:"600", md:"600", sm:"600", basse:"600"}} >Welcome!</Text>
            <Text w={{xl:"70%", lg:"70%", md:"80%", sm:"80%", base:"80%"}} fontSize={{xl:"19px", lg:"19px", md:"15px", sm:"15px", base:"15px"}} color="#495057" >Access your Gigy account by providing the Email address you signed up with and your password.</Text>
            <form onSubmit={handleSubmit}  style={{display:"flex", flexDirection:"column", marginTop:"2vh", gridGap:"5vh", width:"100%"}}>
                <Container paddingStart="0" paddingInlineEnd="0" id="" maxW="none" mt='0.5vw'>
                    <Text d='flex' textTransform="uppercase" alignItems='center' cursor='default'  fontSize='15px'  color='#8C949C'>EMAIL ADDRESS</Text>
                    <Input value={email} onChange={handleEmailChange} height="48px" backgroundColor='#F5F4F6' type="email" required maxW="none" mt='10px' w='100%' />
                </Container>

                <Container paddingStart="0" paddingInlineEnd="0" id="" maxW="none" mt='0.5vw'>
                    <Text d='flex' textTransform="uppercase" alignItems='center' cursor='default'  fontSize='15px'  color='#8C949C'>PASSWORD</Text>
                    <InputGroup>
                    <Input height="48px" value={password} onChange={handlePasswordChange} backgroundColor="#F5F4F6"  d="flex" justifyContent="space-between" type={stateInput1 ? "text" : "password"} required maxW="none" mt='' w='100%' />
                        <InputRightElement height="48px" width="4.5rem">
                            <Button colorScheme="none" _focus h="1.75rem" color="black"  marginTop="" onClick={handleClick1}>{stateInput1 ? <ViewOffIcon/> : <ViewIcon/>}</Button>
                        </InputRightElement>
                    </InputGroup>
                    <Box d="flex" justifyContent="flex-end" >
                        <Link color="#495057" textDecor="underline" fontSize={{xl:"19px", lg:"19px", md:"15px", sm:"15px", base:"15px"}} href="">Forgot your Password?</Link>
                    </Box>
                </Container>                

                <button style={{height:"5vh", marginTop:'1vw', fontWeight:"400", backgroundColor:"rgba(96, 62, 148, 1)", textTransform:"uppercase", fontSize:"21px", borderRadius:"4px", color:"white"}} >
                    log in
                </button>

            </form>

            <NextLink href="/signup-page" color="#495057" textDecor="underline" fontSize={{xl:"19px", lg:"19px", md:"15px", sm:"15px", base:"15px"}} >
                Don’t have an account? Sign Up instead
            </NextLink>

        </Box>
    );
};


export default LogInPage; 