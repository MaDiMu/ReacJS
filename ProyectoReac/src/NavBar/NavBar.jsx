import React from 'react';
import { Center, Heading } from '@chakra-ui/react';
import CartWidget from '../CartWidget/CartWidget';
import { CgChevronDownR } from "react-icons/cg";
import { Flex } from '@chakra-ui/react';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
  } from '@chakra-ui/react'
import logo from "../../../img/logobpm.jpeg"
import "./NavBar.css"

const NavBar = () => {
  return (
    <Flex justify={"space-between"} align={"center"} className='Cart'>
      
          <Heading ml={3} > <img src={logo} alt="logo" className='Logo' /> </Heading>
          <Menu>
          <MenuButton as={Button} rightIcon={<CgChevronDownR />} alignItems={"center"}>
              DJBPM
          </MenuButton>
          <MenuList >
              <MenuItem>INICIO</MenuItem>
              <MenuItem>Mixer</MenuItem>
              <MenuItem>Auriculares</MenuItem>
              <MenuItem>Controlador</MenuItem>
             
          </MenuList>
          </Menu>
        <CartWidget/>
    </Flex>
  )
}

export default NavBar