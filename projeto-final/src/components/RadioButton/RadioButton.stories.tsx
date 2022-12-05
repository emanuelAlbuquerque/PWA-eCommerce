import { RadioButton, RadioButtonProps } from "./RadioButton";
import { Meta, Story } from "@storybook/react";
import { GlobalStyle } from "../../styles/Global";
import { useState } from "react";

export default {
  title: 'RadioButton/RadioButton',
  component: RadioButton,
} as Meta<RadioButtonProps>

const TamplateInactive = () => {
  const [select, setSelect] = useState('')

  return(
    <>
      <GlobalStyle />
      <RadioButton value='ola' label='input' name='input_radio' id='1' selectRadioBtn={select} setSelectRadioBtn={setSelect} onClick={() => console.log('ola mundo')} />
    </>
  ) 
}
export const Inactive = TamplateInactive.bind({})


const TamplateDisable = () => {
  const [select, setSelect] = useState('')
  
  return (
    <>
      <GlobalStyle />
      <RadioButton value='ola' label='input' name='input_radio' id='2' disabled selectRadioBtn={select} setSelectRadioBtn={setSelect} onClick={() => console.log('ola mundo')} />
    </>
  )
}
export const Disabled = TamplateDisable.bind({})

const TamplateActive = () => {
  const [select, setSelect] = useState('')
  
  return (
    <>
      <GlobalStyle />
      <RadioButton value='ola' label='input' name='input_radio' id='3' checked selectRadioBtn={select} setSelectRadioBtn={setSelect} onClick={() => console.log('ola mundo')} />
    </>
  )
}
export const Active = TamplateActive.bind({})


const TamplateHover = () => {
  const [select, setSelect] = useState('')
  
  return (
    <>
      <GlobalStyle />
      <RadioButton 
        value='ola' 
        label='input' 
        name='input_radio' 
        id='4' 
        hover 
        selectRadioBtn={select} 
        setSelectRadioBtn={setSelect} 
        onClick={() => console.log('ola mundo')}
      />
    </>
  )
}
export const Hover = TamplateHover.bind({})
