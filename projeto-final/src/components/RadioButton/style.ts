import styled from "styled-components";
import { Theme } from "../../styles/Theme";

interface ContainerProps {
  hover?: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  position: relative;


    input{
      cursor: pointer;
      appearance: none;
      width: 18px;
      height: 18px;
      border: 2px solid ${Theme.Colors.lowEmphasis};
      border-radius: 50%;
      position: relative;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      outline: none;

      &:checked{
        border-color: ${Theme.Colors.primary};
      }

      &:hover{
        border-color: ${Theme.Colors.primary};
      }

      
      &:checked::before{
        content: '';
        width: 9px;
        height: 9px;
        background: ${Theme.Colors.primary};
        border-radius: 50%;
        position: absolute;
      }
      
      &:focus{
        box-shadow: 0 0 5px ${Theme.Colors.primary};
      }
      
      &:disabled, &:disabled + label{
        color: ${Theme.Colors.lowEmphasis};
        border-color: ${Theme.Colors.lightText};
      }
    }
`
     