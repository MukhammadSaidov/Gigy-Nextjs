import React from "react";
import { Box } from "@chakra-ui/layout";
import EmptyPage from "../../../components/EmptyPage/EmptyPage";

const EmptyMainPage = () => {
    return(
        <Box d="flex" alignItems="center" justifyContent="center" height="80vh" >
            <EmptyPage
               emptyImg="/Icon/EmptyPages/Empty2.svg"
               bigText="No active jobs just yet."
               smallText="All your active jobs and gigs will appear here. You can get started by searching for a gig from the Job centre."
               route="/me/job/jobs"
               btnText="go to job centre"
            />
        </Box>
    )
}

export default EmptyMainPage