import styled from "styled-components";
import { Theme } from "../../styles/Theme";


export const MainContainer = styled.main`
  padding: 1rem;
`

export const PageTitle = styled.h1`
  padding: 1rem;

  font-size: ${Theme.Typography.DisplayMedium.size};
  font-weight: ${Theme.Typography.DisplayMedium.weight};
  color: ${Theme.Colors.primary};
`

export const ContainerInfosProduto = styled.div`
  display: flex;
`

export const ContainerTable = styled.table`
  width: 60%;
  
  thead{
    width: 100%;
    text-align: left;
    display: block;
    border-bottom: 1px solid ${Theme.Colors.grey};
    tr{
      width: 100%;
      th{
        padding: .5rem 0;
        color: ${Theme.Colors.lowEmphasis};
        font-size: ${Theme.Typography.BodyMedium.size};
        font-weight: ${Theme.Typography.BodyMedium.weight};

        &:nth-child(1){
          width: 50%;
        }
        &:nth-child(2){
          width: 30%;
        }
        &:nth-child(3){
          width: 30%;
        }
        &:nth-child(4){
          width: 30%;
        }
      }
    }
  }

  tbody{
    display: block;
    height: 250px; 
    overflow-y: scroll;

    &::-webkit-scrollbar {
        background-color: ${Theme.Colors.bright};
        width: 14px;
        border-radius: 8px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 8px;
        background-color: ${Theme.Colors.bright};
        border: 4px solid ${Theme.Colors.bright};
        width: 7px;
      }
  }
`

export const OrderSumary = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  .OrderItem{
    margin-left: 3rem;
  }

`

export const ContainerInputCode = styled.div`
  width: 60%;
  margin-top: 5rem;

  .ApplyCupom{
    color: ${Theme.Colors.dark};
    font-size: ${Theme.Typography.BodyMedium.size};
    font-weight: ${Theme.Typography.BodyMedium.weight};
  }

  .ContainerInput{
    width: 360px;
  }
`