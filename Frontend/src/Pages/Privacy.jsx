import { Box, Text, Grid, Heading, SimpleGrid, Center } from '@chakra-ui/react';
import React from 'react'
import AboutFooter from '../Components/Utils/AboutFooter';
import { title, privacyData } from '../Components/Utils/Privacy.content';


const Privacy = () => {
    return (
        <>
            <Box mt="1rem" p={['1rem', '2rem', '4rem']} >
                <Heading fontSize="4rem" mb="2rem" color="#565656" >Privacy Policy</Heading>
                <Text color="#737373" fontSize="18px" >{title}</Text>
                {privacyData.map((item, index) => (
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

export default Privacy