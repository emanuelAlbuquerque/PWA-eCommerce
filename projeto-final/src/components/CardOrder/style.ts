import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 56px;

  img{
    height: 100%;
    width: 56px;
    border-radius: 8px;
  }

  div{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2{
      color: ${Theme.Colors.highEmphasis};
      font-size: ${Theme.Typography.LabelSmall.size};
      font-weight: ${Theme.Typography.LabelSmall.weight};
    }
    
    p{
      color: ${Theme.Colors.lowEmphasis};
      font-size: ${Theme.Typography.Link.size};
      font-weight: ${Theme.Typography.Link.weight};
    }

  }
`