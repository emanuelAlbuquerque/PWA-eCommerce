import styled from "styled-components";
import { Theme } from "../../styles/Theme";

interface ContainerProps{
  url?: string;
  hover?:boolean
}

export const Container = styled.div<ContainerProps>`

    margin-bottom: 10px;

    input{
      display: none;
    }

    label{
      cursor: pointer;
      font-size: ${Theme.Typography.BodyMedium.size};
      font-weight: ${Theme.Typography.BodyMedium.weight};

    }

    input + label:before{
      content: '';
      box-sizing: border-box;

      width: 18px;
      height: 18px;

      border-radius: 2px;
      border: 2px solid ${(props) => props.hover ? Theme.Colors.primary : Theme.Colors.lowEmphasis};
      background-color: ${Theme.Colors.bright};

      display: inline-block;

      vertical-align: middle;
      
      margin-right: 5px;
      margin-bottom: 3px;

      cursor: pointer;
    }

    input:checked + label:before{
      background-color: ${Theme.Colors.primary};
      background-image: ${(props) => `url(${(props.url)})`};
      background-repeat: no-repeat;
      background-position: center;

      border-color: ${Theme.Colors.primary};
    }

    input:disabled + label:before{
      background-color: ${Theme.Colors.bright};
      border-color: ${Theme.Colors.lightText};  
    }
    input:hover:not(input:disabled) + label:before{
      border-color: ${Theme.Colors.primary};  
    }

    input:disabled + label{
      color: ${Theme.Colors.lightText};
    }

`