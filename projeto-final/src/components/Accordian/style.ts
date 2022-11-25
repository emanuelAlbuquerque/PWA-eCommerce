import styled from "styled-components"
import { Theme } from "../../styles/Theme"

export const Button = styled.button`
  padding: 1rem;
  width: 100%;

  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${Theme.Colors.bright};

  @media screen and (min-width: 1024px){
    display: none;
  }

  p{
    font-size: ${Theme.Typography.TitleMedium.size};
    font-weight: ${Theme.Typography.TitleMedium.weight};

    color: ${Theme.Colors.lowEmphasis};
  }
`