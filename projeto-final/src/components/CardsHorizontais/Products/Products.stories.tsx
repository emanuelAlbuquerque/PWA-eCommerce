import { GlobalStyle } from "../../../styles/Global";
import { Products, ProductsProps } from "./Products";
import { Meta, Story } from "@storybook/react";

import bolsaRosa from '../../../assets/img/bolsaRosa.png'

export default {
  title: 'Products/Products',
  component: Products,
} as Meta<ProductsProps>

export const Default: Story<ProductsProps> = () => (
  <>
    <GlobalStyle />
    <Products 
        background={bolsaRosa} 
        defaultRatings={4} 
        ratings={43} 
        nameProduct="Grande" 
        descriptionProducts="Blossom Pouch" 
        precoComDesconto="39.49" 
        procoTotal="78.66" 
        totalDesconsto="50"
    />
  </>
)

export const onButton: Story<ProductsProps> = () => (
  <>
    <GlobalStyle />
    <Products 
      background={bolsaRosa}
      defaultRatings={4}
      ratings={43}
      nameProduct="Grande"
      descriptionProducts="Blossom Pouch"
      precoComDesconto="39.49"
      procoTotal="78.66"
      totalDesconsto="50" buttonOn />
  </>
)