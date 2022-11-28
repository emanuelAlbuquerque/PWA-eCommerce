import { ReactNode } from "react"
import { Container } from "./style"

export interface TabsProps{
  children: ReactNode
}

export function Tabs({children}: TabsProps){
  return(
    <Container>
      {children}
    </Container>
  )
}