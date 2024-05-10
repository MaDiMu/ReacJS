
import React from 'react';
import { Box } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from "react-icons/ai";


const CartWidget = () => {
  return (
  <Box mr={3} color={"white"}>
    <AiOutlineShoppingCart />
  </Box>
  )
}

export default CartWidget