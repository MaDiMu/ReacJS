import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import PageNotFound from './Components/PageNotFound/PageNotFound'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import NavBar from './Components/NavBar/NavBar';
import { ContextProvider } from './Context/CartContext';
import Cart from './Components/Cart/Cart';






function App() {
 

  return (
  
    <ChakraProvider>
      <ContextProvider>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer title= "DJBPM" />}/>
          <Route path='/categoria/:categoryId' element={<ItemListContainer title= "DJBPM" />}/>
          <Route path='/productos/:productId' element={<ItemDetailContainer/>}/>
          <Route path='*' element ={<PageNotFound/>}/>
          <Route path='/checkout' element={<Checkout/>}/>
          <Route path='/cart' element={< Cart/> } />
        </Routes>
        </BrowserRouter>
        </ContextProvider>
    </ChakraProvider>
  )
}

export default App
