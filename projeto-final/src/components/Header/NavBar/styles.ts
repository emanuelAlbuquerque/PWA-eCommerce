import styled from "styled-components"
import { Theme } from "../../../styles/Theme"

export const Container = styled.nav`
  margin-left: 1.5rem;
  ul{
    display: flex;
    
    li{
      &:not(:last-child){
        margin-right: 1rem;
      }
      
      a{
        color: ${Theme.Colors.dark};
        font-size: ${Theme.Typography.TitleMedium.size};
        font-weight: ${Theme.Typography.TitleMedium.weight};
      }
    }
  }
`