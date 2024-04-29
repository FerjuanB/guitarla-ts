import { useState, useEffect, useMemo} from 'react'

import {db} from '../data/db'
import type { Guitar, CartItem } from '../types/types'


export function useCart() {
    const initialCart =():CartItem[]=> {
        const localStCart = localStorage.getItem('cart')
        return localStCart ? JSON.parse(localStCart) : []
    }
    
        const [data]=useState(db)
        const [cart,setCart]=useState(initialCart)
    
        const MIN_ITEMS = 1
        const MAX_ITEMS = 5
    
        useEffect(() => {
            localStorage.setItem('cart',JSON.stringify(cart))
     }, [cart])
        
        function handleAddToCart(item :Guitar){
         
            const findI = cart.findIndex( guitar => guitar.id === item.id)
            if(findI >= 0){
    
                if(cart[findI].quantity >= MAX_ITEMS){
                    return
                }
    
                const updatedCart =[...cart]
    
                //aumentar la cantidad si ya existe
                updatedCart[findI].quantity++
                setCart(updatedCart)
                //esta logica de crear una copia del state con spread operator es para que se vaya actualizando automaticamente la propiedad quantity a medida que se presiona "agregar carrito" en el renderizado.
                //el codigo es inmutable.
            }else{
                //agregar al carrito si no existe
                const newItem : CartItem = {...item, quantity : 1}

            setCart([...cart,newItem])
            }
    
         
        }
    
     function removeFromCart (id : Guitar['id']){
       setCart(prevCart=>prevCart.filter(guitar=>guitar.id !== id))
     }  
    
    
     function increaseQuantity(id: Guitar['id']){
        const updatedCart = cart.map(item=>{
            if(item.id ===id  && item.quantity < MAX_ITEMS){
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updatedCart)
     }
    
    function clearCart(){
        setCart([])
    }
     function decreaseQuantity(id : Guitar['id']){
        const updatedCart = cart.map(item=>{
            if(item.id === id && item.quantity >MIN_ITEMS){
                return{
                    ...item,
                    quantity:item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart)
     }
    
       
    //State derivado,depende del state de app.jsx
    
    
  const isEmpty = useMemo(() => cart.length === 0, [cart]) 
  const cartTotal = useMemo(() => cart.reduce((total, item)=> total + (item.quantity*item.price),0), [cart])


    
    return {
        data,
        cart,
        handleAddToCart,
        removeFromCart,
        decreaseQuantity,
        increaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}

