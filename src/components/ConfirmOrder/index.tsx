import { currencyFormat } from '../../helpers/currencyFormat'
import { useCart } from '../../hooks/useCart'
import { Container, Button, Total } from './styles'

export function ConfirmOrder(){

  const {cart} = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0)

  return(
    <Container>
      <Button type='button'>Finalizar Pedido</Button>
      <Total>Total <span>{currencyFormat(totalAmount)}</span></Total>
    </Container>
  )
}
