import { Meta, Story } from "@storybook/react";
import { Placeholder } from "../../assets/Icons/General/Placeholder";
import { GlobalStyle } from "../../styles/Global";
import { AppBar, AppBarProps } from "./AppBar";

export default {
  title: 'AppBar/AppBar',
  component: AppBar,
} as Meta<AppBarProps>

export const PageTitle: Story<AppBarProps> = () => (
  <>
    <GlobalStyle />
    <AppBar variant="PageTitle" iconeEsquerda={<Placeholder />} iconeOne={<Placeholder />} iconeTwo={<Placeholder />} iconeTree={<Placeholder />} text="Seacrh"/>
  </>
)
export const Search: Story<AppBarProps> = () => (
  <>
    <GlobalStyle />
    <AppBar variant="Search" iconeEsquerda={<Placeholder />} iconeOne={<Placeholder />} iconeTwo={<Placeholder />} iconeTree={<Placeholder />} text="Seacrh" />
  </>
)