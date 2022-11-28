import styled from "styled-components";
import { Theme } from "../../styles/Theme";


export const Container = styled.div`
  width: 100%;
  padding: 1rem;

  background-color: ${Theme.Colors.bright};

  display: none;
  align-items: center;
  justify-content: space-between;

  h1{
    font-size: ${Theme.Typography.TitleRegular.size};
    font-weight: ${Theme.Typography.TitleRegular.weight};
    color: ${Theme.Colors.highEmphasis}
  }
  p{
    font-size: ${Theme.Typography.BodyMedium.size};
    font-weight: ${Theme.Typography.BodyMedium.weight};
    color: ${Theme.Colors.lowEmphasis}
  }

  div{

    &:first-child{
      .iconInvite{
        flex-direction: row-reverse;
        justify-content: start;
      }

      .arrowConvite path{
        stroke: ${Theme.Colors.primary}
      }
    }

    &:last-child{
      flex-shrink: 0;
      width: 94px;
      height: 94px;

      border-radius: 12px;

      background-color: ${Theme.Colors.orangeLight}
    }
  }

  @media screen and (max-width: 425px) {
    display: flex;
  }
`