import { GlobalStyle } from "../../styles/Global";
import { FooterWeb } from "./FooterWeb";

export default {
  title: 'Footer/FooterWeb',
  component: FooterWeb,
}

export const Default = () => (
  <>
    <GlobalStyle />
    <FooterWeb />
  </>
)