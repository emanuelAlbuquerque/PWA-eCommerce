import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { ButtonColorProps, corVariantesTypes } from "../Types";


export const corVariantes: corVariantesTypes = {
  default: {
    bgColor: Theme.Colors.tranparent,
    bgBorder: Theme.Colors.tranparent,
    color: Theme.Colors.primary,
    mouseHover: {
      hoverBgColor: '',
      hoverBgBorder: '',
      hoveColor: Theme.Colors.primaryTint
    },
    focusMouse: {
      focusBgColor: '',
      focusBgBorder: Theme.Colors.accent,
      focusColor: '',
    }
  },
  hover: {
    bgColor: Theme.Colors.tranparent,
    bgBorder: Theme.Colors.tranparent,
    color: Theme.Colors.primaryTint,
    mouseHover: {
      hoverBgColor: '',
      hoverBgBorder: '',
      hoveColor: ''
    },
    focusMouse: {
      focusBgColor: '',
      focusBgBorder: Theme.Colors.accent,
      focusColor: '',
    }
  },
  focused: {
    bgColor: Theme.Colors.tranparent,
    bgBorder: Theme.Colors.accent,
    color: Theme.Colors.primary,
    mouseHover: {
      hoverBgColor: '',
      hoverBgBorder: '',
      hoveColor: ''
    },
    focusMouse: {
      focusBgColor: Theme.Colors.tranparent,
      focusBgBorder: Theme.Colors.accent,
      focusColor: Theme.Colors.primary,
    }
  },
  disable: {
    bgColor: Theme.Colors.tranparent,
    bgBorder: Theme.Colors.tranparent,
    color: Theme.Colors.lightText,
    mouseHover: {
      hoverBgColor: '',
      hoverBgBorder: '',
      hoveColor: ''
    },
    focusMouse: {
      focusBgColor: Theme.Colors.tranparent,
      focusBgBorder: Theme.Colors.tranparent,
      focusColor: Theme.Colors.tranparent,
    }
  }
}

export const Ancora = styled.a<ButtonColorProps>`
  width: 100%;
  max-width: 136px;
  height: 45px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  border: none;
  background-color: ${props => props.bgColor};
  border: 2px solid ${props => props.bgBorder};
  color: ${props => props.color};
  
  font-weight: 600;
  font-size: 14px;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  cursor: pointer;

  .icon {
    fill: ${props => props.color};
  }


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

`