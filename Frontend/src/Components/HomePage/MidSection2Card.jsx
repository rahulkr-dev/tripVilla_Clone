import { Box, Button, Center, Grid, Heading } from '@chakra-ui/react'
import React from 'react'
import InfoCard from './InfoCard'

const MidSection2Card = ({ head, arr, btn }) => {
    return (
        <Box maxW="100%" boxSize="border-box" w={['90vw', 'max-content', 'max-content']} p={["1rem", "2rem", "3rem"]} boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' m={["1rem", "2rem", "3rem"]}

        >
            <Heading mb="2rem" textAlign="center" as="h2" fontSize="23px" color="#666666">{head}</Heading>
            <Grid gap="1rem" gridTemplateColumns="repeat(2,1fr)" >
                {arr.map(item => (
                    <InfoCard key={item.p1} src={item.url} p1={item.p1} />
                ))}
            </Grid>
            <Center p="1rem">
                <Button fontSize="13px" borderRadius="0" w="max-content" m="1rem" bg="#1e87f0" colorScheme='blue' >{btn}</Button>
            </Center>
        </Box>
    )
}

export default MidSection2Card