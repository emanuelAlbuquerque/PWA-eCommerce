import { Container } from "./style"

interface HomeBannerProps{
  text: string
}

export function HomeBanner({ text }: HomeBannerProps){
  return(
    <Container>
      <p>{text}</p>
    </Container>
  )
}