import { ReactNode } from "react";

export interface ButtonProps {
  variant: 'default' | 'hover' | 'focused' | 'disable'
  icon?: ReactNode
  text?: string
  onClick?: () => void
  className?: string
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