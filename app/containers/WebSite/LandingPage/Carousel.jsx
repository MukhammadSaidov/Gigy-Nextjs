import React from "react";
import { Box , Text} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';




const Carousel = (props) => {



    const [ml, setMl] = useState(8)//Index for Button
    const [pagination, setPagination] = useState(1) //Index for pagination
    
    const Next =()=>{ // Function for carousel forward
        if(ml == -32) setPagination(2)
        if(ml == -112) setPagination(3)
        if(ml == -192) setPagination(4)
        if(ml == -232) setPagination(1)
        if(ml == -232 )setMl(8)
        else if(ml != -232 )setMl(ml - 40) 
    }
    
    
    const Back =()=>{ // Function for carousel back
        if(ml == -32) setPagination(1)
        if(ml == -112) setPagination(2)
        if(ml == -192) setPagination(3)
        if(ml == 8) setPagination(4)
        if(ml != 8)setMl(ml + 40)
        else setMl(-232)
    }

    return(
        <>                  
                                {/* Carousel for HD FullHD 2K 4K */}
            <Box overflow='hidden' d={{base:'none',sm:'none',md:'none',lg:'block',xl:'block'}} >
            
                <Box  maxW={{xl:"84vw", lg:"85vw", md:"92vw", sm:"92vw", base:"92vw"}} m="0 auto"  mt={{base: "70px", lg: "130px", xl: "130px", md: "70px", sm: "70px"}} d="flex" justifyContent="space-between" mb='3vw'>
                    <Box >
                        <Text textAlign='center' color="#495057" fontSize="16px" fontWeight="500" fontFamily="Lato" lineHeight="19px" textTransform="uppercase">Testimonials</Text>
                        <Text textAlign='center' mt="6px" fontSize={{base: "35px", lg: "50px", xl: "50px", md: "35px", sm: "35px"}} fontWeight="800" fontFamily="Lato" lineHeight="60px">What Gigas say :</Text>
                        <Text textAlign='center' mt="10px" width="349px" color="#495057" fontSize="16px" fontWeight="normal" fontFamily="Lato" lineHeight="19px">Don’t just take our word for it, hear what our gig owners and gigas have to say.</Text>
                    </Box> 

                    <Box d={{lg: "flex", xl: "flex", md: "none", sm: "none", base: "none"}} alignSelf="flex-end">
                        <Image onClick={Back} cursor="pointer" mr="40px" src="/Icon/website-icons/LandingPage/Left-slide.svg" />
                        <Image onClick={Next} cursor="pointer" src="/Icon/website-icons/LandingPage/Right-slide.svg" />
                    </Box> 
                </Box>

                <Box  d='flex' w='max' gridGap='3vw' ml={ml == 8 ? "8vw" : ml + 'vw'}  transition="margin 600ms"  >
                    {data.map((item)=>(
                        <Box borderRadius='10px' d='flex' flexDirection='column' alignItems='center' justifyContent='space-between' p='1vw' w='33vw' h='auto' bg='#603E94'>
                            <Image cursor="pointer" mb='1vw' src={item.img} boxSize='80px' />
                            <Text fontWeight='100' textAlign='center' fontSize='18px' color='#FCFDFF' w='90%'>{item.text}</Text>                    
                            <Box alignSelf='self-start' mt='1vw' >
                                <Text color='#FCFDFF' fontSize='19px' fontWeight='bold' >{item.text1}</Text>
                                <Text fontSize='19px' color='#dde2e580'>{item.text2}</Text>
                            </Box>
                        </Box>
                    ))}
                </Box>
                <Box gridGap='10px' d='flex' w='100%' justifyContent='center' alignItems='center' mt='30px'>
                    <Box onClick={()=>setMl(8)    | setPagination(1)} transition="width 600ms ease-in-out" h='15px'  w={pagination == 1 ? "25px" : '15px'} cursor='pointer' bg={pagination == 1 ? '#603E94' : '#CEB8EE'} borderRadius={pagination == 1 ? '10px' : '100%'}></Box>
                    <Box onClick={()=>setMl(-72)  | setPagination(2)} transition="width 600ms ease-in-out" h='15px'  w={pagination == 2 ? "25px" : '15px'} cursor='pointer' bg={pagination == 2 ? '#603E94' : '#CEB8EE'} borderRadius={pagination == 2 ? '10px' : '100%'}></Box>
                    <Box onClick={()=>setMl(-152) | setPagination(3)} transition="width 600ms ease-in-out" h='15px'  w={pagination == 3 ? "25px" : '15px'} cursor='pointer' bg={pagination == 3 ? '#603E94' : '#CEB8EE'} borderRadius={pagination == 3 ? '10px' : '100%'}></Box>
                    <Box onClick={()=>setMl(-232) | setPagination(4)} transition="width 600ms ease-in-out" h='15px'  w={pagination == 4 ? "25px" : '15px'} cursor='pointer' bg={pagination == 4 ? '#603E94' : '#CEB8EE'} borderRadius={pagination == 4 ? '10px' : '100%'}></Box>
                </Box>
            </Box>

            
             
                            {/* Carousel for Tablet and Phone */}
            <Box  d={{base:'block',sm:'block',md:'block',lg:'none',xl:'none'}}  maxW={{xl:"84vw", lg:"85vw", md:"92vw", sm:"92vw", base:"92vw"}} m="0 auto"  mt={{base: "70px", lg: "130px", xl: "130px", md: "70px", sm: "70px"}}  justifyContent="space-between" mb='3vw'>
                <Box textAlign='center' mb='50px' d='flex' justifyContent='center' flexDirection='column' alignItems='center' >
                    <Text  color="#495057" fontSize="16px" fontWeight="500" fontFamily="Lato" lineHeight="19px" textTransform="uppercase">Testimonials</Text>
                    <Text  mt="6px" fontSize={{base: "35px", lg: "50px", xl: "50px", md: "35px", sm: "35px"}} fontWeight="800" fontFamily="Lato" lineHeight="60px">What Gigas say :</Text>
                    <Text  mt="10px" width="100%" color="#495057" fontSize="16px" fontWeight="normal" fontFamily="Lato" lineHeight="19px">Don’t just take our word for it, hear what our gig owners and gigas have to say.</Text>
                </Box> 

                <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={1.3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                
                >
                    {data.map((item)=>(
                        <SwiperSlide>
                            <Box borderRadius='10px' mb='50px' d='flex' flexDirection='column' alignItems='center' justifyContent='space-between' p='20px' w='60vw' h='auto' bg='#603E94' >
                                <Image boxSize={{base:'60px',sm:'70px',md:'80px'}} mb='20px' src={item.img} />
                                <Text fontWeight='100' textAlign='center' fontSize='17px' color='#FCFDFF' w='90%'>{item.text}</Text>                    
                                <Box alignSelf='self-start' mt='20px' >
                                    <Text color='#FCFDFF' fontSize='18px' fontWeight='bold' >{item.text1}</Text>
                                    <Text fontSize='18px' color='#dde2e580'>{item.text2}</Text>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper >
            </Box>
        </>

    )
}

export default Carousel


                    // Fake json for carousel
const data =[
    {img:"/Icon/website-icons/LandingPage/Right-slide.svg",text:'The ease of use is one of the best things I like about Gigy. The gigas are eager to work and I am always satisfied delegating my work to them.',text1:'Marcus Walter',text2:'Elderly care-giver'},
    {img:"/Icon/website-icons/LandingPage/Right-slide.svg",text:'The ease of use is one of the best things I like about Gigy. The gigas are eager to work and I am always satisfied delegating my work to them.',text1:'Marcus Walter',text2:'Elderly care-giver'},
    {img:"/Icon/website-icons/LandingPage/Right-slide.svg",text:'The ease of use is one of the best things I like about Gigy. The gigas are eager to work and I am always satisfied delegating my work to them.',text1:'Marcus Walter',text2:'Elderly care-giver'},
    {img:"/Icon/website-icons/LandingPage/Right-slide.svg",text:'The ease of use is one of the best things I like about Gigy. The gigas are eager to work and I am always satisfied delegating my work to them.',text1:'Marcus Walter',text2:'Elderly care-giver'},
    {img:"/Icon/website-icons/LandingPage/Right-slide.svg",text:'The ease of use is one of the best things I like about Gigy. The gigas are eager to work and I am always satisfied delegating my work to them.',text1:'Marcus Walter',text2:'Elderly care-giver'},
    {img:"/Icon/website-icons/LandingPage/Right-slide.svg",text:'The ease of use is one of the best things I like about Gigy. The gigas are eager to work and I am always satisfied delegating my work to them.',text1:'Marcus Walter',text2:'Elderly care-giver'},
    {img:"/Icon/website-icons/LandingPage/Right-slide.svg",text:'The ease of use is one of the best things I like about Gigy. The gigas are eager to work and I am always satisfied delegating my work to them.',text1:'Marcus Walter',text2:'Elderly care-giver'},
    {img:"/Icon/website-icons/LandingPage/Right-slide.svg",text:'The ease of use is one of the best things I like about Gigy. The gigas are eager to work and I am always satisfied delegating my work to them.',text1:'Marcus Walter',text2:'Elderly care-giver'},
    {img:"/Icon/website-icons/LandingPage/Right-slide.svg",text:'The ease of use is one of the best things I like about Gigy. The gigas are eager to work and I am always satisfied delegating my work to them.',text1:'Marcus Walter',text2:'Elderly care-giver'},
]