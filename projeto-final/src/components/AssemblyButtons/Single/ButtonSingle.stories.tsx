import { ButtonSingle, ButtonSingleProps } from "./ButtonSingle";
import { Meta, Story } from "@storybook/react";
import { GlobalStyle } from "../../../styles/Global";
import { Bag } from "../../../assets/Icons/Navigation/Bag";

export default {
  title: 'AssemblyButtons/Single',
  component: ButtonSingle,
} as Meta<ButtonSingleProps>

export const Default: Story<ButtonSingleProps> = () => (
  <>
    <GlobalStyle />
    <ButtonSingle icon={<Bag />} text="Add to Bag"/>
  </>
)