import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Main = styled.main`
  padding: 0 1rem;

  .inputEndereco{
    align-items: flex-start;
    margin-bottom: 1rem;

    label{
      width: 100%;
    }
  }

  .container{
    margin: 1rem 0 2rem 0;
  }

  
  .order{
    margin-bottom: 0;

    .buttonProgress{
      margin-top: 5rem;
    }
  }

  .itens{
    height: 100%;
    max-height: 170px;
    overflow-y: scroll;

    .item{
      margin-bottom: 1rem;
    }


  }

  .title{
    color: ${Theme.Colors.lowEmphasis};
    font-size: ${Theme.Typography.TitleRegular.size};
    font-weight: ${Theme.Typography.TitleRegular.weight};
    margin-bottom: .5rem;
  }
`