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
  <ButtonSecondary variant="default" icon={<Placeholder />} text="Ola mundo" />
)


export const Hover: Story<ButtonProps> = () => (
  <ButtonSecondary variant="hover" icon={<Placeholder />} text="Ola mundo" />
)

export const Focus: Story<ButtonProps> = () => (
  <ButtonSecondary variant="focused" icon={<Placeholder />} text="Ola mundo" />
)

export const Disable: Story<ButtonProps> = () => (
  <ButtonSecondary variant= 'disable' icon={<Placeholder />} text="Ola mundo" />
)
