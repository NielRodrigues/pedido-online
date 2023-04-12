import { Container, MenuBar, Section, Section2, Logo, NavBar, Menu, Link, Wpp, WppIcon, Tel, Text, Text2, Buttons, User, Cart, Requests } from './styles'
import { MdLocalPhone } from 'react-icons/md'
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa'
import logo from '../../assets/image/logo.png'

export default function Header() {
  return (
    <Container>
      <MenuBar>
        <Section>
          <Logo src={logo} />
          <NavBar>
            <Menu>
              <Link href='#' className='selected'>Home</Link>
            </Menu>
            <Menu>
              <Link href='#menu'>Menu</Link>
            </Menu>
            <Menu>
              <Link href='#pages'>Páginas</Link>
            </Menu>
            <Menu>
              <Link href='#shop'>Comprar</Link>
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
            <Cart>
              <FaShoppingCart />
              <Requests>2</Requests>
            </Cart>
          </Buttons>
        </Section2>
      </MenuBar>
    </Container>
  )
}
