import { ButtonSecondary } from "./ButtonSecondary";
import { Meta, Story } from "@storybook/react";
import { ButtonProps } from "../Types";
import { Placeholder } from "../../../assets/Icons/General/Placeholder";

export default {
  title: 'Buttons/SecondaryButtons',
  component: ButtonSecondary,
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
  <ButtonSecondary variant="default">
    <div>
      <Placeholder />
      Ola mundo
    </div>
  </ButtonSecondary >
)


export const Hover: Story<ButtonProps> = () => (
  <ButtonSecondary variant="hover">
    <div>
      <Placeholder />
      Ola mundo
    </div>
  </ButtonSecondary >
)

export const Focus: Story<ButtonProps> = () => (
  <ButtonSecondary variant="focused">
    <div>
      <Placeholder />
      Ola mundo
    </div>
  </ButtonSecondary >
)

export const Disable: Story<ButtonProps> = () => (
  <ButtonSecondary variant= 'disable' >
    <div>
      <Placeholder />
      Ola mundo
    </div>
  </ButtonSecondary >
)
