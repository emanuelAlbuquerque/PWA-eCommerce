import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

export const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 10px;


  img{
   width: 80px;
   height: 75px;
   border-radius: 8px ;
  }

  div{
    display: flex;
    flex-direction: column;
    justify-content: initial;
    gap: 5px;
    width: 100%;

    

    .name_products{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: initial;
      
      h2{
        color: ${Theme.Colors.highEmphasis};
        font-size: ${Theme.Typography.BodyMedium.size};
        font-weight: ${Theme.Typography.BodyMedium.weight};
      }

      button{
        background-color: ${Theme.Colors.tranparent};
        cursor: pointer;
        border: none;
      }
    }

    h3{
      color: ${Theme.Colors.lowEmphasis};
      font-size: ${Theme.Typography.BodyRegular.size};
      font-weight: ${Theme.Typography.BodyRegular.weight};
    }

    div{
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      justify-content: space-between;
      .quantidade{
        color: ${Theme.Colors.lowEmphasis};
        font-size: ${Theme.Typography.BodyRegular.size};
        font-weight: ${Theme.Typography.BodyRegular.weight};
      }
      .preco{
        color: ${Theme.Colors.highEmphasis};
        font-size: ${Theme.Typography.TitleSmall.size};
        font-weight: ${Theme.Typography.TitleSmall.weight};
        margin: 5px 0;
      }
    }
  }
`