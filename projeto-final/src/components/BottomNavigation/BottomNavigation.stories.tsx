import { BottomNavigation, BottomNavigationProps } from "./BottomNavigation";
import { Meta, Story } from "@storybook/react";
import { GlobalStyle } from "../../styles/Global";
import { withRouter } from 'storybook-addon-react-router-v6'

export default {
  title: 'BottomNavigation/BottomNavigation',
  component: BottomNavigation,
  decorators: [withRouter],
} as Meta<BottomNavigationProps>

export const BottomNavigationLight: Story<BottomNavigationProps> = () => (
  <>
    <GlobalStyle />
    <BottomNavigation />
  </>
)

export const BottomNavigationDark: Story<BottomNavigationProps> = () => (
  <>
    <GlobalStyle />
    <BottomNavigation theme="dark"/>
  </>
)