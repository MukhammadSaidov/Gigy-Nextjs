import React from 'react';
import { Box } from '@chakra-ui/layout';
import Checkbox from '../Academy/content/Checkbox'
import AcademyInfo from './content/AcademyInfo';

const Academy = () => {
    return (
        <>
        <Box  display="flex" >
            <Checkbox />
            <AcademyInfo />
        </Box>
        </>
    );
};



export default Academy;