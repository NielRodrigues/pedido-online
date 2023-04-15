import { ConfirmOrder } from '../../../../components/ConfirmOrder'
import { currencyFormat } from '../../../../helpers/currencyFormat'
import { useCart } from '../../../../hooks/useCart'
import { Container } from './styles'
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai"
import { FaTrashAlt } from "react-icons/fa"


export function TableMobile(){

  const {cart, removeSnackFromCart, snackCartIncrement, snackCartDescrement} = useCart()

  return(
    <Container>
      {
        cart.map((item) => (
          <div className='snack' key={`${item.snack}-${item.id}`}>
            <div>
              <img src={item.image} alt={item.name} />
            </div>
            <div>
              <h4>{item.name}</h4>
              <span>{currencyFormat(item.price)}</span>

              <div>
                <div>
                  <button type='button' onClick={() => snackCartDescrement(item)}>
                    <AiFillMinusCircle />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button type='button' onClick={() => snackCartIncrement(item)}>
                    <AiFillPlusCircle />
                  </button>
                </div>
                <button type='button' onClick={() => removeSnackFromCart(item)}>
                  <FaTrashAlt />
                </button>
              </div>
              <h5><span>Subtotal</span> {currencyFormat(item.subtotal)}</h5>
            </div>
          </div>

        ))
      }
      <ConfirmOrder />
    </Container>
  )
}
