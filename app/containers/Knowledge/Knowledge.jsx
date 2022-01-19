import React from 'react';
import { Box } from '@chakra-ui/layout';
import KnowCheckbox from './content/KnowCheckbox';
import KnowAccordion from './content/KnowAccordion';
import KnowledgeSocial from './content/KnowledgeSocial';

const Knowledge = () => {
    return (
        <>

        <Box  display="flex" >
            <KnowCheckbox />
            <KnowAccordion />
            <KnowledgeSocial  />
        </Box>

        </>
    );
};



export default Knowledge;