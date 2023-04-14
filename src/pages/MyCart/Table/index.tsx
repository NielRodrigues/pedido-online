import { useCart } from '../../../hooks/useCart'
import { Container } from './styles'
import { TableDesktop } from './TableDesktop'

export function Table(){

  const {cart} = useCart()

  if(cart.length === 0){
    return (<h1>Ops! Parece que você não adicionou nenhum lanche, peça já agora</h1>)
  }

  return(
    <Container>
      <TableDesktop />
    </Container>
  )
}
