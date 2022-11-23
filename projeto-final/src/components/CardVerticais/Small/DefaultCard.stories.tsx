import { GlobalStyle } from "../../../styles/Global";
import { SmallCard, SmallCardProps } from "./SmallCard";
import { Meta, Story } from "@storybook/react";

import sapato from '../../../assets/img/sapato.png'

export default {
  title: 'CardVertical/SmallCard',
  component: SmallCard,
} as Meta<SmallCardProps>

export const Default: Story<SmallCardProps> = () => (
  <>
    <GlobalStyle />
    <SmallCard
      nomeProduto="Grande"
      descricaoProduto="Blossom Pouch"
      precoProduto="39.49"
      quantidadeProduto='1'
      img={sapato}
    />
  </>
)