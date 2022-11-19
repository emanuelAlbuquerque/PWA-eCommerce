import { ButtonDuo, ButtonDuoProps } from "./ButtonDuo";
import { Meta, Story } from "@storybook/react";
import { GlobalStyle } from "../../../styles/Global";
import { Bag } from "../../../assets/Icons/Navigation/Bag";
import { Placeholder } from "../../../assets/Icons/General/Placeholder";

export default {
  title: 'AssemblyButtons/Duo',
  component: ButtonDuo,
} as Meta<ButtonDuoProps>

export const Default: Story<ButtonDuoProps> = () => (
  <>
    <GlobalStyle />
    <ButtonDuo iconButtonLarge={<Placeholder />} iconButtonSmall={<Placeholder />} textButtonLarge="Label"/>
  </>
)