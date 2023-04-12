import { Outlet } from 'react-router-dom'
import { Container } from './styles'
import Header from '../../components/Header'
import Init from '../../components/Init'
import Menu  from '../../components/Menu'

export default function Main() {
  return (
    <Container>
      <Header />
      <Init />
      <Menu />
      <Outlet />
    </Container>
  )
}
