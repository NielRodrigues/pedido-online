import { createContext, useState, useEffect, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { toast } from 'react-toastify'
import { snackEmoji } from '../helpers/snackEmoji'

interface Snack extends SnackData{
  quantity: number
  subtotal: number
}

interface RemoveSnackFromCart{
  id: number
  snack: string
}

interface UpdateCartProps{
  id: number
  snack: string
  newQuantity: number
}

interface CartContextProps{
  cart: Snack[]
  addSnackIntoCart: (snack: SnackData) => void
  //removeSnackFromCart: ({id, snack}: RemoveSnackFromCart) => void
  //updateCart: ({id, snack, newQuantity} :UpdateCartProps) => void
}

interface CartProviderProps{
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: CartProviderProps){

  const [cart, setCart] = useState<Snack[]>([])

  function addSnackIntoCart(snack: SnackData): void{

    const snackExistentInCart = cart.find((item) => item.snack === snack.snack && item.id === snack.id)

    if(snackExistentInCart){
      const newCart = cart.map((item) => {
        if(item.id === snack.id){
          const quantity = item.quantity + 1
          const subtotal = item.price * quantity

          return {... item, quantity, subtotal}
        }
        return item
      })

      toast.success(`${snackEmoji(snack.snack)} Outro(a) ${snack.name} adicionado nos pedidos!`)
      setCart(newCart)
      return
    }

    const newSnack = {...snack, quantity: 1, subtotal: snack.price}
    const newCart = [...cart, newSnack]


    toast.success(`${snackEmoji(snack.snack)} ${snack.name} adicionado nos pedidos!`)
    setCart(newCart)
  }

  return (
    <CartContext.Provider value={{cart, addSnackIntoCart}}>
      {children}
    </CartContext.Provider>
  )
}
