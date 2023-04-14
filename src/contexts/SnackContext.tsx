import { createContext, useState, useEffect, ReactNode } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { getBurgers, getCombo, getDeserts, getDrinks, getVegetarian } from '../services/api'


interface SnackContextProps{
  burgers: SnackData[]
  combos: SnackData[]
  drinks: SnackData[]
  deserts: SnackData[]
  vegetarians: SnackData[]
}

interface SnackProviderProps{
  children: ReactNode
}

export const SnackContext = createContext({} as SnackContextProps)

export function SnackProvider({children}: SnackProviderProps){

  const [burgers, setBurgers] = useState<SnackData[]>([])
  const [combos, setCombos] = useState<SnackData[]>([])
  const [deserts, setDeserts] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [vegetarians, setVegetarians] = useState<SnackData[]>([])

  useEffect(() =>{
    (async () => {

      try {

        const burgerRequest = await getBurgers()
        const comboRequest = await getCombo()
        const desertRequest = await getDeserts()
        const drinksRequest = await getDrinks()
        const vegetarianRequest = await getVegetarian()


        const requests = [burgerRequest, comboRequest, desertRequest, drinksRequest, vegetarianRequest]

        const [
          {data: burgerResponse},
          {data: comboResponse},
          {data: desertResponse},
          {data: drinksResponse},
          {data: vegetarianResponse},
        ] = await Promise.all(requests)

        setBurgers(burgerResponse)
        setCombos(comboResponse)
        setDeserts(desertResponse)
        setDrinks(drinksResponse)
        setVegetarians(vegetarianResponse)

      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <SnackContext.Provider value={{burgers, combos, deserts, drinks, vegetarians }}>
      {children}
    </SnackContext.Provider>
  )
}
