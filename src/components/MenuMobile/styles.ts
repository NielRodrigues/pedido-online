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
  padding-bottom: 8px;
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

  &.active{

  }
`

export const Icon = styled.img`
  width: 48px;
  height: auto;
`
