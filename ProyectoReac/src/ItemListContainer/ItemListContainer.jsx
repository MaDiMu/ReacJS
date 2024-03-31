import { Box, Center, Heading } from '@chakra-ui/react'
import React from 'react'

const ItemListContainer = ({title}) => {
  return (
    <Box>
      <Heading textAlign={"center"} mt={3}>
          {title}
      </Heading>
    </Box>
  )
}

export default ItemListContainer