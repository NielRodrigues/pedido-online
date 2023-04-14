import { Container, Item, Image, ItemText, Name, Description, Price, AddCart, Qntd } from "./styles"
import { FaShoppingCart } from 'react-icons/fa'
import { currencyFormat } from "../../helpers/currencyFormat"
import { SkeletonSnack } from "./SkeletonSnack"
import { SnackData } from "../../interfaces/SnackData"
import { useCart } from "../../hooks/useCart"

interface SnacksProps{
  snacks: SnackData[]
}

export function Snacks({snacks}: SnacksProps){

  const {cart, addSnackIntoCart} = useCart()

  return(
    <Container>
      {!snacks.length ?
      [1,2,3,4].map((n) => <SkeletonSnack key={n} />)

      :

      snacks.map((snack) => {

        const snackExistent = cart.find((item) => item.snack === snack.snack && item.id === snack.id )

        return(
          <Item key={snack.id}>
            {snackExistent && <Qntd>{snackExistent.quantity}</Qntd>}
            <Image src={snack.image} alt="Imagem"/>
            <ItemText>
              <Name>{snack.name}</Name>
              <Description>{snack.description}</Description>
            </ItemText>
            <Price>{currencyFormat(snack.price)}</Price>
            <AddCart onClick={() => addSnackIntoCart(snack)}>
              <FaShoppingCart />
              Adicionar ao Carrinho
            </AddCart>
          </Item>
        )
      })}
    </Container>
  )

}
