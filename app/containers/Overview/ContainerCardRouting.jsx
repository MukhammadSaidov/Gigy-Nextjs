import ContainerCard from './ContainerCards.jsx'
import UserInformation from './UserInformation.jsx'
import { Box } from '@chakra-ui/layout'
import MobileOverview from './MobileOverview.jsx'
import UpcomingGigsCard from '../../components/UpcomingGigsCard/UpcomingGigsCard.jsx'
import CardOverview from '../../components/Cards/CardOverview.jsx'
import CardJobs from '../../components/Cards/CardJobs.jsx'
import CardRecentPosts from '../../components/Cards/CardRecentPosts.jsx'
import CardJobPostings from '../../components/Cards/CardJobPostings.jsx'

import NextLink from 'next/link'
import { Link } from '@chakra-ui/layout'


function ContainerCardRouting({ninja}) {

  return (
    <>
        <Box h='100%' d={{lg:"flex", md:"none", sm:"none", base:"none"}}  justifyContent="space-between">
          <Box w="100%" borderRight='0.7px solid #DDE2E5'>

            <ContainerCard

                CardOverview={
                    ninja.map(item =>  
                    <NextLink href={'/me/job/' + item.id + '/info'} key={item.id} >
                      <Box cursor='pointer' w='100%' padding={{base:"3vw", sm:"2vw",md:"2vw",lg:"1.5vw",xl:"1vw"}} width={{xl:"20vw",lg:"42vw", md:"97vw",sm:"97vw",base:"97vw",}} justifyContent='space-between'  display="flex"   border="0.7px solid #DDE2E5" borderRadius="4px" p='2vw' >
                        <CardOverview
                          job={item.name}
                        />        
                      </Box>
                    </NextLink>
                )}

                CardJobs={
                    ninja.map(item =>  
                    <NextLink href={'/me/job/' + item.id + '/info'} key={item.id} >
                      <Box cursor='pointer' w='100%' padding={{base:"3vw", sm:"2vw",md:"2vw",lg:"1.5vw",xl:"1vw"}} width={{xl:"20vw",lg:"42vw", md:"97vw",sm:"97vw",base:"97vw",}} justifyContent='space-between'  display="flex"   border="0.7px solid #DDE2E5" borderRadius="4px" p='2vw' >
                        <CardJobs
                          job={item.name}
                        />        
                      </Box>
                    </NextLink>
                )}

                CardRecentPosts={
                    ninja.map(item =>  
                    <NextLink href={'/me/job/' + item.id + '/info'} key={item.id} >
                      <Box cursor='pointer' w='100%' padding={{base:"3vw", sm:"2vw",md:"2vw",lg:"1.5vw",xl:"1vw"}} width={{xl:"20vw",lg:"42vw", md:"97vw",sm:"97vw",base:"97vw",}}  border="0.7px solid #DDE2E5" borderRadius="4px" p='2vw'  >
                        <CardRecentPosts
                          job={item.name}
                        />        
                      </Box>
                    </NextLink>
                )}

                CardJobPostings={
                    ninja.map(item =>  
                    <NextLink href={'/me/job/' + item.id + '/info'} key={item.id} >
                      <Box cursor='pointer' w='100%' padding={{base:"3vw", sm:"2vw",md:"2vw",lg:"1.5vw",xl:"1vw"}} width={{xl:"20vw",lg:"42vw", md:"97vw",sm:"97vw",base:"97vw",}} border="0.7px solid #DDE2E5" borderRadius="4px" p='2vw'  >
                        <CardJobPostings
                          job={item.name}
                        />        
                      </Box>
                    </NextLink>
                )}
            /> 
          </Box>

          <UserInformation
            upcomingGigsCard={
              ninja.map(item =>  
              <NextLink href={'/me/job/' + item.id + '/info'} key={item.id} >
                <Box cursor='pointer' w='100%' >
                  <UpcomingGigsCard
                    job={item.name}/>        
                </Box>
              </NextLink>
             )}
          />
        </Box>


        <Box d={{xl:'none' ,lg:"none", md:"flex", sm:"flex", base:"flex"}} >
            <MobileOverview
                upcomingGigsCard={
                ninja.map(item =>  
                <NextLink  href={'/me/job/' + item.id + '/info'} key={item.id}>
                  <Box cursor='pointer' w='100%'>
                      <UpcomingGigsCard
                      job={item.name}/>        
                  </Box>
                </NextLink>
                )}

                CardOverview={
                    ninja.map(item =>  
                    <NextLink href={'/me/job/' + item.id + '/info'} key={item.id} >
                    <Link href="">
                        <Box cursor='pointer'  w='100%' padding={{base:"3vw", sm:"2vw",md:"2vw",lg:"1.5vw",xl:"1vw"}} width={{xl:"18vw",lg:"40vw", md:"97vw",sm:"97vw",base:"97vw",}} justifyContent='space-between'  display="flex"   border="0.7px solid #DDE2E5" borderRadius="4px" p='2vw' >
                        <CardOverview
                            job={item.name}
                        />        
                        </Box>
                    </Link>
                    </NextLink>
                )}

                CardJobs={
                    ninja.map(item =>  
                    <NextLink href={'/me/job/' + item.id + '/info'} key={item.id} >
                    <Link href="">
                        <Box cursor='pointer' w='100%' padding={{base:"3vw", sm:"2vw",md:"2vw",lg:"1.5vw",xl:"1vw"}} width={{xl:"18vw",lg:"40vw", md:"97vw",sm:"97vw",base:"97vw",}} justifyContent='space-between'  display="flex"   border="0.7px solid #DDE2E5" borderRadius="4px" p='2vw' >
                        <CardJobs
                            job={item.name}
                        />        
                        </Box>
                    </Link>
                    </NextLink>
                )}

                CardRecentPosts={
                    ninja.map(item =>  
                    <NextLink href={'/me/job/' + item.id + '/info'} key={item.id} >
                    <Link href="">
                        <Box cursor='pointer' w='100%' padding={{base:"3vw", sm:"2vw",md:"2vw",lg:"1.5vw",xl:"1vw"}} width={{xl:"18vw",lg:"40vw", md:"97vw",sm:"97vw",base:"97vw",}}  border="0.7px solid #DDE2E5" borderRadius="4px" p='2vw'  >
                        <CardRecentPosts
                            job={item.name}
                        />        
                        </Box>
                    </Link>
                    </NextLink>
                )}

                CardJobPostings={
                    ninja.map(item =>  
                    <NextLink href={'/me/job/' + item.id + '/info'} key={item.id} >
                    <Link href="">
                        <Box cursor='pointer' w='100%' padding={{base:"3vw", sm:"2vw",md:"2vw",lg:"1.5vw",xl:"1vw"}} width={{xl:"18vw",lg:"40vw", md:"97vw",sm:"97vw",base:"97vw",}} border="0.7px solid #DDE2E5" borderRadius="4px" p='2vw'  >
                        <CardJobPostings
                            job={item.name}
                        />        
                        </Box>
                    </Link>
                    </NextLink>
                )}
            />
        </Box>
    </>
  )
}
export default ContainerCardRouting;