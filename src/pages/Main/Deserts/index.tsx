import { useState, useEffect } from "react"
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from '../../../components/Snacks'
import { getDeserts } from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"

export function Deserts(){

  const [deserts, setDeserts] = useState<SnackData[]>([])

  useEffect(() =>{
    (async () => {
      const desertRequest = await getDeserts()

      setDeserts(desertRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Sobremesas'/>
      <SnackTitle title='Sobremesas' />
      <Snacks snacks={deserts} />
    </>
  )
}
