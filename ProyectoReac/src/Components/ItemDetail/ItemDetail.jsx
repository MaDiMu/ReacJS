import React, { useContext, useState } from 'react'
import { Card, CardBody, CardFooter, Stack, Heading,Text, Divider,ButtonGroup, Image,Button, Flex } from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';
import Context from '../../Context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({nombre, precio,stock,img, id,descripcion, categoria}) => {
  const [quantity, setQuantity] = useState (0)
  const {addItem} = useContext (Context)

  const onAdd=(quantity) => {

    const item = {
      id, nombre, precio, stock
    }
    setQuantity(quantity)
    addItem (item,quantity)

    console.log(`Agregastes ${quantity} unidades`)
  }

  return (
    <>
    
    <Card w={'100%'} h={'100%'} boxShadow={'lg'}>
      <Flex>
        <text ml={2} fontSize={'md'}>Categoria: {categoria}</text>
      </Flex>
    <Flex>
      <Image
        src={img}
        alt={nombre}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{nombre}</Heading>
        <Text>
          {descripcion}
        </Text>
        
        <Text color='blue.600' fontSize='2xl'>
          ${precio}
        </Text>
      </Stack>
      </Flex>

      {
        quantity >0 ?
        <Link to={'/cart'}> Ir al Carrito </Link> 
        :
        <Flex>
          <ItemCount stock={stock} initialValue={1} onAdd={onAdd}/>
        </Flex>
       }
  </Card>
  </>
  )

}

export default ItemDetail