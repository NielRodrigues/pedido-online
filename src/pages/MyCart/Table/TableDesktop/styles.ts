import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: auto;
  padding-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: #0E0F11;


  table{
    width: 92%;
    border-spacing: 0 0;
    border-collapse: collapse;

    th{
      padding: 0 16px 8px 16px;
      font-weight: 600;
      font-size: 18px;
      text-transform: uppercase;
      text-align: left;

      &:nth-child(2){
        padding: 32px;
      }
    }

    td{
      padding: 24px 16px 24px 16px;
      padding-top: 16px;
      border-bottom: 1px solid #c0c0c0;

      h4{
        font-weight: 400;
        margin-bottom: 8px;
        font-size: 18px;
      }

      >

      span{
        font-weight: 700;
        font-size: 24px;
      }

      // quantidade

      h5{
        font-weight: 700;
        font-size: 24px;
      }

      &:first-child{
        width: 120px;
        height: 120px;
        padding-right: 0;
        padding-left: 0;

        img{
          object-fit: cover;
          width: 120px;
          height: 120px;
          border-radius: 8px;
        }
      }

      &:nth-child(2){
        padding-left: 32px;
      }
      &:nth-child(3), &:nth-child(4){
        padding-left: 176px;
      }
      &:last-child{
        width: 24px;
        padding-right: 0;

        button{
          background:none;
          border: none;
          width: 100%;

          display: flex;
          align-items: center;
          justify-content: flex-end;

          svg{
            fill: #fd9e08;
            width: 24px;
            height: 24px;
          }
        }
      }

    }
  }
`
