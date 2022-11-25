import { ReactNode } from "react"
import { Container } from "./style"

export interface CategoryProps{
  text: string
  icon: ReactNode
}

export function Category({icon, text}: CategoryProps){
  return(
    <Container>
      <button>
        {icon}
      </button>
      <p>{text}</p>
    </Container>
  )
}