import { Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';




const ItemCount = () => {
  const [count, setCount]=useState(1)

  const stock= 5

  const incrementar = ()=> {
      count < stock && setCount (count + 1)
      
  }

  const decrementar = ()=> {
      count > 1 && setCount (count - 1)
      
  }
  return (
    <Flex>
    <Button onClick={decrementar}> - </Button>
    <Heading> {count}</Heading>
    <Button onClick={incrementar}> + </Button>
    <Button>Agregar al Carrito</Button>
    </Flex>
  )
}

export default ItemCount