import { GlobalStyle } from "../../styles/Global";
import { Header } from "./Header";
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
  title: 'Header/Header',
  component: Header,
  decorators: [withRouter],
}

export const Default = () => (
  <>
    <GlobalStyle />
    <Header />
  </>
)
