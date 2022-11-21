import { ReactNode, useState } from "react"
import { Container } from "./style"

export interface HorizontalMenuProps{
  icon?: ReactNode
  text?: string
  onClick?: () => void
  checked?: boolean
}

export function HorizontalMenu({icon, text, onClick, checked}: HorizontalMenuProps){
  const defaultClick = checked ? true : false

  const [click, setClick] = useState(defaultClick)

  const handleClick = () => {
    setClick(!click)

    if(onClick){
      onClick()
    }
  }

  return(
    <Container onClick={handleClick} click={click}>
      {icon}
      <p>{text}</p>
    </Container>
  )
}