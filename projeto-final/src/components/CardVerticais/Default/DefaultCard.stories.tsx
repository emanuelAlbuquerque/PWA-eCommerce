import bolsa from '../../../assets/img/bolsa.png'
import { GlobalStyle } from "../../../styles/Global";
import { DefaultCard, DefaultCardProps } from "./DefaultCard";
import { Meta, Story } from "@storybook/react";


export default {
  title: 'CardVertical/DefaultCard',
  component: DefaultCard,
} as Meta<DefaultCardProps>

export const Default: Story<DefaultCardProps> = () => (
  <>
    <GlobalStyle />
    <DefaultCard
      img={bolsa}
      descricaoProduto='Leather Coach Bag'
      nomeProduto='PRADA'
      quantidadeProduto={1}
      precoProduto={10.00}
    />
  </>
)