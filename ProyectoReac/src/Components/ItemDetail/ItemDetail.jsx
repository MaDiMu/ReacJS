import React, { useContext } from 'react'
import { Card, CardBody, CardFooter, Stack, Heading,Text, Divider,ButtonGroup, Image,Button } from '@chakra-ui/react';
import ItemCount from '../ItemCount/ItemCount';
import Context from '../../Context/CartContext';

const ItemDetail = ({nombre, precio,stock,img, id}) => {
  
  const {addItem} = useContext (Context)

  const onAdd=(quantity) => {

    const item = {
      id, nombre, precio, stock
    }
    addItem (item,quantity)

    console.log(`Agregastes ${quantity} unidades`)
  }

  return (
    
        <Card maxW='sm'>
    <CardBody>
      <Image
        src={img}
        alt={nombre}
        borderRadius='lg'
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md'>{nombre}</Heading>
        
        <Text color='blue.600' fontSize='2xl'>
          ${precio}
        </Text>
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter>
      <ButtonGroup spacing='2'>
      </ButtonGroup>
      <ItemCount stock={stock} initialValue={1} onAdd={onAdd}/>
    </CardFooter>
  </Card>
  
  )
}

export default ItemDetail