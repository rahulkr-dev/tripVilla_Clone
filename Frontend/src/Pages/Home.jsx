import React from 'react'
import { Box } from '@chakra-ui/react';
import {Navbar,Header,CarouselDestination,MidSection1,MidSection2,BottomCarousel,HomeFooter} from "../Components/HomePage"


const Home = () => {
  return (
    <Box>
        <Header/>
        <CarouselDestination/>
        <MidSection1/>
        <MidSection2 />
        <BottomCarousel/>
        <HomeFooter />
    </Box>
  )
}

export default Home;