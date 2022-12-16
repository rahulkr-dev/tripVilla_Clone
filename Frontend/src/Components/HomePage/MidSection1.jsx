import { Grid, Heading, Image, Text, Box, Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CarouselImage from './CarouselImage'
import { communites, midSec1 } from "./demoData"
import InfoCard from './InfoCard'

const MidSection1 = ({data}) => {
    return (
        <Flex color="#333333" direction={["column", 'column', 'row']} p={["1rem","2rem","3rem"]} gap="3rem">


            {/* left side */}
            <Box w={['full','full',"382px"]} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' p={["1rem","2rem","3rem"]}>
                <Heading p="1rem" textAlign="center" as="h2" size="md">Fully Managed Communities By Tripvillas</Heading>
                <SimpleGrid
                    
                    columns={[2, 2, 2]}
                    spacing='40px'>
                    {communites.map(item => (
                        <InfoCard key={item.p1} src={item.url} p1={item.p1} />
                    ))}
                </SimpleGrid>
            </Box>
            {/* right side */}


            <SimpleGrid w={["full", 'full', "845px"]} columns={[2, 3, 4]} spacing='1rem'>
                {data.map((item, i) => (
                    <CarouselImage key={i} w="172px" h="150px" src={item.img} alt="images"
                    h1={item.name} f="15px" h2={item.location}
                    />
                ))}
            </SimpleGrid>
        </Flex>
    )
}

export default MidSection1