import React from "react"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Text,
  } from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"
import SidebarContent from "./SidebarContent"
export default function NavDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
        <>
        <HamburgerIcon _hover={{cursor:"pointer"}} boxSize="1.4rem"  onClick={onOpen} />
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg="#222222">
            <DrawerCloseButton color="#fff" />
            <DrawerHeader>Create your account</DrawerHeader>
  
            <DrawerBody>
              <SidebarContent onClose={onClose} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
    </>
    )
  }