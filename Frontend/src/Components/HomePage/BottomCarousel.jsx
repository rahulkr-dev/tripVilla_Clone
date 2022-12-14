import React from 'react'
import { Box,Heading,Image, } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { arrC } from './demoData';
import CarouselImage from './CarouselImage';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};



const BottomCarousel = () => {

    return (
        <Box p="3rem">
            <Heading fontSize="25px" pb="1rem" >Vacation Ideas</Heading>
            <Carousel responsive={responsive}>
                {arrC.map((item,i)=>(
                    <Box key="i" >
                        <CarouselImage w="214px" h="160px" src={item} />
                    </Box>
                ))}
            </Carousel>
            <a> so all Ideas</a>
        </Box>
    )
}

export default BottomCarousel