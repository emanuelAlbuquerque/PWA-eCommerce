import { GlobalStyle } from "../../styles/Global";
import { OrderCardMobile, OrderCard } from "./OrderCardMobile";
import { Meta, Story } from "@storybook/react";

export default {
  title: 'OrderCard Mobile/OrderCard Mobile',
  component: OrderCardMobile,
} as Meta<OrderCard>

export const Default:Story<OrderCard> = () => (
  <>
    <GlobalStyle />
    <OrderCardMobile date='September 5, 2020' idProduto='874522648' precoProduto='218.50' />
  </>
)