
import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, HStack, Image, Input, InputGroup, InputLeftElement, Select,Grid, Center, Heading } from '@chakra-ui/react'

const Header = () => {
    return (
        <Box pos="relative">
            <Box>
                <Image src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/Pimal2-1.2d5d237dbd32.jpg"
                    alt='header iamge'
                    h="calc(100vh-200px)"
                    maxH="500px"
                    w="full"
                    filter="contrast(50%)"
                />
            </Box>
            <Heading fontSize="29px" left="17%" color="#fff" fontWeight="bold" pos="absolute" top="27%">Book Hotels Vacation Rentals Top Holiday</Heading>
            <Heading fontSize="30px" left="17%" color="#fff" fontWeight="bold" pos="absolute" top="33%">Top Holiday Homes - Villas, Apartments & Homestays</Heading>
            <Grid
            w={{lg:"880px"}} templateColumns={{lg:"repeat(5,1fr)"}}  bg="#ffffff"
            pos="absolute" top="50%" left="50%" transform="translate(-50%,-50%)"
            p="10px"
            
            >
                <InputGroup w={{lg:"286px"}} >
                    <InputLeftElement
                        pointerEvents='none'
                        children={<SearchIcon color='gray.300' />}
                    />
                    <Input type='tel' placeholder='Location' />
                </InputGroup>
                <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                />
                <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                />
                <Select placeholder='Select option'>
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>
                <Center cursor="pointer" color="#fff" bg="#1E87F0">Search</Center>
            </Grid>
        </Box>
    )
}

export default Header