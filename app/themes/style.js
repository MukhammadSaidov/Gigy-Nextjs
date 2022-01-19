import { extendTheme } from '@chakra-ui/react';
import global from './foundations/global/index.js';
import colors from './foundations/colors/index.js';
const overrides  = {
    styles:{
        global
    },
    fonts:{
        body:'lato',
        heading:'lato',
    },
    colors,
};

export default extendTheme(overrides);
