import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  variant: 'default' | 'hover' | 'focused' | 'disable'
}


export interface ButtonColorProps {
  bgColor: string,
  color: string,
  bgBorder: string
  hoverBgBorder: string
  hoverBgColor: string
  hoverColor: string,
  focusBgColor: string,
  focusBgBorder: string,
  focusColor: string,
}

export interface corVariantesTypes {
  default: {
    bgColor: string,
    bgBorder: string,
    color: string,
    mouseHover: {
      hoverBgColor: string,
      hoverBgBorder: string,
      hoveColor: string
    },
    focusMouse: {
      focusBgColor: string,
      focusBgBorder: string,
      focusColor: string,
    }
  },
  hover: {
    bgColor: string,
    bgBorder: string,
    color: string,
    mouseHover: {
      hoverBgColor: string,
      hoverBgBorder: string,
      hoveColor: string
    },
    focusMouse: {
      focusBgColor: string,
      focusBgBorder: string,
      focusColor: string,
    }
  },
  focused: {
    bgColor: string,
    bgBorder: string,
    color: string,
    mouseHover: {
      hoverBgColor: string,
      hoverBgBorder: string,
      hoveColor: string
    },
    focusMouse: {
      focusBgColor: string,
      focusBgBorder: string,
      focusColor: string,
    }
  },
  disable: {
    bgColor: string,
    bgBorder: string,
    color: string,
    mouseHover: {
      hoverBgColor: string,
      hoverBgBorder: string,
      hoveColor: string
    },
    focusMouse: {
      focusBgColor: string,
      focusBgBorder: string,
      focusColor: string,
    }
  }
}