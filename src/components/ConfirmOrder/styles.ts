import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 92%;
  justify-content: space-between;
  margin-top: 24px;

  @media (max-width: 540px) {
    flex-direction: column-reverse;
    align-items: flex-start;

    button{width: 100%}
    h2{margin-bottom: 16px}
  }
`

export const Button = styled.button`
  width: 176px;
  height: 48px;
  border-radius: 4px;
  background-color: #B33012;
  color: #FEFEFE;
  font-size: 16px;
  font-weight: 600;
  margin-right: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all .5s;

  &:hover{
    background-color: #B3301290;
  }
`

export const Total = styled.h2`
  font-size: 16px;
  font-weight: 100;
  color: #FEFEFE;

  span{
    font-size: 24px;
    font-weight: 600;
    margin-left: 8px;
  }
`
