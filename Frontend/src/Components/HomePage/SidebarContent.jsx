import { VStack,Text, Box, Center } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SidebarContent = ({onClose}) => {
  return (
    <Box className='sideBarContent' fontSize="13px" color="#fff" >
        <VStack borderBottom="1px solid gray">
            <Text mb="-10px">ARE YOU A PROPERTY</Text>
            <Text>OWNER/MANAGER?</Text>
            <Text pb="1rem" fontSize="15px" color="#ffffff80" >List New Property</Text>
        </VStack>
        <VStack p="4rem 0 2rem 0" fontSize="12px" color="#ffffff80" borderBottom="1px solid gray">
            <Text fontSize="14px" color="#fff" >HOLIDAY HOMES FOR SALE</Text>
            <Text fontSize="15px">CoZyTrip Managed</Text>
            <Text>Homes from A grade developers,Rentals</Text>
            <Text lineHeight="0px" >guaranteed</Text>
            <Text fontSize="15px" pt="10px" >Marketplace</Text>
            <Text lineHeight="10px"  mb="-10px">See what homes are up for sale from</Text>
            <Text m="0" lineHeight="0px">different property owners</Text>
        </VStack>
        <VStack onClick={onClose} p="1rem 0 1rem 0" fontSize="16px" color="#ffffff80" borderBottom="1px solid gray">
          <Link to="/about-us" > <Text>About Us</Text></Link>
          <Link to="/privacy" > <Text>Privacy Policy</Text></Link>
          <Link to="terms" ><Text>Terms of Use</Text></Link>
          <Link to="faq" ><Text>FAQs</Text></Link>
          <Link to="/about-us/#contact" ><Text>Contact Us</Text></Link>
         
        </VStack>
        <Center color="#ffffffb3" >
        <Text pt="10px">@ CoZyTrip Pte Ltd</Text>
        </Center>
    </Box>
  )
}

export default SidebarContent