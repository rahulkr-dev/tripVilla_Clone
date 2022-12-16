import React from 'react'
import { Box } from '@chakra-ui/react';
import {Navbar,Header,CarouselDestination,MidSection1,MidSection2,BottomCarousel,HomeFooter} from "../Components/HomePage"
import data from "../Components/HomePage/landingPage.json"

const Home = () => {
  return (
    <Box>
        <Header/>
        <CarouselDestination data={data.topDestinations} />
        <MidSection1 data={data.bodySection} />
        <MidSection2 />
        <BottomCarousel data={data.vacationIdeas}/>
        <HomeFooter />
    </Box>
  )
}

export default Home;