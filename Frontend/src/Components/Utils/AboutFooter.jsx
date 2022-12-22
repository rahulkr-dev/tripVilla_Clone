import { Box, Button, Center, Flex, Grid, Image, Input, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import LOGO from "../../Assects/logo.png";
import { BsFacebook } from "react-icons/bs"
import { AiFillTwitterCircle } from "react-icons/ai"
import { GrLinkedin } from "react-icons/gr"
import { BsGithub } from "react-icons/bs"



const AboutFooter = () => {
  return (
    <Grid templateColumns={["repeat(1,1fr)", "repeat(2,1fr)", "repeat(4,1fr)"]} justifyContent="center" p={["2rem 1rem", "2rem", "4rem 10rem"]}  gap="2.5rem" bg="#262626" >
      <VStack>
        <Flex width={"100%"} justifyContent="flex-start" alignItems="center" >
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
          <Text fontSize="1.6rem" fontWeight="bold" color="#fff" >CoZyTrip</Text>
        </Flex>
        <Text fontSize="13.4px" color="white" >Tripvillas offers verified, fully furnished holiday homes many of which come with resident caretakers. This allows you to holiday in comfort, style and without rushing your holiday.</Text>
        <Flex pt="1rem" mt="1rem" w="100%"  justifyContent="center" gap="14px">
          <Center borderRadius="full" boxSize="1.5rem" >
            <BsFacebook size="3rem" color="white" />
          </Center>
          <Center borderRadius="full" boxSize="1.5rem" >
            <AiFillTwitterCircle size="3rem" color="white" />
          </Center>
          <Center borderRadius="full" boxSize="1.5rem" >
            <GrLinkedin size="3rem" color="white" />
          </Center>
          <Center borderRadius="full" boxSize="1.5rem" >
            <BsGithub size="3rem" color="white" />
          </Center>
        </Flex>
      </VStack>
      <VStack spacing="0rem" color="white" >
        <Box>
          <Text mb="1rem" fontSize="1.7rem" > Incredible Offers on the Best Villas </Text>
          <Text w="100%" textAlign="start" fontSize="12.5px" >Enter your E-mail Address</Text>
          <Input />
          <Text color="#ffffff80"  mb="2rem" w="100%" textAlign="start" fontSize="12.5px" >* We never send spam</Text>
        </Box>
        <Button p="0 1rem" borderRadius="0" colorScheme="teal" >Subscribe</Button>
      </VStack>
      <Flex gap=".1rem" direction="column" className='footer-links' justifyContent="start" fontSize="16px" color="#ffffff80">
      <Link to="/about-us" > <Text>About Us</Text></Link>
          <Link to="/privacy" > <Text>Privacy Policy</Text></Link>
          <Link to="terms" ><Text>Terms of Use</Text></Link>
          <Link to="faq" ><Text>FAQs</Text></Link>
          <Link to="/about-us/#contact" ><Text>Contact Us</Text></Link>
        <Link><Text>Property Managers</Text></Link>
        <Link><Text>Holiday Communities</Text></Link>


      </Flex>
      <Box>
        <Text color="white" fontSize='4xl' >Have Questions ?</Text>
        <Text fontSize='2xl' color="teal">support@cozytrip.com</Text>
        <SimpleGrid mt="1rem" columns={[1,1,2]}>
          <Image src="https://d2vcelvjdj7n25.cloudfront.net/static/images/playstore.png" />
          <Image src="https://d2vcelvjdj7n25.cloudfront.net/static/images/appstore.png" />
        </SimpleGrid>
      </Box>
    </Grid>
  )
}

export default AboutFooter