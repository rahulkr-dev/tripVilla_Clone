import { Box, Text, Grid, Heading, SimpleGrid, Center } from '@chakra-ui/react';
import React from 'react'
import AboutFooter from '../Components/Utils/AboutFooter';
import { about_header_middle1, about_header_top, about_header_middle2, about_header_bottom, investor_NRF, investor_Labs, investor_blume_ventures, investor_MENA_ventures, investor_limKah, investor_samer, investor_otherAngles } from './../Components/Utils/About.content';

const About = () => {
    return (
        <>
            <Box color="#565656" p={["1rem", '2rem', '6rem']} >
                <Heading fontWeight="400" fontSize="2.4rem" mb="1rem">
                    About CoZyTrip
                </Heading>
                <Grid gap="10px" borderRadius=".4rem" p="2rem 1.4rem" border="1px solid #f3f3f3" >
                    <Text>{about_header_top}</Text>
                    <Text>{about_header_middle1}</Text>
                    <Text>{about_header_middle2}</Text>
                    <Text>{about_header_bottom}</Text>
                </Grid>
                <Heading mt="2.4rem" fontWeight="400" fontSize="2.4rem" mb="1rem">
                    What We Do
                </Heading>
                <SimpleGrid mt="1.4rem" gap="2rem" columns={[1, 1, 2]} borderRadius=".4rem" p="2rem 1.4rem" border="1px solid #f3f3f3" >
                    <Box pos="relative" p="1rem" boxShadow="lg" h="182px">
                        <Text pl="2rem" color="#30bbb1" fontSize="1.5rem" fontWeight="bold" >Holiday Rentals</Text>
                        <Text pl="2rem" >One of the largest Holiday Rental Platforms in Asia</Text>
                        <Center left="0" top="0" fontSize="1.5rem" color="white" fontWeight="bold" boxSize="2.6rem" bg="#30bbb1" pos="absolute" >1</Center>
                    </Box>
                    <Box pos="relative" p="1rem" boxShadow="lg" h="182px">
                        <Text pl="2rem" color="#30bbb1" fontSize="1.5rem" fontWeight="bold" >Capability Development</Text>
                        <Text pl="2rem">Provision of Software, Best Practices and Training to owners and Staff members involved in the trade</Text>
                        <Center left="0" top="0" fontSize="1.5rem" color="white" fontWeight="bold" boxSize="2.6rem" bg="#30bbb1" pos="absolute" >2</Center>
                    </Box>
                    <Box pos="relative" p="1rem" boxShadow="lg" h="182px">
                        <Text pl="2rem" color="#30bbb1" fontSize="1.5rem" fontWeight="bold" >Community Management</Text>
                        <Text pl="2rem">Development and Management of Holiday Communities offering a well designed environment in harmony with Nature</Text>
                        <Center left="0" top="0" fontSize="1.5rem" color="white" fontWeight="bold" boxSize="2.6rem" bg="#30bbb1" pos="absolute" >3</Center>
                    </Box>
                    <Box pos="relative" p="1rem" boxShadow="lg" h="182px">
                        <Text pl="2rem" color="#30bbb1" fontSize="1.5rem" fontWeight="bold" >Exchange Solutions</Text>
                        <Text pl="2rem">Enhance the lives of Vacation Home Owners by allowing them to experience other homes in exchange for stays in their property</Text>
                        <Center left="0" top="0" fontSize="1.5rem" color="white" fontWeight="bold" boxSize="2.6rem" bg="#30bbb1" pos="absolute" >4</Center>
                    </Box>
                </SimpleGrid>
                <Heading fontWeight="400" fontSize="2.4rem" mt="3rem">
                    Investors
                </Heading>
                <Grid gap="10px" p="2rem 1.4rem" fontSize="14.4px" >
                    <Box borderBottom="1px solid #f3f3f3" >
                        <Text fontSize="1.6rem">NRF</Text>
                        <Text>{investor_NRF}</Text>
                    </Box>
                    <Box borderBottom="1px solid #f3f3f3">
                        <Text fontSize="1.6rem">Neoteny Labs</Text>
                        <Text>{investor_Labs}</Text>
                    </Box>
                    <Box borderBottom="1px solid #f3f3f3">
                        <Text fontSize="1.6rem">Blume Ventures</Text>
                        <Text>{investor_blume_ventures}</Text>
                    </Box>
                    <Box borderBottom="1px solid #f3f3f3">
                        <Text fontSize="1.6rem">MENA Ventures </Text>
                        <Text>{investor_MENA_ventures}</Text>
                    </Box>
                    <Box borderBottom="1px solid #f3f3f3">
                        <Text fontSize="1.6rem"> Mr. Lim Kah Hong</Text>
                        <Text>{investor_limKah}</Text>
                    </Box>
                    <Box borderBottom="1px solid #f3f3f3">
                        <Text fontSize="1.6rem">Mr. Samer A. Mouasher</Text>
                        <Text>{investor_samer}</Text>
                    </Box>
                    <Box borderBottom="1px solid #f3f3f3">
                        <Text fontSize="1.6rem">Other Angels </Text>
                        <Text>{investor_otherAngles}</Text>
                    </Box>

                    <Grid id="contact" mt="3rem" gap="1.5rem" fontSize="14px">
                        <Text fontSize="25px">Offices</Text>
                        <Box>
                            <Text color="#737373" fontWeight="bold" >Singapore (Headquarter) </Text>
                            <Text>20 Maxwell Road, #10-05 Maxwell House, Singapore 069113</Text>
                        </Box>
                        <Box>
                            <Text color="#737373" fontWeight="bold" >India</Text>
                            <Text>10th Floor, RMZ Latitude Commercial, Bellary Road, Bangalore 560024</Text>
                        </Box>
                        <Box>
                            <Text color="#737373" fontWeight="bold" >Contact Us</Text>
                            <Text>India: +91 80-471-04002 (Bangalore)
                                United States: +1 (650) 434-2097 (Orlando, Florida)
                                Or Write to us on support@tripvillas.com</Text>
                        </Box>
                    </Grid>
                </Grid>

            </Box>
            <Box className='about-footer' >
                <AboutFooter />
            </Box>

        </>
    )
}

export default About