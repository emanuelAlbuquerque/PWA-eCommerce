import { Container } from "./style"

export interface BannerSquareProps{
  text?: string
  background: string
}

export function BannerSquare({text, background}: BannerSquareProps){
  return(
    <Container background={background}>
      <p>{text}</p>
    </Container>
  )
}