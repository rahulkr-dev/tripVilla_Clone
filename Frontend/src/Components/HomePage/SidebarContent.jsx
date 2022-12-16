import { VStack,Text, Box, Center } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SidebarContent = () => {
  return (
    <Box className='sideBarContent' fontSize="13px" color="#fff" >
        <VStack borderBottom="1px solid gray">
            <Text mb="-10px">ARE YOU A PROPERTY</Text>
            <Text>OWNER/MANAGER?</Text>
            <Text pb="1rem" fontSize="14px" color="#ffffff80" >List New Property</Text>
        </VStack>
        <VStack p="4rem 0 2rem 0" fontSize="12px" color="#ffffff80" borderBottom="1px solid gray">
            <Text fontSize="13px" color="#fff" >HOLIDAY HOMES FOR SALE</Text>
            <Text fontSize="14px">CoZyTrip Managed</Text>
            <Text>Homes from A grade developers,Rentals</Text>
            <Text lineHeight="0px" >guaranteed</Text>
            <Text fontSize="14px" pt="10px" >Marketplace</Text>
            <Text lineHeight="10px"  mb="-10px">See what homes are up for sale from</Text>
            <Text m="0" lineHeight="0px">different property owners</Text>
        </VStack>
        <VStack p="1rem 0 1rem 0" fontSize="14px" color="#ffffff80" borderBottom="1px solid gray">
          <Link> <Text>About Us</Text></Link>
          <Link> <Text>Privacy Policy</Text></Link>
          <Link><Text>Terms of Use</Text></Link>
          <Link><Text>FAQs</Text></Link>
          <Link><Text>Contact Us</Text></Link>
         
        </VStack>
        <Center color="#ffffffb3" >
        <Text pt="10px">@ CoZyTrip Pte Ltd</Text>
        </Center>
    </Box>
  )
}

export default SidebarContent