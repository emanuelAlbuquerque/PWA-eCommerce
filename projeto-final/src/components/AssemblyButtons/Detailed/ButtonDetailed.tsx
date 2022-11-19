import { ReactNode } from "react";
import { ButtonPrimary } from "../../Buttons/Primary/ButtonPrimary";
import { Container } from "./style";

export interface ButtonDetailedProps{
  onClickButton?: () => void

  heading: string
  title: string

  icon?: ReactNode
  textButton?: string
}

export function ButtonDetailed({heading, title, onClickButton, icon, textButton}: ButtonDetailedProps){
  return(
    <Container>
      <div className="buttonDetailed_header">
        <p>{heading}</p>
        <h3>{title}</h3>
      </div>
      <div className="buttonDetailed_icon">
        <ButtonPrimary variant="default" onClick={onClickButton} icon={icon} text={textButton}/>
      </div>
    </Container>
  )
}