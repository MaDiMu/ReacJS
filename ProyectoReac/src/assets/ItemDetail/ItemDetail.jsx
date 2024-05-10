import React from 'react'
import ItemCount from '../../ItemCount/ItemCount'

const ItemDetail = ({nombre, precio,stock,img}) => {
    
  return (
    <div>
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
    </CardFooter>
  </Card>
    </div>
  )
}

export default ItemDetail