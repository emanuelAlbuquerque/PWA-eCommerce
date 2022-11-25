import { ReactNode } from "react"
import { Container } from "./style"

export interface AssemblyWideProps{
  bannerWideOn: ReactNode
  bannerWideTwo: ReactNode
  bannerWideTree: ReactNode
}

export function AssemblyWide({bannerWideOn, bannerWideTree,bannerWideTwo}:AssemblyWideProps){
  return(
    <Container>
      {bannerWideOn}
      {bannerWideTree}
      {bannerWideTwo}
    </Container>
  )
}