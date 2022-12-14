import { Box,Image,Text,Center, Grid } from '@chakra-ui/react'
import React from 'react'

const InfoCard = ({src,p1}) => {
    return (
        <Grid placeItems="center">
            <Image
                boxSize='40px'
                objectFit='cover'
                src={src}
                alt='info image'
            />
            <Text fontSize="15px" color="#666666" mt="1rem" textAlign="center">{p1}</Text>

        </Grid>
    )
}

export default InfoCard