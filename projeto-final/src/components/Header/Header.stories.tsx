import { GlobalStyle } from "../../styles/Global";
import { Header } from "./Header";

export default {
  title: 'Header/Header',
  component: Header,
}

export const Default = () => (
  <>
    <GlobalStyle />
    <Header />
  </>
)
