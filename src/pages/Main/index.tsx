import { Outlet } from 'react-router-dom'
import { Container } from './styles'
import Header from '../../components/Header'
import Init from '../../components/Init'
import Menu  from '../../components/Menu'
import MenuMobile from '../../components/MenuMobile'

export default function Main() {
  return (
    <Container>
      <Header />
      <MenuMobile />
      <Init />
      <Menu />
      <Outlet />
    </Container>
  )
}
