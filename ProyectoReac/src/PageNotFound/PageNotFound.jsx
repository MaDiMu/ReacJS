import { Image } from '@chakra-ui/react'
import React from 'react'
import errorImg from '../../../img/error404.avif'

function PageNotFound() {
  return (
   <Image src={errorImg}/>
  )
}

export default PageNotFound