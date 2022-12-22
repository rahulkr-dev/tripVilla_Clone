import { Center, Flex, Grid, Heading, Input, Select, Text } from '@chakra-ui/react'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const unit = new Array(12).fill(0)
const RightPart = () => {
    let hoteldata = JSON.parse(localStorage.getItem("abc"));
    const [checkedIn,setCheckedIn] = useState('')
    const [checkedOut,setCheckedOut] = useState('')
    const [guest,setGuest] = useState(0)
    return (
        <Grid w="336px" color="#666666" mr="2rem">
            <Text fontSize="1.3rem" >Starting</Text>
            <Heading fontWeight="400" color="black" fontSize="3.5rem">₹{hoteldata.cheapestPrice}</Heading>
            <Text fontSize="1.2rem" p=" 0 0 0 10rem"  mt="-1.0rem">per night</Text>
            <Center opacity=".4" fontWeight="bold" fontSize="1rem" m="1rem 0" bg="red.100" color="red" p="13px">Select units</Center>
            <Select borderRadius="0" placeholder='Select units'>
                {
                    unit.map((item,i)=>(
                        <option key={i} value={i+1}>{`${i+1} units`}</option>

                    ))
                }
            </Select>
          
                <Input
                borderRadius="0"
                    placeholder="Select Date and Time"
                    size="md"
                    m="1rem 0"
                    type="datetime-local"
                    value={checkedIn}
                    onChange={(e) => setCheckedIn(e.target.value)}
                />
                <Input
                borderRadius="0"
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                    value={checkedOut}
                    onChange={(e) => setCheckedOut(e.target.value)}
                />
            <Select borderRadius="0"  m="1rem 0" placeholder='Select Guests'>
                <option value="1">1 guests</option>
                <option value="2">2 guests</option>
                <option value="3">3 guests</option>

            </Select>
            <Text  m="1rem 0" fontSize="13px" >Rateplan: Morning Breakfast (Continental Plan)</Text>
            <Link to="/booked">
            <Center fontWeight="bold" opacity=".5" p="1rem" cursor="pointer" color="#fff" bg="#1E87F0"
            

            >INSTANT BOOK</Center>
            </Link>
        </Grid>
    )
}

export default RightPart
