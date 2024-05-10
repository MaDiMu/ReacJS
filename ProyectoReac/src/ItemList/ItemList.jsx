import React from 'react'
import Item from '../Item/Item'
import { Box } from '@chakra-ui/react'

const ItemList = ({products}) => {

   
  return (
    <Box>
        {products.map((elem)=>(
            <Box key={elem.id}>
            <Item {...elem}/>
            </Box>
        ))}
    </Box>
  )
}

export default ItemList