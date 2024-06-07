import React, { useContext, useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Button,
    Flex,
    Heading,
  } from '@chakra-ui/react'
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import Context from '../../Context/CartContext'



const checkout = () => {
    const [user,setUser] = useState({
        name:'',
        email:'',
        repeatedEmail:'',
        phone:'',
    })
    const [emailMatch, setEmailMatch] = useState(true)
    const [error, setError] = useState({})
    const {cart,getTotal} = useContext(Context)
    const updateUser = (event)=>{
        setUser((user)=>({
            ...user,
            [event.target.name]: event.target.value
        }))
    }
    const validateEmails = () =>{
        if(user.email===user.repeatedEmail){
            setEmailMatch(true)
        }else{
            setEmailMatch(false)
        }
    }
    const validateForm = ()=>{
        const errors={}
        if(!user.name){
            errors.name= "Tenes que agregar un nombre"
        }
        setError(errors)
        return Object.keys(errors).length === 0
    }
    const getOrder = async () =>{
        const isFormValid = validateForm()
        validateEmails()
        if(isFormValid && emailMatch){
            const ordersCollection = collection(db,'orders')
            try {
                for (const item of cart){
                    const productRef = doc(db,'productos', item.id)
                    const productDoc = await getDoc (productRef)
                    const currentStock = productDoc.data().stock
                    if (currentStock >= item.quantity){
                        await updateDoc(productRef,{
                            stock: currentStock - item.quantity
                        })

                    }else
                        console.log(stock)
                }
                const order = {
                    buyer: user,
                    cart: cart,
                    total: getTotal()
    
                }
                const orderDocRef = await addDoc(ordersCollection,order)
                
            } catch (error) {
                
            }
          
            
        }
    }
  return (
        <Flex direction={'column'} justify={'center'} align={'center'} mt={10}>
            <Heading mb={2}>Datos de facturacion</Heading>
            <FormControl w={'40%'}>
                <Input type='text'name='name' placeholder='Ingrese el nombre' onChange={updateUser} mb={2}/>
                <Input type='email'name='email' placeholder='Ingrese el email' onChange={updateUser} mb={2}/>
                <Input type='email'name='repeatedEmail' placeholder='Ingrese nuevamente el email' onChange={updateUser} mb={2}/>
                <Input type='text'name='phone' placeholder='Ingrese su telefono' onChange={updateUser} mb={2}/>
                <Flex w={'100%'} justify={'center'} align={'center'}>
                    <Button onClick={getOrder}> Finalizar Compra </Button>
                </Flex>
            </FormControl>
        </Flex>
  )
}

export default checkout