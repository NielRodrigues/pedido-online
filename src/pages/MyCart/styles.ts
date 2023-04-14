import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #18181A;
`

export const Header = styled.header`
  width: 90%;
  max-width: 1000px;
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 16px;
  justify-content: space-between;
`

export const Logo = styled.img`
  height: 64px;
  width: auto;
`

export const Requests = styled.div`
  width: auto;
  height: 64px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  svg{
    width: 32px;
    height: 32px;
    margin-left: 8px;
    color: #fefefe;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const Title = styled.h1`
  font-size: 20px;
  color: #fefefe;
  font-weight: 600;
  width: 100%;
  text-align: right;
  margin: 0;
`
export const Subtitle = styled.h2`
  font-size: 16px;
  color: #fd9e08;
  font-weight: 400;
  width: 100%;
  text-align: right;
  margin: 0;
`
