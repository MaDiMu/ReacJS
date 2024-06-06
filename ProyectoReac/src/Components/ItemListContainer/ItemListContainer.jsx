import { Box, Center, Flex, Heading } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { getProducts, getProductsByCategory } from '../../Data/AsynMocks';
import ItemList from '../ItemList/ItemList';
import {useNavigate, useParams } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react'
import {db} from "../../config/firebase"
import { collection, getDocs, query, where } from 'firebase/firestore';



const ItemListContainer = ({title}) => {
  const [products, setProducts,] = useState([]);
  const [loading, setloading]= useState (true);
  const {categoryId} = useParams ();
  
 
  

  useEffect (()=>{
    setloading(true)
    const getData = async () =>{
      const coleccion = collection(db,'productos')
      const queryRef = !categoryId ?
      coleccion
      :
      query(coleccion, where('categoria','==',categoryId))
      const response = await getDocs(queryRef)

      const productos = response.docs.map((doc)=>{
        const newItem ={
          ...doc.data(),
          id:doc.id
        }
        return newItem
        
      })
      setProducts(productos)
      setloading(false)
      
    }
    getData()
  },[categoryId])
  return (
    <Box>
      <Heading textAlign={"center"} mt={3}>
          {title}
      </Heading>
     {
        loading ?
        <Flex justify={'Center'} align={'center'} h={'50vh'}>
          <Spinner color='red.500' />
        </Flex>
        :<ItemList products={products}/>
      }
     
    </Box>
  )
}

export default ItemListContainer