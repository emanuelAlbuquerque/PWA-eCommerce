import { RadioButton, RadioButtonProps } from "./RadioButton";
import { Meta, Story } from "@storybook/react";
import { GlobalStyle } from "../../styles/Global";

export default {
  title: 'RadioButton/RadioButton',
  component: RadioButton,
} as Meta<RadioButtonProps>

export const Inactive: Story<RadioButtonProps> = () => (
  <>
    <GlobalStyle />
    <RadioButton value='ola' label='input' name='input_radio' id='1'/>
  </>
)

export const Disabled: Story<RadioButtonProps> = () => (
  <>
    <GlobalStyle />
    <RadioButton value='ola' label='input' name='input_radio' id='2' disabled/>
  </>
)

export const Active: Story<RadioButtonProps> = () => (
  <>
    <GlobalStyle />
    <RadioButton value='ola' label='input' name='input_radio' id='3' checked/>
  </>
)

export const Hover: Story<RadioButtonProps> = () => (
  <>
    <GlobalStyle />
    <RadioButton value='ola' label='input' name='input_radio' id='4' hover />
  </>
)