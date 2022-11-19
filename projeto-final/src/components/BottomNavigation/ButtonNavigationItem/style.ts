import styled from "styled-components";
import { Theme } from "../../../styles/Theme";

interface ContainerProps{
  clicado?: boolean
  theme: string
}

export const Container = styled.button<ContainerProps>`
      width: 100%;
      max-width: calc(100% / 4);
      padding: 1rem;

      text-align: center;

      border: none;
      background-color: ${(props) => props.theme === 'light' ? Theme.Colors.bright : Theme.Colors.primary};;

      font-size: ${Theme.Typography.LabelMedium.size};
      font-weight: ${Theme.Typography.LabelMedium.weight};
      gap: 5px;
      cursor: pointer;

      .disable{
        p{
          display: none;
        }
          
        color: ${Theme.Colors.lightText};
  
        .icon{
          stroke: ${Theme.Colors.lightText};
        }
  
        .icon_profile path{
          fill: ${Theme.Colors.lightText};
        }
      }

      
      .active{
        p{
          display: block;
        }
          
        color: ${(props) => props.theme === 'light' ? Theme.Colors.primary : Theme.Colors.bright};

        .icon{
          stroke: ${(props) => props.theme === 'light' ? Theme.Colors.primary : Theme.Colors.bright};
        }

        .icon_profile path{
          fill: ${(props) => props.theme === 'light' ? Theme.Colors.primary : Theme.Colors.bright};
        }
      }
      
`