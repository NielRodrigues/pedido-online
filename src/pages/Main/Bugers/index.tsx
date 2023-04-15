import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from '../../../components/Snacks'
import { useSnack } from "../../../hooks/useSnack"

export function Burgers(){
  const {burgers} = useSnack()

  return (
    <>
      <Head title='Hambúrgueres' description="Nosso melhores Hambúrgueres"/>
      <SnackTitle title='Hambúrgueres' />
      <Snacks snacks={burgers} />
    </>
  )
}
