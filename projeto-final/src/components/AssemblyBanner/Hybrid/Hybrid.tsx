import { ReactNode } from "react"
import { Container } from "./style"

interface BannerHybridProps{
  bannerWide: ReactNode
  bannerSmallOne: ReactNode
  bannerSmallTwo: ReactNode
}

export function BannerHybrid({bannerSmallOne, bannerSmallTwo,bannerWide}: BannerHybridProps){
  return(
    <Container>
      <div>
        {bannerWide}
      </div>
      <div>
        {bannerSmallOne}
        {bannerSmallTwo}
      </div>
    </Container>
  )
}