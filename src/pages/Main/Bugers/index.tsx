import { useState, useEffect } from "react"
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from '../../../components/Snacks'
import { getBurgers } from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"

export function Burgers(){

  const [burgers, setBurgers] = useState<SnackData[]>([])

  useEffect(() =>{
    (async () => {
      const burgerRequest = await getBurgers()

      setBurgers(burgerRequest.data)
    })()
  }, [])



  return (
    <>
      <Head title='Hambúgueres' description="Nosso melhores Hambúrgueres"/>
      <SnackTitle title='Hambúgueres' />
      <Snacks snacks={burgers} />
    </>
  )
}
