import styled, { keyframes } from "styled-components";

const shimmerEffect = keyframes`
  0%{background-position: 0%;}
  50%{background-position: 10000%;}
  75%{background-position: 15000%;}
  100%{background-position: 20000%;}
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 4px;
  background: #dbd3c890;
`
export const Image = styled.div`
  width: 92.30%;
  height: 192px;
  background: linear-gradient(90deg, #dbd3c890, #fff);
  animation: ${shimmerEffect} 1s linear infinite;
  margin-top: 8px;
  border-radius: 4px;
`

export const ItemText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 16px;
  width: 192px;
  height: 64px;
  margin-bottom: 16px;
  width: 100%;
  animation: ${shimmerEffect} 1s linear infinite;
`

export const Name = styled.div`
  height: 18px;
  width: 92.30%;
  border-radius: 4px;
  background: linear-gradient(90deg, #dbd3c890, #fff);
  animation: ${shimmerEffect} 1s linear infinite;
`
export const Description = styled.div`
  height: 14px;
  width: 92.30%;
  border-radius: 4px;
  background: linear-gradient(90deg, #dbd3c890, #fff);
  animation: ${shimmerEffect} 1s linear infinite;
  margin-top: 8px;
`

export const Price = styled.div`
  height: 24px;
  width: 92.30%;
  border-radius: 4px;
  background: linear-gradient(90deg, #dbd3c890, #fff);
  animation: ${shimmerEffect} 1s linear infinite;
  margin-bottom: 20px;
`

export const AddCart = styled.div`
  width: 92.30%;
  height: 48px;
  border-radius: 4px;
  background: linear-gradient(90deg, #dbd3c890, #fff);
  animation: ${shimmerEffect} 1s linear infinite;
`
