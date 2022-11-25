import { ReactNode } from "react"
import { Container } from "./style"

export interface AppBarProps{
  variant?: 'PageTitle' | 'Search'
  text?: string
  className?:string
  iconeEsquerda?: ReactNode
  onClickIconeEsqueda?: () => void


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
    onClickIconeEsqueda,
    text,
    className
  }: AppBarProps){
  return(
    <Container variant={variant} className={className}>
      <div>
        <button onClick={onClickIconeEsqueda}>
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