import { GlobalStyle } from "../../styles/Global";
import { ReferAndEarn } from "./ReferAndEarn";
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
  title: 'ReferAndEarn/ReferAndEarn',
  component: ReferAndEarn,
  decorators: [withRouter],
}

export const Default = () => (
  <>
    <GlobalStyle />
    <ReferAndEarn />
  </>
)