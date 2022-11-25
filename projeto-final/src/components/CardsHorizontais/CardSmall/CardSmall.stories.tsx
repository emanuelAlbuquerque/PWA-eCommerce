import { GlobalStyle } from "../../../styles/Global";
import { CardSmall, CardSmallProps } from "./CardSmall";
import { Meta, Story } from "@storybook/react";

import bolsaRosa from '../../../assets/img/bolsaRosa.png'

export default {
  title: 'Banner/CardSmall',
  component: CardSmall,
} as Meta<CardSmallProps>

export const Default: Story<CardSmallProps> = () => (
  <>
    <GlobalStyle />
    <CardSmall 
      background={bolsaRosa}
      nameProduct="Grande"
      descriptionProducts="Blossom Pouch"
      precoComDesconto="$39.49"
    />
  </>
)
