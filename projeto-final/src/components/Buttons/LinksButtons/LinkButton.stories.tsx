import { LinkButton } from "./LinksButton";
import { Meta, Story } from "@storybook/react";
import { ButtonProps } from "../Types";
import { Placeholder } from "../../../assets/Icons/General/Placeholder";

export default {
  title: 'Buttons/LinksButton',
  component: LinkButton,
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
  <LinkButton variant="default" icon={<Placeholder />} text="Ola mundo" />
)


export const Hover: Story<ButtonProps> = () => (
  <LinkButton variant="hover" icon={<Placeholder />} text="Ola mundo" />
)

export const Focus: Story<ButtonProps> = () => (
  <LinkButton variant="focused" icon={<Placeholder />} text="Ola mundo" />
)

export const Disable: Story<ButtonProps> = () => (
  <LinkButton variant='disable' icon={<Placeholder />} text="Ola mundo" />
)