interface TitleProps{
  title: string
}
import { Title } from "./styles"

export function SnackTitle({title}: TitleProps){

  return(
    <Title id='pages'>{title}</Title>
  )

}
