import { Box, Grid, SimpleGrid,Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'


const TabPanelCountry = ({list}) => {
  return (
    <SimpleGrid columns={[2, null, 6]}>
        {
            list.map((item,i)=>(
                <Box 
                _hover={{
                  textDecoration:"underline",
                  color: "teal.500",
                }}
                 key={i} mb="15px">
                  <Link to="/" ><Text color="#484848" fontSize="15px">{item.title}</Text></Link>
                  <Link to="/" ><Text color="#999999" fontSize="13px">{item.subtitle}</Text></Link>    
                </Box>
            ))
        }
    </SimpleGrid>
  )
}

export default TabPanelCountry