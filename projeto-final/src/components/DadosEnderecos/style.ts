import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  .dadosEndereco{
    width: 100%;
    .cidade{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: .3rem;
      div{
        display: flex;
        align-items: center;
        gap: 10px;
        h2{
          color: ${Theme.Colors.highEmphasis};
          font-size: ${Theme.Typography.LinkRegular.size};
          font-weight: ${Theme.Typography.LinkRegular.weight};
        }
        p{
          color: ${Theme.Colors.dark};
          font-size: ${Theme.Typography.Link.size};
          font-weight: ${Theme.Typography.Link.weight};
          padding: .3rem;
          background-color: ${Theme.Colors.grey};
          border-radius: 4px;
        }
      }

      button{
        border: none;
        background-color: ${Theme.Colors.tranparent};
        color: ${Theme.Colors.primary};
        font-size: ${Theme.Typography.TitleRegular.size};
        font-weight: ${Theme.Typography.TitleRegular.weight};
      }
    }

    .endereco{
      color: ${Theme.Colors.lowEmphasis};
      font-size: ${Theme.Typography.TitleRegular.size};
      font-weight: ${Theme.Typography.TitleRegular.weight};

      p{
        &:not(:last-child){
          margin-bottom: .3rem;
        }
      }
    }

  }
`