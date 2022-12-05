import { ReactNode, useState } from "react"
import { Plus } from "../../assets/Icons/General/Plus"
import { SmallMinus } from "../../assets/Icons/General/SmallMinus"
import { Container } from "./style"

export interface FiltrosWebProps{
  children?: ReactNode
  text: string
  iconActive?: ReactNode
  iconDisabe?: ReactNode

  active?: boolean

  classNameText?: string
  className?: string

  onClick?: () => void
}

export function FiltrosWeb(
  { 
    children, 
    text, 
    iconActive = <SmallMinus />, 
    iconDisabe = <Plus />, 
    classNameText,
    className,
    onClick,
    active
  }: FiltrosWebProps){

  const defaultActive = active ? active : false
  const [expandOn, setExpandOn] = useState(defaultActive)

  const expand = () => {
    if(expandOn === false){
      setExpandOn(true)
    }else{
      setExpandOn(false)
      if(onClick){
        onClick()
      }
    }
  }

  return(
    <>
      <Container onClick={expand} className={className}>
        <p className={classNameText}>{text}</p>
        {expandOn ? iconActive  :  iconDisabe }
      </Container>
      {expandOn && children}
    </>
  )
}