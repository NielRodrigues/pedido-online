import styled from "styled-components";


export const Container = styled.section`
  display: grid;
  grid-template-rows: 400px;
  grid-template-columns: repeat(auto-fit, minmax(208px, 208px));
  flex-direction: row;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  height: auto;
  flex-wrap: wrap;
  margin-bottom: 64px;
  gap: 16px;

  @media  (max-width: 673px) {
    grid-template-columns: repeat(2, minmax(47.5%, 47.5%));
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background-color: #dbd3c890;
  transition: all .5s;
  position: relative;
`

export const Image = styled.img`
  width: 92.30%;
  height: 192px;
  object-fit: cover;
  margin-top: 8px;
  border-radius: 4px;
`

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  width: 100%;
  height: 64px;
  margin-bottom: 16px;
`

export const Name = styled.h1`
  font-size: 18px;
  color: black;
  font-weight: 600;
  margin: 0;
  text-align: center;
`
export const Description = styled.h3`
  font-size: 14px;
  color: #00000050;
  text-align: center;
  font-weight: 300;
  margin: 0;
  margin-top: 8px;
`

export const Price = styled.h2`
  font-size: 24px;
  color: #b33012;
  font-weight: 600;
  margin: 0;
  margin-bottom: 20px;
  text-decoration: underline;
  transition: all .5s;
`

export const AddCart = styled.button`
  width: 92.30%;
  height: 48px;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: black;
  background-color: rgb(253, 158, 8);
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: none;

  svg{
    width: 20px;
    height: 20px;
    color: black;
  }
`

export const Qntd = styled.span`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #b33012;
  color: #fefefe;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  position: absolute;
  top: -4px;
  left: -4px;
  box-shadow: 0 0 8px #00000050;
`
