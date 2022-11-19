import { ReactNode } from "react"
import { Container } from "./style"

export interface AppBarProps{
  children: ReactNode
  variant?: 'PageTitle' | 'Search'
}

export function AppBar({ children, variant = 'Search'}: AppBarProps){
  return(
    <Container variant={variant}>
      {children}
    </Container>
  )
}