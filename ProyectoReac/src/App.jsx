import './App.css'
import ItemListContainer from './ItemListContainer/ItemListContainer'
import NavBar from './NavBar/NavBar'
import { ChakraProvider } from '@chakra-ui/react'


function App() {
 

  return (
  
    <ChakraProvider>
    <NavBar/>
    <ItemListContainer title= "DJBPM" />
    </ChakraProvider>
  )
}

export default App
