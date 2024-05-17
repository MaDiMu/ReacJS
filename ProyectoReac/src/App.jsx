import './App.css'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import NavBar from './NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'
import ItemCount from './ItemCount/ItemCount'
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import ItemDetailContainer from './assets/ItemDetailContainer/ItemDetailContainer'
import PageNotFound from './PageNotFound/PageNotFound'





function App() {
 

  return (
  
    <ChakraProvider>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer title= "DJBPM" />}/>
        <Route path='/categoria/:categoryId' element={<ItemListContainer title= "DJBPM" />}/>
        <Route path='/productos/:productId' element={ItemDetailContainer} ></Route>
        <Route path='*' element ={<PageNotFound/>}></Route>
      </Routes>
    
       <ItemCount/>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App
