import { GlobalStyle } from "../../styles/Global";
import { Card, CardProps } from "./Card";
import { Meta, Story } from "@storybook/react";
import exBag from '../../assets/img/exBag.png'

export default {
  title: 'Card/Card',
  component: Card,
} as Meta<CardProps>

export const Default:Story<CardProps> = () => (
  <>
    <GlobalStyle />
    <Card
      descriptionProducts='Leather Coach Bag'
      nameProduct='PRADA'
      precoComDesconto={54.69}
      procoTotal={69.99}
      totalDesconsto={20}
      img={exBag}
    />
  </>
)