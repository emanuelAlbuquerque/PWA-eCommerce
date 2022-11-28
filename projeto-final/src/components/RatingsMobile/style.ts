import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  padding: 1rem;
  width: 100%;
  background-color: ${Theme.Colors.bright};

  display: none;
  align-items: center;
  gap: 10px;

  div{
    &:first-child{
      padding: .5rem;
      background-color: ${Theme.Colors.grey};

      border-radius: 8px;

      display: flex;
      align-items: center;
      gap: 5px;

      p{
        color: ${Theme.Colors.highEmphasis};
        font-size: ${Theme.Typography.BodyLarge.size};
        font-weight: ${Theme.Typography.TitleRegular.weight};
      }
    }
    
    &:last-child{
      h2{
        color: ${Theme.Colors.highEmphasis};
        font-size: ${Theme.Typography.TitleRegular.size};
        font-weight: ${Theme.Typography.TitleRegular.weight};
        margin-bottom: 5px;
      }
      p{
        color: ${Theme.Colors.lowEmphasis};
        font-size: ${Theme.Typography.TitleSmall.size};
        font-weight: ${Theme.Typography.TitleSmall.weight};
      }
    }
  }

  @media screen and (max-width: 425px){
    display: flex;
  }
` 