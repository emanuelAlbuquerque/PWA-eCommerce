import styled from "styled-components";
import { Theme } from "../../styles/Theme";

export const Container = styled.div`
  background-color: ${Theme.Colors.bright};

  width: 390px;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  flex-shrink: 0;
  
  border: 1px solid ${Theme.Colors.primary};

  @media screen and (max-width: 425px){
    width: 330px;
  }
`

export const DescricaoCupom = styled.div`
  p{
    color: ${Theme.Colors.highEmphasis};
    font-size: ${Theme.Typography.LabelLarge.size};
    font-weight: ${Theme.Typography.LabelLarge.weight};
  }
  a{
    color: ${Theme.Colors.primary};
    font-size: ${Theme.Typography.LabelMedium.size};
    font-weight: ${Theme.Typography.LabelMedium.weight};
  }
`
export const CodigoCupom = styled.div`
  background-color: ${Theme.Colors.grey};
  padding: .5rem;
  text-align: center;

  h2{
    color: ${Theme.Colors.highEmphasis};
    font-size: ${Theme.Typography.BodyMedium.size};
    font-weight: ${Theme.Typography.BodyMedium.weight};
  }
  p{
    color: ${Theme.Colors.lowEmphasis};
    font-size: ${Theme.Typography.TitleMedium.size};
    font-weight: ${Theme.Typography.TitleMedium.weight};
  }
`