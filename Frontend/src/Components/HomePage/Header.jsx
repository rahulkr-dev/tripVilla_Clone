
import React from 'react'
import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, HStack, Image, Input, InputGroup, InputLeftElement, Select, Grid, Center, Heading, Text, useToast } from '@chakra-ui/react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { searchLocationResult, search_from_homePage, searchFinalData } from './../../redux/landingPage/search.action';
import { guestArr } from './demoData';
import { Navigate } from 'react-router-dom';

const Header = () => {
    const [location, setLocation] = useState('');
    const [checkedIn,setCheckedIn] = useState('')
    const [checkedOut,setCheckedOut] = useState('')
    const [guest,setGuest] = useState(0)
    const [toggle,setToggle] = useState(true)
    const [varified,setVarified] = useState(false)
    const dispatch = useDispatch()
    const toast = useToast()

    let searchList = useSelector(store => store.search.data)
    let store = useSelector(store => store.search)
    // console.log(searchList)
    if(varified){
        // console.log(store.searchData)
        return <Navigate to={`/hotels`} />
    }

    const handleLocation = (e) => {
        setLocation(e.target.value)
        dispatch(search_from_homePage(e.target.value))
    }

    const handleLocationItem = (item)=>{
        console.log(item)
        let res = item.name + ", "+ item.cuisine
        dispatch(searchLocationResult(res))
        setLocation(res);
        setToggle(false)
        
    }

    const handleSearchSubmit = (e)=>{
        if(!location && !checkedIn && !checkedOut){
            toast({
                title: 'Error.',
                description: "You need to Enter all the field.",
                status: 'error',
                duration: 9000,
                isClosable: true,
              })
              return;
        }else{
            let payload = {
                location:location,
                checkIn:checkedIn,
                checkOut:checkedOut,
                guests:guest
            }
            dispatch(searchFinalData(payload))
            setVarified(true)
        }

    }
    // console.log(location)
    // console.log(guest)

    return (
        <Box pos="relative">
            <Box>
                <Image src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/Pimal2-1.2d5d237dbd32.jpg"
                    alt='header iamge'
                    h={['70vh','70vh',"calc(100vh-200px)"]}
                    maxH="600px"
                    w="full"
                    filter="contrast(50%)"
                />
            </Box>
            <Heading textAlign="center" fontSize={['18px','0',"29px"]} left="17%" color="#fff" fontWeight="bold" pos="absolute" top={['1rem',"10%","27%"]}>Book Hotels Vacation Rentals Top Holiday</Heading>
            <Heading textAlign="center" fontSize={['14px','0',"29px"]} left="17%" color="#fff" fontWeight="bold" pos="absolute" top={['4.5rem','3.5rem',"33%"]}>Top Holiday Homes - Villas, Apartments & Homestays</Heading>
            <Grid
                w={{lg: "880px" }} templateColumns={{base:"repeat(1,1fr)", lg: "repeat(5,1fr)" }} bg="#ffffff"
                pos="absolute" top="50%" left="50%" transform="translate(-50%,-50%)"
                p="10px"
                boxSize="border-box"

            >
                <Box>
                    <InputGroup w={{lg: "286px" }} >

                        <InputLeftElement
                            pointerEvents='none'
                            children={<SearchIcon color='gray.300' />}
                        />

                        <Input value={location} onChange={handleLocation} type='tel' placeholder='Location' />
                    </InputGroup>
                    {
                        location && searchList.length!=0 && toggle && <Box overflow="hidden" pos="absolute" top="100%" w="18rem" h="10rem" bg="white" color="#666666">

                            {location && searchList.map(item => (

                                <Box cursor="pointer" onClick={()=>handleLocationItem(item)} key={item.id} p="4px 10px" borderBottom="1px solid gray">{item.cuisine} , {item.name}</Box>
                            ))}

                        </Box>
                    }
                </Box>
                <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                    value={checkedIn}
                    onChange={(e)=>setCheckedIn(e.target.value)}
                />
                <Input
                    placeholder="Select Date and Time"
                    size="md"
                    type="datetime-local"
                    value={checkedOut}
                    onChange={(e)=>setCheckedOut(e.target.value)}
                />
                <Select onChange={(e)=>setGuest(e.target.value-49)} placeholder='Select Guests'>
                    {
                        guestArr.map((item,i)=>(
                            <option  key={item} value={i}>{item}</option>
                        ))
                    }
                </Select>
                <Center  cursor="pointer" color="#fff" bg="#1E87F0"
                onClick={handleSearchSubmit}
                >Search</Center>
            </Grid>
        </Box>
    )
}

export default Header