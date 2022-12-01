import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

export const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  gap: 10px;

  img{
    width: 120px;
    height: 120px;
    border-radius: 8px;
  }

  div{
    height: 100%; 
    width: 20%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    h2{
      color: ${Theme.Colors.highEmphasis};
      font-size: ${Theme.Typography.LabelSmall.size};
      font-weight: ${Theme.Typography.LabelSmall.weight};
    }

    h3{
      color: ${Theme.Colors.lowEmphasis};
      font-size: ${Theme.Typography.LabelMedium.size};
      font-weight: ${Theme.Typography.LabelMedium.weight};
    }

    .preco{
       color: ${Theme.Colors.highEmphasis};
       font-size: ${Theme.Typography.TitleRegular.size};
       font-weight: ${Theme.Typography.TitleRegular.weight};
       margin: 5px 0;
    }

    .quantidade{
      color: ${Theme.Colors.lowEmphasis};
      font-size: ${Theme.Typography.LabelMedium.size};
      font-weight: ${Theme.Typography.LabelMedium.weight};
    }
  }
` 