import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  height: 120px;

  display: flex;
  gap: 10px;

  @media screen and (min-width: 1024px){
    max-width: 385px;
    height: 114px;
  }

  img{
    width: 120px;
    height: 120px;

    border-radius: 8px;

    @media screen and (min-width: 1024px){
      width: 80px;
      height: 75px;
    }
  }

  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;

    @media screen and (min-width: 1024px){
      justify-content: initial;
      gap: 5px;
    }

    .name_products{
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: initial;
      
      h2{
        color: ${Theme.Colors.highEmphasis};
        font-size: ${Theme.Typography.LabelSmall.size};
        font-weight: ${Theme.Typography.LabelSmall.weight};

        @media screen and (min-width: 1024px){
          font-size: ${Theme.Typography.BodyMedium.size};
          font-weight: ${Theme.Typography.BodyMedium.weight};
        }
      }

      button{
        background-color: ${Theme.Colors.tranparent};
        border: none;
        cursor: pointer;

        display: none;

        @media screen and (min-width: 1024px){
          display: block;
        }
      }
    }

    h3{
      color: ${Theme.Colors.lowEmphasis};
      font-size: ${Theme.Typography.Link.size};
      font-weight: ${Theme.Typography.Link.weight};

      @media screen and (min-width: 1024px){
        font-size: ${Theme.Typography.BodyRegular.size};
        font-weight: ${Theme.Typography.BodyRegular.weight};
      }
    }

    div{
      width: 100%;
      .quantidade{
        color: ${Theme.Colors.lowEmphasis};
        font-size: ${Theme.Typography.LabelSmall.size};
        font-weight: ${Theme.Typography.LabelSmall.weight};

        @media screen and (min-width: 1024px){
          font-size: ${Theme.Typography.BodyRegular.size};
          font-weight: ${Theme.Typography.BodyRegular.weight};
        }
      }
      .preco{
        color: ${Theme.Colors.highEmphasis};
        font-size: ${Theme.Typography.TitleRegular.size};
        font-weight: ${Theme.Typography.TitleRegular.weight};
        margin: 5px 0;

        @media screen and (min-width: 1024px){
          font-size: ${Theme.Typography.TitleSmall.size};
          font-weight: ${Theme.Typography.TitleSmall.weight};
        }
      }

      @media screen and (min-width: 1024px){
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
      }
    }

    .contador{
      display: none;

      @media screen and (min-width: 1024px){
        display: flex;
      }
    }

    .button_add{
      @media screen and (min-width: 1024px){
        display: none;
      }
    }
  }
`