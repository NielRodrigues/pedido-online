import { Container, Link, Icon } from './styles'
import {ReactComponent as Burger}  from '../../assets/image/burger.svg'
import {ReactComponent as Combo}  from '../../assets/image/combo.svg'
import {ReactComponent as Vegetarian}  from '../../assets/image/vegetarian.svg'
import {ReactComponent as Drink}  from '../../assets/image/drink.svg'
import {ReactComponent as Desert}  from '../../assets/image/desert.svg'


export default function MenuMobile() {

  return (

    <Container>
      <Link to='/'>
        <Burger className='burger' />
      </Link>
      <Link to='combos'>
        <Combo className='combo' />
      </Link>
      <Link to='vegetarians'>
        <Vegetarian className='vegetarian' />
      </Link>
      <Link to='drinks'>
        <Drink className='drink' />
      </Link>
      <Link to='deserts'>
        <Desert className='desert' />
      </Link>
    </Container>
  )
}
