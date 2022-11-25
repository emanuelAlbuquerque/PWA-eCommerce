import React, { ReactNode } from "react"
import { Theme } from "../../styles/Theme"
import { TextTag } from "./styles"

export interface TextTypesProps{
  children: ReactNode
  variant: 'DisplayLarge' | 'DisplayMedium' | 'DisplaySmall' | 'TitleMedium' | 'TitleRegular' | 'BodyMedium'  |         'BodyRegular' | 'LabelLarge' | 'LabelMedium' | 'LabelSmall' | 'Link'
  color?: string
  className?: string
}

export function TextTypes({ children, variant, color = Theme.Colors.highEmphasis, className}: TextTypesProps){
  return(
    <TextTag variant={variant} color={color} className={className}>
      {children}
    </TextTag>
  )
}