import React from 'react'
import { Box, Heading, SimpleGrid, Grid, Text, Flex, HStack, Center, Image } from '@chakra-ui/react'
import RightPart from '../Components/SingleHotel/RightPart'
import hotelMap from "../Assects/hotelMap.png"
import { KEY_AMENITIES, BEDROOM1, BEDROOM2, BESTFOR, PRIVATE_ROOM_ETC } from '../Components/SingleHotel/singleHotel.content'
import { CiTimer } from "react-icons/ci"
import { FiPaperclip } from "react-icons/fi"
import { CiLocationOn } from "react-icons/ci"
import { MdOutlinePolicy } from "react-icons/md"
import HotelDetailsCrausel from '../Components/SingleHotel/HotelCrausel'
import AboutFooter from '../Components/Utils/AboutFooter'
import {Link as ReactScroll} from "react-scroll"

const SingleHotelDetails = () => {
    let hoteldata = JSON.parse(localStorage.getItem("abc"));
    return (
        <>
        <Flex fontSize="15px"  p="2.5rem" color="#666666" >
            <Grid gap="3rem" borderRight="1px solid #999999" w="1030px" >
                <Grid templateColumns={['repeat(1, 1fr)','repeat(1, 1fr)','repeat(2, 1fr)']} gap="1rem">
                    <Box >
                        <HotelDetailsCrausel />
                    </Box>
                    <Box p="2rem" >
                        <Heading fontWeight="400" >{hoteldata.title}</Heading>
                        <Flex mr="1rem" pb="1rem" borderBottom="1px solid #999999" m="1rem 0" gap="1rem" alignItems="center" >
                            <CiLocationOn size="1.5rem" />
                            <Text>{hoteldata.address}, India.</Text>
                        </Flex>
                        <Flex p="1rem 2rem 1rem 0" wrap="wrap" gap="1.3rem" >
                            {PRIVATE_ROOM_ETC.map((item, i) => (
                                <Center fontSize="13px" p="5px 15px" border="1px solid #1E87F0" color="#1E87F0" key={i} >{item}</Center>
                            ))}
                        </Flex>

                    </Box>
                </Grid>
                <Flex m="0 1.5rem" pb="10px" borderBottom="1px solid #999999" fontSize="13px" alignItems="center" gap="1.3rem">
                    <Flex  alignItems="center" gap="8px" >
                        <CiTimer size="1.3rem"  />
                        <ReactScroll to="overview" >
                        <Text>OVERVIEW</Text>
                        </ReactScroll>
                    </Flex>
                    <Flex alignItems="center" gap="8px" >
                        <FiPaperclip size="1.3rem" />
                        <ReactScroll to="keyAmenities" >
                        <Text> AMENITIES</Text>
                        </ReactScroll>
                    </Flex>
                    <Flex alignItems="center" gap="8px" >
                        <CiLocationOn size="1.3rem"  />
                        <ReactScroll to="location" >
                        <Text>LOCATION</Text>
                        </ReactScroll>
                    </Flex>
                    <Flex alignItems="center" gap="8px" >
                        <MdOutlinePolicy size="1.3rem"  />
                        <ReactScroll to="policy" >
                        <Text>POLICY&FEES</Text>
                        </ReactScroll>
                    </Flex>
                </Flex>
                <SimpleGrid columns={[1, 1, 2]} gap="1rem">
                    <SimpleGrid gap="1rem" columns={[2, 2, 2]} >
                        <Center p="3rem" boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' >
                            <Box>
                                <Text fontSize="23px" color="#33333" >Private Room</Text>
                                <Text fontSize="13.4" color="#999999" >Type of Property</Text>
                            </Box>
                        </Center>
                        <Center p="3rem" boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' >
                            <Box><Text fontSize="23px" color="#33333" >1</Text>
                                <Text fontSize="13.4" color="#999999" >Bathrooms</Text></Box>
                        </Center>
                        <Center p="3rem" boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' >
                            <Box>  <Text fontSize="23px" color="#33333" >3</Text>
                                <Text fontSize="13.4" color="#999999" >Max. Guests</Text></Box>
                        </Center>
                        <Center p="3rem" boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' >
                            <Box>    <Text fontSize="23px" color="#33333" >12</Text>
                                <Text fontSize="13.4" color="#999999" >Total Bookable Units</Text></Box>
                        </Center>
                    </SimpleGrid>
                    <Box p="1rem" pr="3rem" id="overview">
                        <Text>These AC rooms come equipped with a minibar, 32 inch LED TV, 24 hours running hot/cold water, intercom and Wifi facilities. We also provide all the basic toiletries and cleaning is done on a daily basis</Text>
                        <Text m="1rem 0" fontWeight="bold" >Best For</Text>
                        <Flex wrap="wrap" gap="1rem" >
                            {BESTFOR.map((item, i) => (
                                <Center fontSize="13px" p="5px 15px" border="1px solid #666666" color="#666666" key={i} >{item}</Center>
                            ))}
                        </Flex>
                        <Text _hover={{textDecoration:"underline"}} mt="4rem" color="#1E87F0" >What can you do in & around Betalbatim</Text>
                    </Box>
                </SimpleGrid>
                <Box  p="2rem 2rem 2rem 0" id="keyAmenities" >
                    <Heading borderBottom="1px solid #999999" pb="1.6rem" mr="2rem" color="black" fontWeight="400" fontSize="24px" mb="2rem">Key Amenities</Heading>
                    <Flex wrap="wrap" gap="1rem" >
                        {/* map the data and make flex wrap: wrap */}
                        {KEY_AMENITIES.map((item, i) => (
                            <Center fontSize="13px" p="5px 15px" border="1px solid #999999" color="#666666" key={i} >{item}</Center>
                        ))}
                    </Flex>
                    <Box>
                        <Heading fontSize="17px" m="2rem 0 1rem 0rem">Bedroom 1</Heading>
                        <Flex width="300px" wrap="wrap" gap="1rem" >
                            {/* map the data and make flex wrap: wrap */}
                            {BEDROOM1.map((item, i) => (
                                <Center fontSize="13px" p="5px 15px" border="1px solid #999999" color="#666666" key={i} >{item}</Center>
                            ))}
                        </Flex>
                    </Box>
                    <Box>
                        <Heading fontSize="17px" m="2rem 0 1rem 0rem" >Bedroom 2</Heading>
                        <Flex width="300px" wrap="wrap" gap="1rem" >
                            {/* map the data and make flex wrap: wrap */}
                            {BEDROOM2.map((item, i) => (
                                <Center fontSize="13px" p="5px 15px" border="1px solid #999999" color="#666666" key={i} >{item}</Center>
                            ))}
                        </Flex>
                    </Box>
                </Box>
                <Box className='hotel-details-page-map' id="location" >
                    <Text borderBottom="1px solid #999999" pb="1.6rem" mr="2rem" mb="2rem" color="black" fontWeight="400" fontSize="24px" >Map</Text>
                    <Image src={hotelMap} />
                </Box>
                <Box color="#666666" fontSize="15px" >
                    <Text borderBottom="1px solid #999999" pb="1.6rem" mr="2rem" mb="15px" color="#333333" fontSize="24px" >Policies & Fees</Text>
                    <SimpleGrid columns={[2, 2, 2]} gap="2rem" id="policy">
                        <Box>
                            <Text mb="8px" fontWeight="bold" >Default Cancellation Policy</Text>
                            <Text><span style={{fontWeight:"bold"}} >Non Refundable:</span> This is the strictest clause. As soon the booking is confirmed & payment is accepted, booking becomes non-refundable. Zero amount will be refunded to the customer if she or he cancels the booking.</Text>
                        </Box>
                        <Box>
                            <Text mb="8px" fontWeight="bold" >House Rules</Text>
                            <Text>Loud Music not allowed.</Text>
                        </Box>
                    </SimpleGrid>
                </Box>
            </Grid>
            <Box className='hotel-details-right-part' w="336px" p="2.5rem">
                <RightPart />
            </Box>

        </Flex>
        <AboutFooter />
        </>
    )
}

export default SingleHotelDetails