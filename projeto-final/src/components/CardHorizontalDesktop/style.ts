import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const ContainerTr = styled.tr`
  margin: 1rem 0;
  height: 100px;

  td{
    height: 100%;
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

  .infosProduto{
    .qtdPreco{
      justify-content: left;
    }
  }

  .precoProduto, .qtdProduto{
      div{
        height: 100%; 
        width: 100%;
        p{
          padding-bottom: .5rem;
        }
        button{
          margin-top: 2rem;
        }
      }    
  }

  .subTotalProduto{
    div{
        height: 100%; 
        width: 100%;
        p{
          margin-bottom: 4rem;
        }
      }    
    
    
  }

  .precoProduto, .qtdProduto, .subTotalProduto{
    div{
      p{
        color: ${Theme.Colors.highEmphasis};
        font-size: ${Theme.Typography.LabelLarge.size};
        font-weight: ${Theme.Typography.LabelLarge.weight};
      }

      .moveItem, .removeItem{
        border: none;
        background-color: ${Theme.Colors.tranparent};
        font-size: ${Theme.Typography.TitleRegular.size};
        font-weight: ${Theme.Typography.TitleRegular.weight};
        text-decoration: underline;
        cursor: pointer;
      }

      .moveItem{
        color: ${Theme.Colors.primary}
      }

      .removeItem{
        color: ${Theme.Colors.error}  
      }

    }
  }
`