import { Box } from '@chakra-ui/layout'
import React from 'react'
import Header from './Head'
import Footer from './Footer'
import { PageTransitionVariant } from "../../../themes/framerVariants.js";
import { motion } from "framer-motion";

const LayoutWebsite = (props) => {
  
    return (
        <>
            <Header/>
                <Box 
                m={{base:'80px 0px',sm:'95px 0px',md:'110px 0px',md:'120px 0px', xl:'120px 0px'}}
                transition="450ms ease-in-out"
                as={motion.main}
                exit="exit"
                initial="hidden"
                animate="enter"
                variants={PageTransitionVariant}
                >
                    {props.children}
                </Box>
            <Footer/>

        </>
    )
}

export default LayoutWebsite
