import { ButtonDetailed, ButtonDetailedProps } from "./ButtonDetailed";
import { Meta, Story } from "@storybook/react";
import { GlobalStyle } from "../../../styles/Global";
import { Bag } from "../../../assets/Icons/Navigation/Bag";

export default {
  title: 'AssemblyButtons/Detailed',
  component: ButtonDetailed,
} as Meta<ButtonDetailedProps>

export const Default: Story<ButtonDetailedProps> = () => (
  <>
    <GlobalStyle />
    <ButtonDetailed title="Title" heading="Heading" textButton='Place Order'/>
  </>
)