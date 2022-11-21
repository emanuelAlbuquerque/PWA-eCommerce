import { CheckBox, CheckBoxProps } from "./CheckBox";
import { Meta, Story } from "@storybook/react";
import { GlobalStyle } from "../../styles/Global";

export default {
  title: 'CheckBox/CheckBox',
  component: CheckBox,
} as Meta<CheckBoxProps>

export const Inactive: Story<CheckBoxProps> = () => (
  <>
    <GlobalStyle />
    <CheckBox label='Aperte aqui' name='ola' />
  </>
)

export const Disabled: Story<CheckBoxProps> = () => (
  <>
    <GlobalStyle />
    <CheckBox label='Aperte aqui' name='mundo' disabled />
  </>
)

export const Active: Story<CheckBoxProps> = () => (
  <>
    <GlobalStyle />
    <CheckBox label='Aperte aqui' name='aperte' checked />
  </>
)

export const Hover: Story<CheckBoxProps> = () => (
  <>
    <GlobalStyle />
    <CheckBox label="Label" name="tudo"  hover/>
  </>
)