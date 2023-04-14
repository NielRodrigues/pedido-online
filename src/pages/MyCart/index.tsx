import { Container, Header, Logo, Requests, TextContainer, Title, Subtitle } from './styles'
import { Table } from './Table'
import { FaShoppingCart } from 'react-icons/fa'
import logo from '../../assets/image/logo.png'
import { useCart } from '../../hooks/useCart'

export default function MyCart() {

  const {cart} = useCart()

  return (
    <Container>
      <Header>
        <Logo src={logo} alt='Logo'/>
        <Requests>
          <TextContainer>
            <Title>Meus pedidos</Title>
            <Subtitle>{`${cart.length}`.padStart(2, '0')} Lanches</Subtitle>
          </TextContainer>
          <FaShoppingCart />
        </Requests>
      </Header>

      <Table />
    </Container>
  )
}
