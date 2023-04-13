import { useState, useEffect } from "react"
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { getCombo } from "../../../services/api"
import { SnackData } from "../../../interfaces/SnackData"

export function Combos(){

  const [combos, setCombos] = useState<SnackData[]>([])

  useEffect(() =>{
    (async () => {
      const comboRequest = await getCombo()

      setCombos(comboRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Combos'/>
      <SnackTitle title='Combos' />
      <Snacks snacks={combos} />
    </>
  )
}
