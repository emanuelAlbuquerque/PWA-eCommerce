import styled from "styled-components";
import { Theme } from "../../../styles/Theme";
import { ButtonColorProps, corVariantesTypes } from "../Types";


export const corVariantes: corVariantesTypes = {
  default: {
    bgColor: Theme.Colors.primary,
    bgBorder: Theme.Colors.primary,
    color: Theme.Colors.bright,
    mouseHover: {
      hoverBgColor: Theme.Colors.primaryTint,
      hoverBgBorder: Theme.Colors.primary,
      hoveColor: Theme.Colors.bright
    },
    focusMouse: {
      focusBgColor: Theme.Colors.primary,
      focusBgBorder: Theme.Colors.primaryTint,
      focusColor: Theme.Colors.bright,
    }
  },
  hover: {
    bgColor: Theme.Colors.primaryTint,
    bgBorder: Theme.Colors.primaryTint,
    color: Theme.Colors.bright,
    mouseHover: {
      hoverBgColor: Theme.Colors.primaryTint,
      hoverBgBorder: Theme.Colors.primaryTint,
      hoveColor: Theme.Colors.bright
    },
    focusMouse: {
      focusBgColor: Theme.Colors.primary,
      focusBgBorder: Theme.Colors.primaryTint,
      focusColor: Theme.Colors.bright,
    }
  },
  focused: {
    bgColor: Theme.Colors.primary,
    bgBorder: Theme.Colors.primaryTint,
    color: Theme.Colors.bright,
    mouseHover: {
      hoverBgColor: Theme.Colors.primary,
      hoverBgBorder: Theme.Colors.primary,
      hoveColor: Theme.Colors.bright
    },
    focusMouse: {
      focusBgColor: Theme.Colors.primary,
      focusBgBorder: Theme.Colors.primaryTint,
      focusColor: Theme.Colors.bright,
    }
  },
  disable: {
    bgColor: Theme.Colors.grey,
    bgBorder: Theme.Colors.grey,
    color: Theme.Colors.lightText,
    mouseHover: {
      hoverBgColor: Theme.Colors.grey,
      hoverBgBorder: Theme.Colors.grey,
      hoveColor: Theme.Colors.lightText
    },
    focusMouse: {
      focusBgColor: Theme.Colors.grey,
      focusBgBorder: Theme.Colors.grey,
      focusColor: Theme.Colors.lightText,
    }
  }
}

export const Button = styled.button<ButtonColorProps>`
  width: 100%;
  height: 40px;
  padding: 1rem 0;

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

  border-radius: 8px;

  &:hover{
    background-color: ${props => props.hoverBgColor};
    border: ${props => props.hoverBgBorder};
    color: ${props => props.hoverColor};
  }

  &:focus{
    background-color: ${props => props.focusBgColor};
    border: 2px solid ${props => props.focusBgBorder};
    color: ${props => props.focusColor};
  }

  .icon {
    stroke: ${props => props.hoverColor};
  }
  

`