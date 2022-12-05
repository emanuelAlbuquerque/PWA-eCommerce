import { Meta, Story } from "@storybook/react";
import { GlobalStyle } from "../../styles/Global";
import { Adress, AdressProps } from "./Adress";

export default {
  title: 'Adress/Adress',
  component: Adress,
} as Meta<AdressProps>

export const PageTitle: Story<AdressProps> = () => (
  <>
    <GlobalStyle />
    <Adress 
      nameEstado="Pernambuco"
      nomeCidade="Limoeiro"
      nomeRua="José Epfânio"
      numeroCasa={417}
      onClick = {() => console.log('esse é o endereço de entrega')}
    />
  </>
)