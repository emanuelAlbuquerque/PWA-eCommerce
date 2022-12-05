import {useState} from 'react';
import { GlobalStyle } from "../../styles/Global";
import { CheckBox } from '../Checkboxes/CheckBox';
import { FiltrosWeb } from "./FiltrosWeb";

export default {
  title: 'FiltrosWeb/FiltrosWeb',
  component: FiltrosWeb,
}

const Tamplate = () => {
  const [checked, setIsChecked] = useState(false)

  return(
    <>
    <GlobalStyle />
    <FiltrosWeb text='Ola mundo'>
      <CheckBox label="Blue" name="Blue" isChecked={checked} setChecked={setIsChecked}/>
    </FiltrosWeb>
  </>
  )
}

export const Default = Tamplate.bind({})