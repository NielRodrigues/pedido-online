import { Container, Link, Icon } from './styles'
import burger from '../../assets/image/burger-icon.png'
import combo from '../../assets/image/combo-icon.png'
import vegetarian from '../../assets/image/vegetarian-icon.png'
import drink from '../../assets/image/drink-icon.png'
import desert from '../../assets/image/desert-icon.png'

export default function MenuMobile() {

  return (
    
    <Container>
      <Link to='/'>
        <Icon src={burger} alt='Hambúrguer' />
      </Link>
      <Link to='combos'>
        <Icon src={combo} alt='Combo' />
      </Link>
      <Link to='vegetarians'>
        <Icon src={vegetarian} alt='Vegetarianos' />
      </Link>
      <Link to='drinks'>
        <Icon src={drink} alt='Bebidas' />
      </Link>
      <Link to='deserts'>
        <Icon src={desert} alt='Sobremesas' />
      </Link>
    </Container>
  )
}
