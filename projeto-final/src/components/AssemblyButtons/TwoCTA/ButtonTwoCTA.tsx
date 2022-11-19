import { ReactNode } from "react";
import { ButtonPrimary } from "../../Buttons/Primary/ButtonPrimary";
import { Container } from "./style";


export interface ButtonTwoCTAProps{
  iconButtonPrimary?: ReactNode
  textButtonPrimary?: string
  onClickButtonPrimary?: () => void

  iconButtonSecondary?: ReactNode
  textButtonSecondary?: string
  onClickButtonSecondary?: () => void
}

export function ButtonTwoCTA(
    { 
      iconButtonPrimary, 
      iconButtonSecondary, 
      onClickButtonPrimary, 
      onClickButtonSecondary, 
      textButtonPrimary, 
      textButtonSecondary
    }: ButtonTwoCTAProps
  )
{
  return(
    <Container>
      <div>
        <ButtonPrimary 
          variant="default" 
          icon={iconButtonPrimary} 
          text={textButtonPrimary} 
          onClick={onClickButtonPrimary}
        />
      </div>
      <div>
        <ButtonPrimary 
          variant="default" 
          icon={iconButtonSecondary} 
          text={textButtonSecondary} 
          onClick={onClickButtonSecondary}
        />
      </div>
    </Container>
  )
} 