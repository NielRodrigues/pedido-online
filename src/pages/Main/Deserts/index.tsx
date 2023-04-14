import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { useSnack } from "../../../hooks/useSnack"


export function Deserts(){

  const {deserts} = useSnack()

  return (
    <>
      <Head title='Sobremesas'/>
      <SnackTitle title='Sobremesas' />
      <Snacks snacks={deserts} />
    </>
  )
}
