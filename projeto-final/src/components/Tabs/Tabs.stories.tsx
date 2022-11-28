import { Placeholder } from "../../assets/Icons/General/Placeholder";
import { GlobalStyle } from "../../styles/Global";
import { Tabs, TabsProps } from "./Tabs";
import { TabsItem } from "./TabsItem/TabsItem";

export default {
  title: 'Tabs/Tabs',
  component: Tabs,
}

export const Default = () => (
  <>
    <GlobalStyle />
    <Tabs>
      <TabsItem text="Product Description" />
      <TabsItem text="Numero de vendas" />
      <TabsItem text="Avaliações" />
      <TabsItem text="Ultimas compras" />
    </Tabs>
  </>
)
export const Active = () => (
  <>
    <GlobalStyle />
    <Tabs>
      <TabsItem text="Product Description" active/>
      <TabsItem text="Numero de vendas" />
      <TabsItem text="Avaliações" />
      <TabsItem text="Ultimas compras" />
    </Tabs>
  </>
)