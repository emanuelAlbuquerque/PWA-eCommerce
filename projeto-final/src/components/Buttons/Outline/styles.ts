import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { ButtonColorProps, corVariantesTypes } from "../Types";


export const corVariantes: corVariantesTypes = {
  default: {
    bgColor: Theme.Colors.bright,
    bgBorder: Theme.Colors.primary,
    color: Theme.Colors.primary,
    mouseHover: {
      hoverBgColor: '',
      hoverBgBorder:'',
      hoveColor: Theme.Colors.primaryTint
    },
    focusMouse: {
      focusBgColor: Theme.Colors.bright,
      focusBgBorder: Theme.Colors.primaryTint,
      focusColor: Theme.Colors.primary,
    }
  },
  hover: {
    bgColor: Theme.Colors.bright,
    bgBorder: Theme.Colors.primary,
    color: Theme.Colors.primaryTint,
    mouseHover: {
      hoverBgColor: '',
      hoverBgBorder: '',
      hoveColor: ''
    },
    focusMouse: {
      focusBgColor: Theme.Colors.bright,
      focusBgBorder: Theme.Colors.primaryTint,
      focusColor: Theme.Colors.primary,
    }
  },
  focused: {
    bgColor: Theme.Colors.bright,
    bgBorder: Theme.Colors.primaryTint,
    color: Theme.Colors.primary,
    mouseHover: {
      hoverBgColor: '',
      hoverBgBorder: '',
      hoveColor: ''
    },
    focusMouse: {
      focusBgColor: Theme.Colors.bright,
      focusBgBorder: Theme.Colors.primaryTint,
      focusColor: Theme.Colors.primary,
    }
  },
  disable: {
    bgColor: Theme.Colors.bright,
    bgBorder: Theme.Colors.lightText,
    color: Theme.Colors.lightText,
    mouseHover: {
      hoverBgColor: '',
      hoverBgBorder: '',
      hoveColor: ''
    },
    focusMouse: {
      focusBgColor: Theme.Colors.bright,
      focusBgBorder: Theme.Colors.lightText,
      focusColor: Theme.Colors.lightText,
    }
  }
}

export const Button = styled.button<ButtonColorProps>`
  width: 100%;
  height: 40px;
  

  border: none;
  background-color: ${props => props.bgColor};
  border: 2px solid ${props => props.bgBorder};
  color: ${props => props.color};

  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  .icon {
    stroke: ${props => props.color};
  }

  border-radius: 8px;

  &:hover{
    background-color: ${props => props.hoverBgColor};
    border: ${props => props.hoverBgBorder};
    color: ${props => props.hoverColor};

    .icon{
      stroke: ${props => props.hoverColor};
    }
  }

  &:focus{
    background-color: ${props => props.focusBgColor};
    border: 2px solid ${props => props.focusBgBorder};
    color: ${props => props.focusColor};

    .icon{
     stroke: ${props => props.focusColor}
    }
  }
`