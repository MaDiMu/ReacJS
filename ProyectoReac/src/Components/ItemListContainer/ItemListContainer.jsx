import { Box, Center, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../Data/AsynMocks';
import ItemList from '../ItemList/ItemList';
import {useNavigate, useParams } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react'



const ItemListContainer = ({title}) => {
  const [products, setProducts] = useState([])
  const [loading, setloading]= useState (true)
  const {categoryId} = useParams ()
  const navigate =useNavigate()
 
  

  useEffect (()=>{
    const dataProductos = categoryId ? getProductsByCategory(categoryId):
    getProducts()

    dataProductos
        .then((el)=>{if (!prod){
          navigate('/*')
        }
        else{
        setProducts(el)}})
        .catch((error) =>  console.log(error))
        .finally(()=> setloading(false))
  },[categoryId])
  return (
    <Box>
      <Heading textAlign={"center"} mt={3}>
          {title}
      </Heading>
      {
        loading ?
        <Spinner color='red.500' />
        :<ItemList products={products}/>
      }
     
    </Box>
  )
}

export default ItemListContainer