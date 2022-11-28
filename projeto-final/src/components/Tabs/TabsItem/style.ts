import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

export const Container = styled.div`
  button{
    border-radius: 1rem;
    padding: .8rem 2rem;
    border: none;
    color: ${Theme.Colors.lowEmphasis};
    
    font-size: ${Theme.Typography.LabelMedium.size};
    font-weight: ${Theme.Typography.LabelMedium.weight};
    background-color: ${Theme.Colors.grey};

    cursor: pointer;
  }

  .active{
    color: ${Theme.Colors.bright};
    background-color: ${Theme.Colors.primary};
  }
`