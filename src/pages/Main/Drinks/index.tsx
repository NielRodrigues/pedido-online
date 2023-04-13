import { useState, useEffect } from "react"
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from '../../../components/Snacks'
import { getDrinks } from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"

export function Drinks(){

  const [drinks, setDrinks] = useState<SnackData[]>([])

  useEffect(() =>{
    (async () => {
      const drinkRequest = await getDrinks()

      setDrinks(drinkRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Bebidas' />
      <SnackTitle title='Bebidas' />
      <Snacks snacks={drinks} />
    </>
  )
}
