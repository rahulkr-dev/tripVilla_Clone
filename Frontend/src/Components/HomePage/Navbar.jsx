import React from 'react'
import { Button, Flex, IconButton, Image, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons"
import {CgProfile} from "react-icons/cg"
import LOGO from "../../Assects/logo.png"

const Navbar = () => {
  return (
    <Flex bg="#262626" pr="3rem" justify="space-between" align="center" h="60px">
      <Image
      mt="-0.2rem"
      overflow="hidden"
      borderRadius="full"
       boxSize='90px'
       src={LOGO}
       alt='The Cozy Trip'
      />
      <Flex color="white" gap="2rem">
        <Menu>
          <MenuButton >
            <CgProfile size="1.6rem" />
          </MenuButton>
          <MenuList color="#484848">
            <MenuItem>Rahul</MenuItem>
            <MenuItem>SignOut</MenuItem>
            
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton >
            INR <ChevronDownIcon/>
          </MenuButton>
          <MenuList color="#484848">
            <MenuItem>INR</MenuItem>
            <MenuItem>BAN</MenuItem>
            <MenuItem>EURO</MenuItem>
            
          </MenuList>
        </Menu>
        <Menu bg="#262626">
          <MenuButton>
            <HamburgerIcon/>
          </MenuButton>
          <MenuList color="#484848">
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  )
}

export default Navbar