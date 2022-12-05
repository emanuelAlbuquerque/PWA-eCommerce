import { ReactNode } from "react"
import { Container } from "./style"

export interface CategoryProps{
  text: string
  icon: ReactNode
  onClick?: () => void
}

export function Category({icon, text, onClick}: CategoryProps){
  return(
    <Container>
      <button onClick={onClick}>
        {icon}
      </button>
      <p>{text}</p>
    </Container>
  )
}