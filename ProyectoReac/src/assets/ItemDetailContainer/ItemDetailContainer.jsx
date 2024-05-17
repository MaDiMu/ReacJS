import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {useParams} from 'react-router-dom'
import { getProductById } from '../../Data/AsynMocks'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const[productos, setProducto]=useState({})
    const[productId]= useParams ()

   

    useEffect(()=>{
        getProductById(productId)
        .then((prod)=>setProducto(prod))
        .catch((error)=> console.log(error))
    },[productId])

  return (
    <div>
        <ItemDetail {...productos}/>
    </div>
  )
}

export default ItemDetailContainer