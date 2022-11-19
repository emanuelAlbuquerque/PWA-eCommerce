import { ReactNode } from "react";
import { ButtonPrimary } from "../../Buttons/Primary/ButtonPrimary";
import { ButtonSecondary } from "../../Buttons/Secondary/ButtonSecondary";
import { Container } from "./style";


export interface ButtonDuoProps{
  onClickButtonSmall?: () => void
  onClickButtonLarge?: () => void

  iconButtonSmall: ReactNode
  iconButtonLarge: ReactNode

  textButtonLarge: string
}

export function ButtonDuo(
    {
      iconButtonLarge, 
      iconButtonSmall, 
      onClickButtonLarge, 
      onClickButtonSmall, 
      textButtonLarge
    }: ButtonDuoProps
  )
{
  return(
    <Container>
      <div className="button_small">
        <ButtonSecondary 
          variant="default" 
          icon={iconButtonSmall} 
          onClick={onClickButtonSmall}
        />
      </div>
      <div className="button_large">
        <ButtonPrimary 
          variant="default" 
          icon={iconButtonLarge} 
          text={textButtonLarge} 
          onClick={onClickButtonLarge}
        />
      </div>
    </Container>
  )
}