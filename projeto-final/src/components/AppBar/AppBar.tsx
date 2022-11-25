import { ReactNode } from "react"
import { Container } from "./style"

export interface AppBarProps{
  variant?: 'PageTitle' | 'Search'
  iconeEsquerda?: ReactNode
  text?: string

  iconeOne?: ReactNode
  iconeTwo?: ReactNode
  iconeTree?: ReactNode

  onClickIconeOne?: () => void
  onClickIconeTwo?: () => void
  onClickIconeTree?: () => void
}

export function AppBar(
  { 
    variant = 'Search', 
    iconeEsquerda, 
    iconeOne,
    iconeTree,
    iconeTwo,
    onClickIconeOne,
    onClickIconeTree, 
    onClickIconeTwo, 
    text
  }: AppBarProps){
  return(
    <Container variant={variant}>
      <div>
        <button>
          {iconeEsquerda}
        </button>
        <p>{text}</p>
      </div>
      <div>
        <button onClick={onClickIconeOne}>{iconeOne}</button>
        <button onClick={onClickIconeTwo}>{iconeTwo}</button>
        <button onClick={onClickIconeTree}>{iconeTree}</button>
      </div>
    </Container>
  )
}