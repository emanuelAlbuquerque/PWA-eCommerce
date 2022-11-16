import { Meta, Story } from "@storybook/react";
import { GlobalStyle } from "../../styles/Global";
import { TextTypes, TextTypesProps } from "./Text";

export default {
  title: 'Text/Texts',
  component: TextTypes,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        values: ['DisplayLarge', 'DisplayMedium', 'DisplaySmall', 'TitleMedium', 'TitleRegular', 'BodyMedium', 'BodyRegular', 'LabelLarge', 'LabelMedium', 'LabelSmall', 'Link']
      }
    }
  }
} as Meta<TextTypesProps>

export const DisplayLarge: Story<TextTypesProps> = () => (
  <>
    <GlobalStyle />
    <TextTypes variant="DisplayLarge">
       Olá mundo
    </TextTypes >
  </>
)
export const BodyMedium: Story<TextTypesProps> = () => (
  <>
    <GlobalStyle />
    <TextTypes variant="BodyMedium">
       Olá mundo
    </TextTypes >
  </>
)
export const BodyRegular: Story<TextTypesProps> = () => (
  <>
    <GlobalStyle />
    <TextTypes variant="BodyRegular">
       Olá mundo
    </TextTypes >
  </>
)
export const DisplayMedium: Story<TextTypesProps> = () => (
  <>
    <GlobalStyle />
    <TextTypes variant="DisplayMedium">
       Olá mundo
    </TextTypes >
  </>
)
export const DisplaySmall: Story<TextTypesProps> = () => (
  <>
    <GlobalStyle />
    <TextTypes variant="DisplaySmall">
       Olá mundo
    </TextTypes >
  </>
)
export const LabelLarge: Story<TextTypesProps> = () => (
  <>
    <GlobalStyle />
    <TextTypes variant="LabelLarge">
       Olá mundo
    </TextTypes >
  </>
)
export const LabelMedium: Story<TextTypesProps> = () => (
  <>
    <GlobalStyle />
    <TextTypes variant="LabelMedium">
       Olá mundo
    </TextTypes >
  </>
)
export const LabelSmall: Story<TextTypesProps> = () => (
  <>
    <GlobalStyle />
    <TextTypes variant="LabelSmall">
       Olá mundo
    </TextTypes >
  </>
)
export const Link: Story<TextTypesProps> = () => (
  <>
    <GlobalStyle />
    <TextTypes variant="Link">
       Olá mundo
    </TextTypes >
  </>
)
export const TitleMedium: Story<TextTypesProps> = () => (
  <>
    <GlobalStyle />
    <TextTypes variant="TitleMedium">
       Olá mundo
    </TextTypes >
  </>
)
export const TitleRegular: Story<TextTypesProps> = () => (
  <>
    <GlobalStyle />
    <TextTypes variant="TitleRegular">
       Olá mundo
    </TextTypes >
  </>
)
