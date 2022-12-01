import bolsa from '../../../assets/img/bolsa.png'
import { GlobalStyle } from "../../../styles/Global";
import { DefaultCardMobile, DefaultCardMobileProps } from "./DefaultCardMobile";
import { Meta, Story } from "@storybook/react";


export default {
  title: 'CardVertical/DefaultCardMobile',
  component: DefaultCardMobile,
} as Meta<DefaultCardMobileProps>

export const Default: Story<DefaultCardMobileProps> = () => (
  <>
    <GlobalStyle />
    <DefaultCardMobile
      id='1'
      nomeProduto="Grande"
      descricaoProduto="Blossom Pouch"
      precoTotalProduto={69.90}
      img={bolsa}
    />
  </>
)