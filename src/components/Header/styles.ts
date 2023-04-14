import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 64px;
  background-color: #B33012;
  justify-content: center;
  padding-top: 16px;
`

export const MenuBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  height: 100%;
`

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 48%;
  justify-content: space-around;

  @media (max-width: 768px){
    width: 72%;
  }
`

export const Section2 = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 48%;
  justify-content: space-around;

  @media (max-width: 768px){
    width: 20%;
  }
`

export const Logo = styled.img`
  height: 64px;
  width: auto;
`

export const NavBar = styled.ul`
  width: 64%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  list-style: none;
`

export const Menu = styled.li`
  color: '#FEFEFE';
`

export const LinkMenu = styled.a`
  font-size: 16px;
  color: #F3F3F3;
  transition: color .5s;
  font-weight: 600;
  text-decoration: none;

  &:hover, &.selected{
    color: #fd9e08;
  }
`

export const Wpp = styled.div`
  height: 100%;
  width: 240px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px){
    display: none;
  }
`

export const WppIcon = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 28px;
  background-color: #fd9e08;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  svg{
    color: #5e1306;
    width: 24px;
    height: 24px;
  }
`

export const Tel = styled.div`
  width: 80%;
  height: 40px;
`

export const Text = styled.h1`
  color: #FEFEFE;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`

export const Text2 = styled.h2`
  color: #FEFEFE50;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 72px;
`

export const User = styled.a`
  text-decoration: none;
  color: #FEFEFE;
  transition: all .5s;
  cursor: pointer;


  svg {
    color: #FEFEFE;
    transition: all .5s;
    width: 24px;
    height: 24px;
  }

  &:hover svg {opacity: 0.7;}
`

export const Cart = styled(Link)`
  text-decoration: none;
  color: #FEFEFE;
  transition: all .5s;
  position: relative;
  cursor: pointer;

  svg {
    color: #FEFEFE;
    transition: all .5s;
    width: 24px;
    height: 24px;
  }

  &:hover svg {opacity: 0.7;}
`
export const Requests = styled.div`
  width: 12px;
  height: 12px;
  padding: 1px;
  border-radius: 50%;
  background-color: #fd9e08;
  color: #5e1306;
  font-size: 10px;
  font-weight: 600;
  text-align: center;
  position: absolute;
  top: -6px;
  right: -6px;
  text-align: center;

`;
