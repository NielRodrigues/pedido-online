import { ConfirmOrder } from '../../../../components/ConfirmOrder'
import { currencyFormat } from '../../../../helpers/currencyFormat'
import { useCart } from '../../../../hooks/useCart'
import { Container } from './styles'
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"
import { FaTrashAlt } from "react-icons/fa"


export function TableDesktop(){

  const {cart, removeSnackFromCart, snackCartIncrement, snackCartDescrement} = useCart()

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanches</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((item) => (
              <tr key={`${item.snack}-${item.id}`}>
                <td>
                  <img src={item.image} alt={item.name} />
                </td>
                <td>
                  <h4>{item.name}</h4>
                  <span>{currencyFormat(item.price)}</span>
                </td>
                <td>
                  <div>
                    <button onClick={() => snackCartDescrement(item)} type='button'>
                      <AiFillMinusCircle />
                    </button>
                    <span><h5>{`${item.quantity}`.padStart(2, '0')}</h5></span>
                    <button onClick={() => snackCartIncrement(item)} type='button'>
                      <AiFillPlusCircle />
                    </button>
                  </div>
                </td>
                <td>
                  <h5>{currencyFormat(item.subtotal)}</h5>
                </td>
                <td>
                  <button type='button' onClick={() => removeSnackFromCart(item)}>
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <ConfirmOrder />
    </Container>
  )
}
