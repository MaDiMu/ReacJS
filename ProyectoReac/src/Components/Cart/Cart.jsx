import React, { useContext } from 'react'
import Context from '../../Context/CartContext'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Flex,
    Heading,
  } from '@chakra-ui/react'
  import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
 
const Cart = () => {
    const {cart,getTotal,removeItem,cleanCart} = useContext (Context)
    if(cart.length ===0 ){
        return(
            <Flex direction={'column'} justify={'center'} align={'center'} mt={10}>
                <Heading> Todavia no agregastes productos</Heading>
                <Link to='/'>Ver productos</Link>
            </Flex>
        )
    } else {
  return (
    <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    <Thead>
      <Tr>
        <Th>Producto</Th>
        <Th>Cantidad</Th>
        <Th>Precio</Th>
        <Th>Subtotal</Th>
        <Th>
            <Button onClick={()=> removeItem(prod.id)}>
                <RiDeleteBin6Line />
            </Button>
        </Th>
      </Tr>
    </Thead>
    <Tbody>
        {
            cart.map((prod)=>(
             <Tr key={prod.id}>
             <Td>{prod.nombre}</Td>
             <Td>{prod.quantity}</Td>
             <Td>{prod.precio}</Td>
             <Td>{prod.precio * prod.quantity}</Td>
             <Td></Td>
           </Tr>
           ))
        }
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>Total: ${getTotal()}</Th>
        <Th>
            <Button onClick={() => cleanCart()}>
                Vaciar Carrito
            </Button>
        </Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
  )
    }
}

export default Cart