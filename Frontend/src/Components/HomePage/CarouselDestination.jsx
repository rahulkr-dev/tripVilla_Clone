import React from 'react'
import { Box,Heading,Image, } from "@chakra-ui/react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
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



const CarouselDestination = () => {

    return (
        <Box p="3rem">
            <Heading fontSize="25px" pb="1rem" >Top Destinations</Heading>
            <Carousel responsive={responsive}>
                <Box>
                    <Image
                        // boxSize='200px'
                        w="214px"
                        h="160px"
                        objectFit='cover'
                        src='https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/19964192/5cc254e7398c11e8bf860a8e1b1ce4da_watermarked_image_1024.jpeg'
                        alt='Dan Abramov'
                    />
                </Box>
                <Box>
                    <Image
                         w="214px"
                         h="160px"
                        objectFit='cover'
                        src='https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/62897879/3d392d473d3a11e8ba550a8e1b1ce4da_watermarked_image_1024.jpeg'
                        alt='Dan Abramov'
                    />
                </Box>
                <Box>
                    <Image
                        w="214px"
                        h="160px"
                        objectFit='cover'
                        src='https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/19964192/5cc254e7398c11e8bf860a8e1b1ce4da_watermarked_image_1024.jpeg'
                        alt='Dan Abramov'
                    />
                </Box>
                <Box>
                    <Image
                      w="214px"
                      h="160px"
                        objectFit='cover'
                        src='https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/62897879/3d392d473d3a11e8ba550a8e1b1ce4da_watermarked_image_1024.jpeg'
                        alt='Dan Abramov'
                    />
                </Box>
                <Box>
                    <Image
                         w="214px"
                         h="160px"
                        objectFit='cover'
                        src='https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/19964192/5cc254e7398c11e8bf860a8e1b1ce4da_watermarked_image_1024.jpeg'
                        alt='Dan Abramov'
                    />
                </Box>
                <Box>
                    <Image
                      w="214px"
                      h="160px"
                        objectFit='cover'
                        src='https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/62897879/3d392d473d3a11e8ba550a8e1b1ce4da_watermarked_image_1024.jpeg'
                        alt='Dan Abramov'
                    />
                </Box>
                <Box>
                    <Image
                         w="214px"
                         h="160px"
                        objectFit='cover'
                        src='https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/19964192/5cc254e7398c11e8bf860a8e1b1ce4da_watermarked_image_1024.jpeg'
                        alt='Dan Abramov'
                    />
                </Box>
                <Box >
                    <Image
                       w="214px"
                       h="160px"
                        objectFit='cover'
                        src='https://d2vcelvjdj7n25.cloudfront.net/media/property_photos/image_watermarked_1024/62897879/3d392d473d3a11e8ba550a8e1b1ce4da_watermarked_image_1024.jpeg'
                        alt='Dan Abramov'
                    />
                </Box>
            </Carousel>;
        </Box>
    )
}

export default CarouselDestination