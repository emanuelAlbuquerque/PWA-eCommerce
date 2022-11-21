import { SideNavigation, SideNavigationProps } from "./SideNavigation";
import { Meta, Story } from "@storybook/react";
import { GlobalStyle } from "../../styles/Global";

export default {
  title: 'SideNavigation/SideNavigation',
  component: SideNavigation,
} as Meta<SideNavigationProps>

export const Default: Story<SideNavigationProps> = () => (
  <>
    <GlobalStyle />
    <SideNavigation  text="Label"/>
  </>
)
export const Selected: Story<SideNavigationProps> = () => (
  <>
    <GlobalStyle />
    <SideNavigation  text="Label" selected/>
  </>
)
