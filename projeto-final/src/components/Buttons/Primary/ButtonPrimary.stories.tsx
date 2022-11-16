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
  <ButtonPrimary variant="default">
    <div>
      <Placeholder />
      Ola mundo
    </div>
  </ButtonPrimary >
)


export const Hover: Story<ButtonProps> = () => (
  <ButtonPrimary variant="hover">
    <div>
      <Placeholder />
      Ola mundo
    </div>
  </ButtonPrimary >
)

export const Focus: Story<ButtonProps> = () => (
  <ButtonPrimary variant="focused">
    <div>
      <Placeholder />
      Ola mundo
    </div>
  </ButtonPrimary >
)

export const Disable: Story<ButtonProps> = () => (
  <ButtonPrimary variant='disable' >
    <div>
      <Placeholder />
      Ola mundo
    </div>
  </ButtonPrimary >
)
