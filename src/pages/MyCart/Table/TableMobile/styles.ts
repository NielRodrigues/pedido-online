import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: auto;
  padding-bottom: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 8px;
  background-color: #0E0F11;


  div.snack{
    width: 92%;
    padding: 28px 24px;
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 24px;
    margin-bottom: 40px;
    border-bottom: 1px solid #c0c0c0;

    > div:first-child{
      img{
        width: 100%;
        height: 100%;
        border-radius: 4px;
        object-fit: cover;
      }
    }

    > div:last-child{
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      h4{
        margin-bottom: 8px;
        font-weight: 400;
        font-size: 28px;
      }

      > span {
        font-weight: 700;
        font-size: 32px;
      }

      div{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 32px;
        margin: 14px 0;

        div{
          flex-shrink: 0;
          display: flex;
          align-items: center;
          gap: 8px;

          button{
            background: none;
            border: none;
            outline: none;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            svg{
              width: 32px;
              height: 32px;
              fill: #fd9e08;
            }
          }
          span{
            display: block;
            background-color: white;
            color: #0E0F11;
            padding: 2px 12px;
            border-radius: 4px;
            font-weight: 500;
            font-size: 28px;
          }
        }

        button{
          flex-shrink: 0;
          background:none;
          border: none;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          cursor: pointer;

          svg{
            fill: #fd9e08;
            width: 28px;
            height: 28px;
            transition: all .5s;
          }

          &:hover svg{
            fill: #fd9e0880;
          }


        }

      }

      h5{
        font-weight: 600;
        font-size: 40px;

        span{
          display: block;
          font-size: 28px;
          font-weight: 400;
        }
      }
    }

    @media (max-width: 560px){
      grid-template-columns: 1fr;

      padding-top: 16px;

      > div:first-child{
        height: 160px;
      }

      > div:last-child{

        div{
          gap: 16px;
        }

        h5{

          font-size: 28px;

          span{
            font-size: 16px;
          }
        }
      }
    }
  }
`
