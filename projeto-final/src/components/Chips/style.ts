import styled from "styled-components";
import { Theme } from "../../styles/Theme";

// interface ButtonProps{
//   isActive: boolean
// }

export const Container = styled.div`
  border-radius: 12px; 

  button{
    border: none;
    cursor: pointer;
    border-radius: 12px; 

    padding: .5rem 1rem;
    font-size: ${Theme.Typography.TitleRegular.size};
    font-weight: ${Theme.Typography.TitleRegular.weight};
  }
  
  .disable{
    color: ${Theme.Colors.lowEmphasis};
    background-color: ${Theme.Colors.grey};
  }
  .active{
    color: ${Theme.Colors.bright};
    background-color: ${Theme.Colors.primary};
  }
`