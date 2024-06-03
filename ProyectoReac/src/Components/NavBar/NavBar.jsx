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
import logo from "../../assets/img/logobpm.jpeg"
import "./NavBar.css"
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex justify={"space-between"} align={"center"} className='Cart'>
      
          <Heading ml={3} > <img src={logo} alt="logo" className='Logo' /> </Heading>
          <Menu>
          <MenuButton as={Button} rightIcon={<CgChevronDownR />} alignItems={"center"}>
              DJBPM
          </MenuButton>
          <MenuList >
              <MenuItem><Link to="/categoria/Inicio" >INICIO</Link></MenuItem>
              <MenuItem><Link to="/categoria/Mixer" >MIXER</Link></MenuItem>
              <MenuItem><Link to="/categoria/Auriculares" >AURICULARES</Link></MenuItem>
              <MenuItem><Link to="/categoria/Controlador" >CONTROLADOR</Link></MenuItem>
             
          </MenuList>
          </Menu>
        <Link to='/cart'>
          <CartWidget/>
        </Link>
    </Flex>
  )
}

export default NavBar