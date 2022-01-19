import React from 'react';
import { Box, SimpleGrid, Text } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import Link from 'next/link';
import { Input, Textarea } from '@chakra-ui/react';


const ContactUsForm = (props) => {

    const [first, setFirst] = React.useState('');
    const [last, setLast] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [comment, setComment] = React.useState('');

    const [formsData, setFormsData] = React.useState([])

    const handleFirstChange =(event)=>{ setFirst(event.target.value)}
    const handleLastChange =(event)=>{ setLast(event.target.value)}
    const handleEmailChange =(event)=>{ setEmail(event.target.value)}
    const handlePhoneChange =(event)=>{ setPhone(event.target.value)}
    const handleCommentChange =(event)=>{ setComment(event.target.value)}

  

    const handleFormsSubmit =(event)=>{
        event.preventDefault();
        setFormsData([...formsData,{comment:comment,phone:phone,email:email,last:last,first:first}])
        setFirst(''),setLast(''),setEmail(''),setPhone(''),setComment('')

        console.log(formsData);
    }
    return (
        <Box d="flex" p={{xl:"80px 50px", lg:"70px 40px", md:"30px 20px", sm:"30px 20px", base:"30px 20px",}} boxShadow='0px 1px 20px 0px rgba(0, 0, 0, 0.1)' flexDir={{xl:"row", lg:"row", md:"column", sm:"column", base:"column"}} justifyContent="" >
            <Box d="flex" w={{xl:"30%", lg:"30%", md:"auto", sm:"auto", base:"auto",}} justifyContent="center" flexWrap="wrap" alignItems="" marginBottom={{xl:"0", lg:"0", md:"50px", sm:"50px", base:"50px"}} flexDir={{xl:"column", lg:"column", md:"row", sm:"row", base:"row"}} gridGap="50px" >
                <Box d="flex" textAlign={{xl:"start", lg:"start", md:"center", sm:"center", base:"center"}} flexDir="column" >
                    <Text fontWeight="500" fontSize={{xl:"25px", lg:"22px", md:"20px", sm:"20px", base:"20px"}} color="#495057" >Contact:</Text>
                    <Box cursor="pointer">
                        <Link href="#">
                            <Text fontWeight="400" fontSize={{xl:"20px", lg:"20px", md:"17px", sm:"17px", base:"17px"}} >{props.number}+665 0966 765</Text>
                        </Link>
                    </Box>
                    <Box cursor="pointer">
                        <Link href="#">
                            <Text fontWeight="400" fontSize={{xl:"20px", lg:"20px", md:"17px", sm:"17px", base:"17px"}} >{props.number2}+234 9032 3378</Text>
                        </Link>
                    </Box>
                </Box>
                <Box d="flex" w="auto" textAlign={{xl:"start", lg:"start", md:"center", sm:"center", base:"center"}} flexDir="column" >
                        <Text fontWeight="500" fontSize={{xl:"25px", lg:"22px", md:"20px", sm:"20px", base:"20px"}} color="#495057" >Email:</Text>
                    <Box cursor="pointer">
                        <Link href="#" >
                            <Text fontWeight="400" fontSize={{xl:"20px", lg:"20px", md:"17px", sm:"17px", base:"17px"}} >{props.email}support@gigy.com</Text>
                        </Link>
                    </Box>
                    <Box cursor="pointer">
                        <Link href="#">
                            <Text fontWeight="400" fontSize={{xl:"20px", lg:"20px", md:"17px", sm:"17px", base:"17px"}} >{props.email2}contact@gigy.com</Text>
                        </Link>
                    </Box>
                </Box>
                <Box w="" d="flex" justifyContent="" alignItems="center" >
                    <Box d="flex" flexDir="column" >
                        <Text fontWeight="500" fontSize={{xl:"25px", lg:"22px", md:"20px", sm:"20px", base:"20px"}} color="#495057" >Social Media</Text>
                        <Box d="flex" gridGap="7px" >
                            <Link href="#" >
                                <img style={{width:"25px"}} src="/Icon/socialIcons/linkedin.svg" alt="" />
                            </Link>
                            <Link href="#">
                                <img style={{width:"25px"}} src="/Icon/socialIcons/twitter.svg" alt="" />
                            </Link>
                            <Link href="#">
                                <img style={{width:"25px"}} src="/Icon/socialIcons/facebook.svg" alt="" />
                            </Link>
                            <Link href="#">
                                <img style={{width:"25px"}} src="/Icon/socialIcons/instagram.svg" alt="" />
                            </Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box w={{xl:"70%", lg:"70%", md:"auto", sm:"auto", base:"auto",}} >
                <Text d={{xl:"block", lg:"block", md:"none", sm:"none", base:"none"}} fontWeight="500" fontSize={{xl:"25px", lg:"22px", md:"20px", sm:"20px", base:"20px"}} color="#495057" >
                    Send us a message!
                </Text>
                <form onSubmit={handleFormsSubmit}>
                    <Box d="flex" bgColor="#FCFDFF" flexDir="column" gridGap="20px" >
                        <SimpleGrid w="100%" columns={{xl:"2", lg:"2", md:"0", sm:"0", base:"0",}} gridGap="20px" flexWrap="wrap"  >
                            <Input value={first} onChange={handleFirstChange} h="60px" type="text" border="1px solid #8C949C" placeholder="First Name" />
                            <Input value={last} onChange={handleLastChange} h="60px" type="text" border="1px solid #8C949C" placeholder="Last Name" />
                            <Input value={email} onChange={handleEmailChange} h="60px" type="email" border="1px solid #8C949C" placeholder="Email Address" />
                            <Input value={phone} onChange={handlePhoneChange} h="60px" type="number" border="1px solid #8C949C" placeholder="Phone Number" />
                        </SimpleGrid>
                        <Textarea value={comment} onChange={handleCommentChange} border="1px solid #8C949C" placeholder="Type message here..."  />
                        <Box d="flex" justifyContent="flex-end">
                            <Button type='submit' textTransform="uppercase" variant="unstyled" color="#fff" _hover={{bgColor:"#462579"}} bgColor="#603E94" width={{xl:"200px", lg:"200px", md:"100%", sm:"100%", base:"100%"}}>
                                send message
                            </Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    );
};

export default ContactUsForm;