import useState from 'storybook-addon-state';
import { GlobalStyle } from "../../styles/Global";
import { CheckBox } from '../Checkboxes/CheckBox';
import { FiltrosWeb } from "./FiltrosWeb";

export default {
  title: 'FiltrosWeb/FiltrosWeb',
  component: FiltrosWeb,
}

export const Default = () => (
  <>
    <GlobalStyle />
    <FiltrosWeb text='Ola mundo'>
      <CheckBox label="Blue" name="Blue" />
    </FiltrosWeb>
  </>
)