import { ReactNode, useState } from "react"
import { Plus } from "../../assets/Icons/General/Plus"
import { SmallMinus } from "../../assets/Icons/General/SmallMinus"
import { Container } from "./style"

export interface FiltrosWebProps{
  children?: ReactNode
  text: string
}

export function FiltrosWeb({children, text}: FiltrosWebProps){

  const [expandOn, setExpandOn] = useState(false)

  const expand = () => {
    setExpandOn(!expandOn)
  }

  return(
    <>
      <Container onClick={expand}>
        <p>{text}</p>
        {expandOn ?  <SmallMinus /> : <Plus />}
      </Container>
      {expandOn && children}
    </>
  )
}