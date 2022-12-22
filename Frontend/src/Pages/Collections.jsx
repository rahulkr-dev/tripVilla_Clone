import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CarouselImage from '../Components/HomePage/CarouselImage'
import data from "../Components/HomePage/landingPage.json"
const Collections = () => {
    let arr = [...data.vacationIdeas,...data.bodySection,...data.topDestinations]
  return (
    <Box p={["1rem","2rem","4rem"]}>
        <Heading pb="3rem" textAlign="center">Explore Some Of the Vacation Ideas</Heading>
        <SimpleGrid gap="1rem" columns={[2,3,5]} >
        {arr.map((item,i)=>(
                    <Box className='collection-container' key="i" >
                        <CarouselImage w="214px" h="160px" src={item.img} h1={item.text || item.name} />
                    </Box>
                ))}
        </SimpleGrid>
    </Box>
  )
}

export default Collections