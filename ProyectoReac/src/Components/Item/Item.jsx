import React from 'react';
import { Card, CardBody, CardFooter, Stack, Heading,Text, Divider,ButtonGroup, Image,Button } from '@chakra-ui/react';
import {Link,} from "react-router-dom"

const Item = ({nombre, precio,img,id}) => {
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
        <Button variant='solid' colorScheme='blue'>
          <Link to= {`/productos/${id}`}>
          Ver detalle
          </Link>
        </Button>
       
      </ButtonGroup>
      
    </CardFooter>
  </Card>
  )
}

export default Item