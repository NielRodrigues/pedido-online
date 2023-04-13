import { Container, Item, Image, ItemText, Name, Description, Price, AddCart } from "./styles"
import { FaShoppingCart } from 'react-icons/fa'
import { currencyFormat } from "../../helpers/currencyFormat"
import { SkeletonSnack } from "./SkeletonSnack"
import { SnackData } from "../../interfaces/SnackData"

interface SnacksProps{
  snacks: SnackData[]
}

export function Snacks({snacks}: SnacksProps){

  return(
    <Container>
      {!snacks.length ?
      [1,2,3,4].map((n) => <SkeletonSnack key={n} />)

      :

      snacks.map((snack) => (
        <Item key={snack.id}>
          <Image src={snack.image} alt="Imagem"/>
          <ItemText>
            <Name>{snack.name}</Name>
            <Description>{snack.description}</Description>
          </ItemText>
          <Price>{currencyFormat(snack.price)}</Price>
          <AddCart>
            <FaShoppingCart />
            Adicionar ao Carrinho
          </AddCart>
        </Item>
      ))}
    </Container>
  )

}
