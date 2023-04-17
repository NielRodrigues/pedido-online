import styled from 'styled-components'


export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  position: relative;

  picture{width: 100%;}
`

export const Background = styled.img`
  height: auto;
  width: 100%;
  object-fit: cover;
  z-index: -9999;

  @media only screen and (min-width: 2500px) {height: 700px;}
  @media only screen and (min-width: 2200px) {height: 660px;}
  @media only screen and (min-width: 2770px) {height: 600px;}
  @media only screen and (min-width: 700px) {height: 525px;}
`

export const Source = styled.source`
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  width: 100%;
  max-width: 1200px;
  color: black;
  z-index: 1;
  position: absolute;
  top: 0;
  justify-content: center;
  margin-top: 48px;
`

export const Title = styled.h1`
  font-size: 64px;
  font-weight: bolder;
  color: #FEFEFE;
  font-family: 'Rowdies', cursive;
  width: 90%;
  max-width: 640px;
  margin: 0;

  @media (max-width: 768px) { font-size: 56px; }
  @media (max-width: 635px) { font-size: 48px; }
  @media (max-width: 530px) { font-size: 40px; }

  @media (max-width: 1200px){
    margin-left: 24px;
  }
`

export const Text = styled.h4`
  font-size: 16px;
  color: #FEFEFEB6;
  font-weight: 100;
  margin-top: 32px;

  span{font-weight: 700; color:#FEFEFE; font-size: 18px; opacity: 1;}

  @media (max-width: 1200px){
    margin-left: 24px;
  }
`

export const Subtitle = styled.h2`
  font-size: 24px;
  color: #FEFEFE50;
  font-weight: 500;
  margin-top: 8px;

  span{font-weight: 700; color: #FEFEFE; font-size:28px; background-color: #942007;}

  @media (max-width: 1200px){
    margin-left: 24px;
  }
`
export const Button = styled.a`
  width: 192px;
  height: 48px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  background-color: #fd9e08;
  color: #000;
  margin-top: 48px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;

  @media (max-width: 1200px){
    margin-left: 24px;
  }
`
