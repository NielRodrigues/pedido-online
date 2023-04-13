import { useState, useEffect } from "react"
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { getVegetarian } from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"

export function Vegetarians(){

  const [vegetarians, setVegetarians] = useState<SnackData[]>([])

  useEffect(() =>{
    (async () => {
      const vegetarianRequest = await getVegetarian()

      setVegetarians(vegetarianRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Vegetarianos'/>
      <SnackTitle title='Vegetarianos' />
      <Snacks snacks={vegetarians} />
    </>
  )
}
