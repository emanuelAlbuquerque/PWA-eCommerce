import { GlobalStyle } from "../../styles/Global";
import { TextField } from "./TextField";

export default {
  title: 'TextField/TextField',
  component: TextField,
}

export const Default = () => (
  <>
    <GlobalStyle />
    <TextField />
  </>
)