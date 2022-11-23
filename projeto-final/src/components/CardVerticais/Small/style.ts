import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

export const Container = styled.div`
  height: 75px;
  width: 100%;

  display: flex;
  gap: 1rem;

  img{
    width: 74px;
    height: 74px;
    border-radius: 8px;
  }

  div{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2{
      color: ${Theme.Colors.highEmphasis};
      font-size: ${Theme.Typography.LabelSmall.size};
      font-weight: ${Theme.Typography.LabelSmall.weight};
    }

    h3{
      color: ${Theme.Colors.lowEmphasis};
      font-size: ${Theme.Typography.Link.size};
      font-weight: ${Theme.Typography.Link.weight};
    }

    .quantidade{
      color: ${Theme.Colors.lowEmphasis};
      font-size: ${Theme.Typography.LabelSmall.size};
      font-weight: ${Theme.Typography.LabelSmall.weight};
    }
       
    .preco{
      color: ${Theme.Colors.highEmphasis};
      font-size: ${Theme.Typography.TitleRegular.size};
      font-weight: ${Theme.Typography.TitleRegular.weight};
      margin: 5px 0;
    }
  }
`