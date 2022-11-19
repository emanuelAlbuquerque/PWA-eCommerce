import { ReactNode } from "react"
import { ButtonPrimary } from "../../Buttons/Primary/ButtonPrimary"

export interface ButtonSingleProps{
  onClick?: () => void
  icon: ReactNode
  text: string
}

export function ButtonSingle({onClick, icon, text}: ButtonSingleProps){
  return(
    <ButtonPrimary variant="default" icon={icon} text={text} onClick={onClick}/>
  )
}