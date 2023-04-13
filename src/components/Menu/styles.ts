import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  position: relative;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 48px;
  font-weight: bolder;
  color: #5e1306;
  font-family: 'Rowdies', cursive;
`

export const Foods = styled.nav`
  width: 90%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 64px;
`

export const List = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  list-style: none;
`

export const Item = styled.li`
  width: 160px;
  height: 192px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Link = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;

  &.active{
    img{background-color: white;}
    h3{color: #fd9e08;}
  }
`;

export const Image = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 64px;
`
export const Name = styled.h3`
  font-size: 20px;
  font-weight: bolder;
  color: #5e1306;
  font-family: 'Rowdies', cursive;
  margin-bottom: 8px;
  text-align: center;
`
