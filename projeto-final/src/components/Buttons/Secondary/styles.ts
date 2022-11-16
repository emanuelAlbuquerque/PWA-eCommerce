import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { ButtonColorProps, corVariantesTypes } from "../Types";


export const corVariantes: corVariantesTypes = {
  default: {
    bgColor: Theme.Colors.accent,
    bgBorder: Theme.Colors.accent,
    color: Theme.Colors.primary,
    mouseHover: {
      hoverBgColor: '',
      hoverBgBorder: '',
      hoveColor: Theme.Colors.primaryTint
    },
    focusMouse: {
      focusBgColor: Theme.Colors.accent,
      focusBgBorder: Theme.Colors.primaryTint,
      focusColor: Theme.Colors.primary,
    }
  },
  hover: {
    bgColor: Theme.Colors.accent,
    bgBorder: Theme.Colors.accent,
    color: Theme.Colors.primaryTint,
    mouseHover: {
      hoverBgColor: '',
      hoverBgBorder: '',
      hoveColor: ''
    },
    focusMouse: {
      focusBgColor: Theme.Colors.accent,
      focusBgBorder: Theme.Colors.primaryTint,
      focusColor: Theme.Colors.primary,
    }
  },
  focused: {
    bgColor: Theme.Colors.accent,
    bgBorder: Theme.Colors.primaryTint,
    color: Theme.Colors.primary,
    mouseHover: {
      hoverBgColor: '',
      hoverBgBorder: '',
      hoveColor: ''
    },
    focusMouse: {
      focusBgColor: Theme.Colors.accent,
      focusBgBorder: Theme.Colors.primaryTint,
      focusColor: Theme.Colors.primary,
    }
  },
  disable: {
    bgColor: Theme.Colors.accent,
    bgBorder: Theme.Colors.accent,
    color: Theme.Colors.lightText,
    mouseHover: {
      hoverBgColor: '',
      hoverBgBorder: '',
      hoveColor: ''
    },
    focusMouse: {
      focusBgColor: Theme.Colors.accent,
      focusBgBorder: Theme.Colors.accent,
      focusColor: Theme.Colors.lightText,
    }
  }
}

export const Button = styled.button<ButtonColorProps>`
  width: 100%;
  height: 45px;
  padding: 1rem 0;

  border: none;
  background-color: ${props => props.bgColor};
  border: 2px solid ${props => props.bgBorder};
  color: ${props => props.color};

  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 14px;

  cursor: pointer;

  border-radius: 8px;

  &:hover{
    background-color: ${props => props.hoverBgColor};
    border: ${props => props.hoverBgBorder};
    color: ${props => props.hoverColor};

    .icon{
      fill: ${props => props.hoverColor};
    }
  }

  &:focus{
    background-color: ${props => props.focusBgColor};
    border: 2px solid ${props => props.focusBgBorder};
    color: ${props => props.focusColor};

    .icon{
     fill: ${props => props.focusColor}
    }
  }

  div{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    
    .icon {
      fill: ${props => props.color};
    }
  }
`