import { Order, OrderProps } from "./Order";
import { Meta, Story } from "@storybook/react";
import { GlobalStyle } from '../../styles/Global';
import { withRouter } from 'storybook-addon-react-router-v6'


export default {
  title: 'CardVertical/Order',
  component: Order,
  decorators: [withRouter],
} as Meta<OrderProps>

export const Default: Story<OrderProps> = () => (
  <>
    <GlobalStyle />
    <Order
      variant="default"
      title='Order Summary'
      deliveryFee={0}
      discount={0}
      subTotal={100}
    />
  </>
)