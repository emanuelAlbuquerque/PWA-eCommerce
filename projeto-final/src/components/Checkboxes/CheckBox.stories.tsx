import { CheckBox, CheckBoxProps } from "./CheckBox";
import { Meta, Story } from "@storybook/react";
import { GlobalStyle } from "../../styles/Global";
import { useState } from "react";

export default {
  title: 'CheckBox/CheckBox',
  component: CheckBox,
} as Meta<CheckBoxProps>

const TamplateInactive = () => {
  const [selected, setSelected] = useState(false)

  return (
    <>
      <GlobalStyle />
      <CheckBox label='Aperte aqui' name='ola' isChecked={selected} setChecked={setSelected} />
    </>
  )
}
export const Inactive: Story<CheckBoxProps> = TamplateInactive.bind({})


const TamplateDisable = () => {
  const [selected, setSelected] = useState(false)

  return (
    <>
      <GlobalStyle />
      <CheckBox label='Aperte aqui' name='mundo' disabled isChecked={selected} setChecked={setSelected} />
    </>
  )
}
export const Disabled: Story<CheckBoxProps> = TamplateDisable.bind({})

const TamplateActive = () => {
  const [selected, setSelected] = useState(false)

  return (
    <>
      <GlobalStyle />
      <CheckBox label='Aperte aqui' name='aperte' checked isChecked={selected} setChecked={setSelected} />
    </>
  )
}
export const Active: Story<CheckBoxProps> = TamplateActive.bind({})


const TamplateHover = () => {
  const [selected, setSelected] = useState(false)

  return (
    <>
      <GlobalStyle />
      <CheckBox label="Label" name="tudo"  hover isChecked={selected} setChecked={setSelected} />
    </>
  )
}
export const Hover: Story<CheckBoxProps> = TamplateHover.bind({})
