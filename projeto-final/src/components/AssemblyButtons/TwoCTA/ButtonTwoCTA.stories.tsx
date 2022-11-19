import { ButtonTwoCTA, ButtonTwoCTAProps } from "./ButtonTwoCTA";
import { Meta, Story } from "@storybook/react";
import { GlobalStyle } from "../../../styles/Global";
import { Bag } from "../../../assets/Icons/Navigation/Bag";
import { Placeholder } from "../../../assets/Icons/General/Placeholder";

export default {
  title: 'AssemblyButtons/Two CTA',
  component: ButtonTwoCTA,
} as Meta<ButtonTwoCTAProps>

export const Default: Story<ButtonTwoCTAProps> = () => (
  <>
    <GlobalStyle />
    <ButtonTwoCTA 
      iconButtonPrimary={<Placeholder />} 
      iconButtonSecondary={<Placeholder />} 
      textButtonPrimary='label'
      textButtonSecondary="label"
    />
  </>
)