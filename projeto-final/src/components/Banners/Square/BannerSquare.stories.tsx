import { GlobalStyle } from "../../../styles/Global";
import { BannerSquare, BannerSquareProps } from "./BannerSquare";
import { Meta, Story } from "@storybook/react";

import imgOculos from '../../../assets/img/img-oculos.png'
import imgPerfume from '../../../assets/img/img-perfume.png'
import imgRelogio from '../../../assets/img/img-relogio.png'
import imgBolsa from '../../../assets/img/img-bolsa.png'
import dafaultBannerSquare from '../../../assets/img/dafaultBannerSquare.png'
import { ContainerStorybook } from "./style";

export default {
  title: 'Banner/BannerSquare',
  component: BannerSquare,
} as Meta<BannerSquareProps>

export const Default: Story<BannerSquareProps> = () => (
  <ContainerStorybook>
    <GlobalStyle />
    <BannerSquare background={dafaultBannerSquare} />
    <BannerSquare background={imgOculos} text='Sunglasses' />
    <BannerSquare background={imgPerfume} text='Personal Care ' />
    <BannerSquare background={imgRelogio} text='Wrist Watches' />
    <BannerSquare background={imgBolsa} text='Handbags' />
  </ContainerStorybook>
)