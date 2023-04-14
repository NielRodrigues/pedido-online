import { Container, MenuBar, Section, Section2, Logo, NavBar, Menu, LinkMenu, Wpp, WppIcon, Tel, Text, Text2, Buttons, User, Cart, Requests } from './styles'
import { MdLocalPhone } from 'react-icons/md'
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import logo from '../../assets/image/logo.png'
import { useCart } from '../../hooks/useCart'

export default function Header() {

  const {cart} = useCart()

  return (
    <Container>
      <MenuBar>
        <Section>
          <Logo src={logo} />
          <NavBar>
            <Menu>
              <LinkMenu href='#' className='selected'>Home</LinkMenu>
            </Menu>
            <Menu>
              <LinkMenu href='#menu'>Menu</LinkMenu>
            </Menu>
            <Menu>
              <LinkMenu href='#pages'>Páginas</LinkMenu>
            </Menu>
            <Menu>
              <LinkMenu href='#shop'>Comprar</LinkMenu>
            </Menu>
          </NavBar>
        </Section>
        <Section2>
          <Wpp>
            <WppIcon>
              <MdLocalPhone />
            </WppIcon>
            <Tel>
              <Text2>WhatsApp</Text2>
              <Text>(00) 0 0000-0000</Text>
            </Tel>
          </Wpp>
          <Buttons>
            <User>
              <FaUserAlt />
            </User>
            <Cart to={'cart'}>
              <FaShoppingCart />
              {cart.length ? <Requests>{`${cart.length}`.padStart(2, '0')}</Requests> : null}
            </Cart>
          </Buttons>
        </Section2>
      </MenuBar>
    </Container>
  )
}
