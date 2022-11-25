import { Container } from "./style"

export interface BrandProps{
  icone?: string
}

export function Brand({ icone }: BrandProps){
  return(
    <Container>
      <img src={icone} alt="iocne da marca" />
    </Container>
  )
}