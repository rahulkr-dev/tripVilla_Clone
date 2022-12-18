import { Box, Text, Grid, Heading, SimpleGrid, Center } from '@chakra-ui/react';
import React from 'react'
import AboutFooter from '../Components/Utils/AboutFooter';
import { head,terms } from '../Components/Utils/terms.content';


const Terms = () => {
    return (
        <>
            <Box mt="1rem" p={['1rem', '2rem', '4rem']} >
                <Heading fontSize="4rem" mb="2rem" color="#565656" >CoZyTrip User Agreement</Heading>
                <Text>CoZyTrip.COM,</Text>
                <Text>Terms and Conditions of Use</Text>
                <Text color="#737373" fontSize="18px" >{head}</Text>
                {terms.map((item, index) => (
                    <Box key={index} >
                        <Text color="#565656" m="1rem 0" fontWeight="bold" fontSize="24px" >{item.title}</Text>
                        <Text color="#737373" fontSize="18px" >{item.data}</Text>
                    </Box>
                ))}
            </Box>
            <AboutFooter />
        </>
    )
}

export default Terms