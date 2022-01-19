import React from "react";
import { Text, Box, Link } from "@chakra-ui/layout";


const ContactSupport  = () => {
    return (
       <>
         <Box display={{lg:"none", md:"block", sm:"flex", base:"flex"}} justifyContent="center" alignItems="center" flexDirection={{base: "column", sm: "column", md: "initial"}}  padding="35px 0">
            <Text  width="330px" height="30px" fontWeight="500" fontSize="14px" lineHeight="15px" color="#8C949C" marginTop="17px" >Feel free to reach out to our support team and get seamless and on-point customer service.</Text>
            
            <Box  marginTop="24px" marginBottom="10px" padding="20px 30px" width="330px" height="80px" border="1px solid #DDE2E5" borderRadius="4px">
                <Link href="https://whatsapp.com" target="_blank" display="flex" alignItems="center">
                    <Box>   
                        <img width="100%" height="100vh" src="/Icon/socialIcons/whatsapp.svg" alt="" />
                    </Box> {/* Social icons */}
                    <Box marginLeft="30px">
                        <Text fontWeight="600" fontSize="12px" marginBottom="2px" >Whatsapp</Text>
                        <Text fontWeight="400" fontSize="10px" color="#8C949C">Reach out to our support team via Whatsapp</Text>
                    </Box> {/* Social info  */}
                </Link>
            </Box> {/* Container Social icons */}

            <Box  marginTop="24px" marginBottom="10px" padding="20px 30px" width="330px" height="80px" border="1px solid #DDE2E5" borderRadius="4px">
                <Link href="https://messenger.com" target="_blank" display="flex" alignItems="center">
                    <Box>
                        <img width="100%" height="100vh" src="/Icon/socialIcons/messenger.svg" alt="" />
                    </Box> {/* Social icons */}
                    <Box marginLeft="30px">
                        <Text fontWeight="600" fontSize="12px" marginBottom="2px" >Messenger</Text>
                        <Text fontWeight="400" fontSize="10px" color="#8C949C">Reach out to our support team via Messenger</Text>
                    </Box> {/* Social info  */}
                </Link>
            </Box> {/* Container Social icons */}

            <Box  marginTop="24px" marginBottom="10px" padding="20px 30px" width="330px" height="80px" border="1px solid #DDE2E5" borderRadius="4px">
                <Link href="https://mail.ru" target="_blank" display="flex" alignItems="center">
                    <Box>
                        <img width="100%" height="100vh" src="/Icon/socialIcons/mail.svg" alt="" />
                    </Box> {/* Social icons */}
                    <Box marginLeft="30px">
                        <Text fontWeight="600" fontSize="12px" marginBottom="2px" >Send us an Email</Text>
                        <Text fontWeight="400" fontSize="10px" color="#8C949C">Our support team will get back to you ASAP</Text>
                    </Box> {/* Social info  */}
                </Link>
            </Box> {/* Container Social icons */}
         </Box>
       </>
    )
}

export default ContactSupport ;