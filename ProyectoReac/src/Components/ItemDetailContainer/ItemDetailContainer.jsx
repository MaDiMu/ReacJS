import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import { Box, Flex} from '@chakra-ui/react';
import { doc, getDoc } from 'firebase/firestore';
import {db} from '../../config/firebase'

const ItemDetailContainer = () => {
    const[producto, setProducto]=useState({})
    const [loading, setLoading] = useState(true)
  
    const[productId]= useParams ()

    const navigate = useNavigate() 

    useEffect(()=>{
        const getProduct = async()=>{
          const queryRef = doc(db,'productos',productId)
          const response = await getDoc(queryRef)
          const newItem ={
            ...response.data(),
            id: response.id
          }
          setProducto(newItem)
          setLoading(false)
          
        }
        getProduct()
    },[productId])

  return (
    <>
    {
      loading ?
        <Flex justify={'Center'} align={'center'} h={'50vh'}>
          <Spinner color='red.500' />
        </Flex>
        :
    <Box>
        <ItemDetail {...producto}/>
    </Box>
    }
    </>
  )
}

export default ItemDetailContainer