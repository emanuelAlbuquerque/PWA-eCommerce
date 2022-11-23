import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  width: 100%;
  background-color: ${Theme.Colors.tranparent};
`

export const ContainerProduct = styled.div`
  display: flex;
  height: 96px;
  padding: 10px;
`

export const DetalhesProdutos = styled.div`
  height: 100%;
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`


export const NameProdutos = styled.div`
  h1{
    color: ${Theme.Colors.dark};

    font-size: ${Theme.Typography.LabelSmall.size};
    font-weight: ${Theme.Typography.LabelSmall.weight};
  }

  h2{
    color: ${Theme.Colors.lowEmphasis};

    font-size: ${Theme.Typography.LabelMedium.size};
    font-weight: ${Theme.Typography.LabelMedium.weight};
  }
`

export const QuantidadeProdutos = styled.div`
      display: flex;
      align-items: center;

      background-color: ${Theme.Colors.grey};
      padding: .3rem;

      width: 100%;
      max-width: 80px;

      border-radius: 4px;

      p{
        color: ${Theme.Colors.lowEmphasis};
        font-size: ${Theme.Typography.LabelMedium.size};
        font-weight: ${Theme.Typography.LabelMedium.weight};
      }

      select{
        width: 100%;

        background-color: ${Theme.Colors.tranparent};
        border: none;

        outline: none;

        option{

          text-align: center;

          color: ${Theme.Colors.highEmphasis};
          font-size: ${Theme.Typography.LabelSmall.size};
          font-weight: ${Theme.Typography.DisplayLarge.weight};
        }
      }
`

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;

  padding: 10px;

  border-top: 1px solid ${Theme.Colors.lightGray};
  
  button{
    width: calc(100% / 2);
    text-align: center;

    cursor: pointer;

    background-color: ${Theme.Colors.tranparent};
    border: none;
    color: ${Theme.Colors.primary};
  }
`

export const PrecoProdutos = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h2{
    color: ${Theme.Colors.highEmphasis};
    font-size: ${Theme.Typography.TitleRegular.size};
    font-weight: ${Theme.Typography.TitleRegular.weight};
  }

  h3{
    color: ${Theme.Colors.lowEmphasis};
    font-size: ${Theme.Typography.LabelMedium.size};
    font-weight: ${Theme.Typography.LabelMedium.weight};
    text-decoration: line-through;
  }

  p{
    color: ${Theme.Colors.lightRed};
    font-size: ${Theme.Typography.LabelMedium.size};
    font-weight: ${Theme.Typography.LabelMedium.weight};
  }
    
`