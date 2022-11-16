import { ButtonOutline } from "./ButtonOutline";
import { Meta, Story } from "@storybook/react";
import { ButtonProps } from "../Types";
import { Placeholder } from "../../../assets/Icons/General/Placeholder";

export default {
  title: 'Buttons/OutlineButtons',
  component: ButtonOutline ,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        values: ['default', 'hover', 'focused', 'disable']
      }
    }
  }
} as Meta<ButtonProps>

export const Default: Story<ButtonProps> = () => (
  <ButtonOutline variant="default">
    <div>
      <Placeholder />
      Ola mundo
    </div>
  </ButtonOutline >
)


export const Hover: Story<ButtonProps> = () => (
  <ButtonOutline variant="hover">
    <div>
      <Placeholder />
      Ola mundo
    </div>
  </ButtonOutline >
)

export const Focus: Story<ButtonProps> = () => (
  <ButtonOutline variant="focused">
    <div>
      <Placeholder />
      Ola mundo
    </div>
  </ButtonOutline >
)

export const Disable: Story<ButtonProps> = () => (
  <ButtonOutline variant='disable' >
    <div>
      <Placeholder />
      Ola mundo
    </div>
  </ButtonOutline >
)
