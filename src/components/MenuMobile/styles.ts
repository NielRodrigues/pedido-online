import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.nav`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  z-index: 9999;
  background-color: #B33012;
  position: fixed;
  bottom: 0;
  padding-top: 8px;
  display: none;

  @media (max-width: 600px) {
    display: flex;
  }
`
export const Link = styled(NavLink)`
  width: 18%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  svg{
    width: 48px;
    height: 48px;
    padding-bottom: 8px;
    border-bottom: 2px solid transparent;
    transition: all .2s;
    fill: #FEFEFE;
  }

  &.active{
    img{
      border-bottom: 5px solid #fd9e08;
    }
    svg.burger, svg.combo{
      fill: #fd9e08;
      border-bottom: 2px solid #fd9e08;
      path{
        stroke: #fd9e08;
      }
      line{
        stroke: #fd9e08;
      }
    }
    svg.drink, svg.vegetarian, svg.desert{
      fill: #fd9e08;
      border-bottom: 2px solid #fd9e08;
      path{
        fill: #fd9e08;
      }
    }
  }
`
