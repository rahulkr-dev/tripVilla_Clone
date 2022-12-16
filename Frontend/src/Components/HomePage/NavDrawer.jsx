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
  } from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"
export default function NavDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
        <>
        <HamburgerIcon onClick={onOpen} />
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
              rahul
            </DrawerBody>
  
            <DrawerFooter>
             this is footer
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
    </>
    )
  }