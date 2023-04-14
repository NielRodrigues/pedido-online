import { useSnack } from "../../../hooks/useSnack"
import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

export function Combos(){

  const {combos} = useSnack()

  return (
    <>
      <Head title='Combos'/>
      <SnackTitle title='Combos' />
      <Snacks snacks={combos} />
    </>
  )
}
