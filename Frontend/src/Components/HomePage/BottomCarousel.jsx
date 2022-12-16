import React from 'react'
import { Box,Heading,Image, } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { arrC } from './demoData';
import CarouselImage from './CarouselImage';
import { Link } from 'react-router-dom';
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
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
};



const BottomCarousel = ({data}) => {

    return (
        <Box p="3rem">
            <Heading fontSize="25px" pb="1rem" >Vacation Ideas</Heading>
            <Carousel responsive={responsive}>
                {data.map((item,i)=>(
                    <Box key="i" p={["5px"]} >
                        <CarouselImage w="214px" h="160px" src={item.img}
                        h1={item.text} h2=""
                        />
                    </Box>
                ))}
            </Carousel>
            <Box textDecoration="underline" mt="10px" fontWeight="400" fontSize="13px" color="#1e87f0">
                <Link to="/collections" >SHOW ALL IDEAS</Link>
            </Box>
        </Box>
    )
}

export default BottomCarousel