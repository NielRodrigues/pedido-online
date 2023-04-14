import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"
import { useSnack } from "../../../hooks/useSnack"


export function Vegetarians(){

  const {vegetarians} = useSnack()

  return (
    <>
      <Head title='Vegetarianos'/>
      <SnackTitle title='Vegetarianos' />
      <Snacks snacks={vegetarians} />
    </>
  )
}
