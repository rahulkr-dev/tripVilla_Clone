import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CarouselImage from '../Components/HomePage/CarouselImage'
import { arrC } from '../Components/HomePage/demoData'

const Collections = () => {
  return (
    <Box p="3rem">
        <Heading>Explore Some Of the Vacation Ideas</Heading>
        <SimpleGrid gap="1rem" columns={[2,3,5]} >
        {arrC.map((item,i)=>(
                    <Box key="i" >
                        <CarouselImage w="214px" h="160px" src={item} />
                    </Box>
                ))}
        {arrC.map((item,i)=>(
                    <Box key="i" >
                        <CarouselImage w="214px" h="160px" src={item} />
                    </Box>
                ))}
        {arrC.map((item,i)=>(
                    <Box key="i" >
                        <CarouselImage w="214px" h="160px" src={item} />
                    </Box>
                ))}
        {arrC.map((item,i)=>(
                    <Box key="i" >
                        <CarouselImage w="214px" h="160px" src={item} />
                    </Box>
                ))}
        </SimpleGrid>
    </Box>
  )
}

export default Collections