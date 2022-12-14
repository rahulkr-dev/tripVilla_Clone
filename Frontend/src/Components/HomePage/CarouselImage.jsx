import { Box, Center, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const CarouselImage = ({ h, w, h1, h2, src, alt }) => {
    const place ={
        place:h1 || "Galle",
        des:h2 || "Vacations Rentels"
    }
    return (
        <Link to={`/holiday-homes/goa`} place={place} >
            <Box pos="relative" >
                <Image
                    filter="contrast(50%)"
                    // filter="grayscale(50%)"
                    w={w}
                    h={h}
                    objectFit='cover'
                    src={src}
                    alt={alt || 'image'}
                />

                <Box color="#fff" pos="absolute" top="50%" left="50%" transform="translate(-50%,-50%)" >
                    <Text  textAlign="center" fontWeight="bold" fontSize="18px" >Galle</Text>
                    <Text  textAlign="center" fontSize="14px" >Vacations Rantels</Text>
                </Box>

            </Box>
        </Link>
    )
}

export default CarouselImage