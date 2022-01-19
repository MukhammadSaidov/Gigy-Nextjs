import React from "react";
import { Box } from "@chakra-ui/layout";
import EmptyPage from "../../../components/EmptyPage/EmptyPage";

const EmptyAcademyPage = () => {
    return(
        <Box d="flex" alignItems="center" justifyContent="center" height="80vh" >
            <EmptyPage
               emptyImg="/Icon/EmptyPages/Empty1.svg"
               bigText="No courses started yet."
               smallText="All your courses and classes will appear here. You can get started by searching for a course and begin learning."
               route="/academy"
               btnText="go to academy"
            />
        </Box>
    )
}

export default EmptyAcademyPage