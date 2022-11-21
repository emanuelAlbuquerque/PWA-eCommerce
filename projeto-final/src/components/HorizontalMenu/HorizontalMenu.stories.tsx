import { HorizontalMenu, HorizontalMenuProps } from "./HorizontalMenu";
import { Meta, Story } from "@storybook/react";
import { GlobalStyle } from "../../styles/Global";
import { Placeholder } from "../../assets/Icons/General/Placeholder";

export default {
  title: 'HorizontalMenu/HorizontalMenu',
  component: HorizontalMenu,
} as Meta<HorizontalMenuProps>

export const Default: Story<HorizontalMenuProps> = () => (
  <>
    <GlobalStyle />
    <HorizontalMenu text="Aperte aqui" icon={<Placeholder />}/>
  </>
)
export const Selected: Story<HorizontalMenuProps> = () => (
  <>
    <GlobalStyle />
    <HorizontalMenu text="Aperte aqui" icon={<Placeholder />} checked/>
  </>
)
