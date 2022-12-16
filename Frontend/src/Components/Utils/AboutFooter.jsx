import { Box, Button, Center, Grid, Image, Input, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import LOGO from "../../Assects/logo.png";
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {GrLinkedin} from "react-icons/gr"
import {BsGithub} from "react-icons/bs"



const AboutFooter = () => {
    return (
        <SimpleGrid justifyContent="center" p={["2rem 1rem","2rem","3rem 20rem"]} alignItems="center" gap="1rem" columns={[1,2,4]} bg="#262626" >
            <VStack>
                <Link to={"/"}>
                    <Image
                        mt="-0.2rem"
                        overflow="hidden"
                        borderRadius="full"
                        boxSize="80px"
                        src={LOGO}
                        alt="The Cozy Trip"
                    />
                </Link>
                <Text fontSize="10px" color="white" >Tripvillas offers verified, fully furnished holiday homes many of which come with resident caretakers. This allows you to holiday in comfort, style and without rushing your holiday.</Text>
                <Stack direction='row'>
                  <Center borderRadius="full" boxSize="1.5rem" >
                    <BsFacebook color="white" />
                  </Center>
                  <Center borderRadius="full" boxSize="1.5rem" >
                    <AiFillTwitterCircle color="white" />
                  </Center>
                  <Center borderRadius="full" boxSize="1.5rem" >
                    <GrLinkedin color="white" />
                  </Center>
                  <Center borderRadius="full" boxSize="1.5rem" >
                    <BsGithub color="white" />
                  </Center>
                </Stack>
            </VStack>
            <VStack color="white" >
                <Text> Incredible Offers on the Best Villas </Text>
                <Input />
                <Button bg="teal" >Subscribe</Button>
            </VStack>
            <VStack fontSize="11px" color="#fff" >
                <Text>About Us</Text>
                <Text>Privacy Policy</Text>
                <Text>FAQs</Text>
                <Text>Contact Us</Text>
                <Text>Property Managers</Text>
                <Text>Holiday Communities</Text>
            </VStack>
            <VStack>
                <Text color="white"  fontSize='3xl' >Have Questions</Text>
                <Text fontSize='3xl' color="teal">support@cozytrip.com</Text>
            </VStack>
        </SimpleGrid>
    )
}

export default AboutFooter