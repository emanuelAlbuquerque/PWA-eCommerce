import { ReactNode, useState } from "react"
import { Plus } from "../../assets/Icons/General/Plus"
import { SmallMinus } from "../../assets/Icons/General/SmallMinus"
import { Container } from "./style"

export interface FiltrosWebProps{
  children?: ReactNode
  text: string
  iconActive?: ReactNode
  iconDisabe?: ReactNode

  classNameText?: string
}

export function FiltrosWeb(
  { 
    children, 
    text, 
    iconActive = <SmallMinus />, 
    iconDisabe = <Plus />, 
    classNameText
  }: FiltrosWebProps){

  const [expandOn, setExpandOn] = useState(false)

  const expand = () => {
    setExpandOn(!expandOn)
  }

  return(
    <>
      <Container onClick={expand}>
        <p className={classNameText}>{text}</p>
        {expandOn ? iconActive  :  iconDisabe }
      </Container>
      {expandOn && children}
    </>
  )
}