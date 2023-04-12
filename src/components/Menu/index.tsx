import { Container, Content, Title, Foods, List, Link, Item, Image, Name } from './styles'
import hamburguer from '../../assets/image/hamburguer.png'
import combo from '../../assets/image/combo.png'
import vegano from '../../assets/image/vegano.png'
import bebidas from '../../assets/image/bebidas.png'
import sobremesa from '../../assets/image/sobremesa.png'

export default function Menu() {
  return (
    <Container id='menu'>
      <Content>
        <Title>Menu</Title>
        <Foods>
          <List>
            <Item>
              <Link href='#' className='active'>
                <Image src={hamburguer} alt='Hambúguer' />
                <Name>Hambúrgueres</Name>
              </Link>
            </Item>
            <Item>
              <Link href='#'>
                <Image src={combo} alt='Hambúguer' />
                <Name>Combos</Name>
              </Link>
            </Item>
            <Item>
              <Link href='#'>
                <Image src={vegano} alt='Hambúguer' />
                <Name>Vegetariano</Name>
              </Link>
            </Item>
            <Item>
              <Link href='#'>
                <Image src={bebidas} alt='Hambúguer' />
                <Name>Bebidas</Name>
              </Link>
            </Item>
            <Item>
              <Link href='#'>
                <Image src={sobremesa} alt='Hambúguer' />
                <Name>Sobremesas</Name>
              </Link>
            </Item>
          </List>
        </Foods>
      </Content>
    </Container>
  )
}
