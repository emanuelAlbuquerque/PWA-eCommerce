import { ButtonPrimary } from "./ButtonPrimary";
import { Meta, Story } from "@storybook/react";
import { ButtonProps } from "../Types";
import { Placeholder } from "../../../assets/Icons/General/Placeholder";

export default{
  title: 'Buttons/PrimaryButtons',
  component: ButtonPrimary,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        values: ['default', 'hover', 'focused', 'disable']
      }
    }
  }
}as Meta<ButtonProps>

export const Default: Story<ButtonProps> = () => (
  <ButtonPrimary variant="default" icon={<Placeholder />} text="Ola mundo" />
)


export const Hover: Story<ButtonProps> = () => (
  <ButtonPrimary variant="hover"  icon={<Placeholder />} text="Ola mundo" />
)

export const Focus: Story<ButtonProps> = () => (
  <ButtonPrimary variant="focused"  icon={<Placeholder />} text="Ola mundo" />
)

export const Disable: Story<ButtonProps> = () => (
  <ButtonPrimary variant='disable'  icon={<Placeholder />} text="Ola mundo" />
)
