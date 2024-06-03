
import React, { useContext } from 'react' ;
import { Badge, Box, Flex } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Context from '../../Context/CartContext';


const CartWidget = () => {
  const {getQuantity}= useContext(Context)
  return (
  <Flex mr={3}>
    <AiOutlineShoppingCart />
    <Flex justify={'center'} align={'center'} h={'50%'} w={'50%'}>
      <Badge borderRadius={'50%'} color={'black'} fontSize={'md'}>
        {getQuantity()}
      </Badge>
    </Flex>
  </Flex>
  )
}

export default CartWidget