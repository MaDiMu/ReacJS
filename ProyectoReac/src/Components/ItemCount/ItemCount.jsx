import { Button, Flex, Heading } from '@chakra-ui/react';
import React from 'react';
import useCounter from '../../Hooks/useCounter';




const ItemCount = ({stock, initialValue, onAdd}) => {
  const {count, incrementar, decrementar} = useCounter (initialValue, stock)
  return (
    <Flex>
      <Button onClick={decrementar}> - </Button>
      <Heading> {count}</Heading>
      <Button onClick={incrementar}> + </Button>
      <Button onClick={()=>onAdd(count)}>Agregar al Carrito</Button>
    </Flex>
  )
}

export default ItemCount