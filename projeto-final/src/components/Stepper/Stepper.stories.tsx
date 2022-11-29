import { GlobalStyle } from "../../styles/Global";
import { Stepper, StepperProps } from "./Stepper";
import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";


export default {
  title: 'Stepper/Stepper',
  component: Stepper,
} as Meta<StepperProps>

const Tamplate = () => {
  const [count, setCount] = useState(0)

  return( 
    <>
      <GlobalStyle />
      <Stepper count={count} setCount={setCount}/>
    </>
  )
}

export const Default = Tamplate.bind({})




