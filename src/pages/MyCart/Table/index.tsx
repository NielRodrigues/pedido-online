import { useCart } from '../../../hooks/useCart'
import {useState, useEffect} from 'react'
import { Container } from './styles'
import { TableDesktop } from './TableDesktop'
import { TableMobile } from './TableMobile'

export function Table(){
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth)
  const {cart} = useCart()


  useEffect(() => {
    function updateTableComponentBaseWindowWidth(){
      const currentWidth = document.documentElement.clientWidth
      setWindowWidth(currentWidth)
    }

    window.addEventListener('resize', updateTableComponentBaseWindowWidth)

    return () => {
      window.removeEventListener('resize', updateTableComponentBaseWindowWidth)
    }
  }, [])

  if(cart.length === 0){
    return (<h1>Ops! Parece que você não adicionou nenhum lanche, peça já agora</h1>)
  }

  return(
    <Container>
        {windowWidth > 768 ? <TableDesktop /> : <TableMobile />}
    </Container>
  )
}
