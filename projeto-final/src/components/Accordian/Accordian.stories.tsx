import useState from 'storybook-addon-state';
import { GlobalStyle } from "../../styles/Global";
import { Accordian } from "./Accordian";

export default {
  title: 'Accordian/Accordian',
  component: Accordian,
}

export const Default = () => (
  <>
    <GlobalStyle />
    <Accordian />
  </>
)