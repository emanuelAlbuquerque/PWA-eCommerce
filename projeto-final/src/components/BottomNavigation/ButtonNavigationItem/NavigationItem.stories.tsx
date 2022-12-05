import { NavigationItem, NavigationItemProps } from "./NavigationItem";
import { Meta, Story } from "@storybook/react";
import { GlobalStyle } from "../../../styles/Global";
import { Placeholder } from "../../../assets/Icons/General/Placeholder";
import { Bag } from "../../../assets/Icons/Navigation/Bag";

export default {
  title: 'BottomNavigation/NavigationItem',
  component: NavigationItem,
} as Meta<NavigationItemProps>

export const BottomNavigationItemLight: Story<NavigationItemProps> = () => (
  <>
    <GlobalStyle />
    <NavigationItem icon={<Bag />} text="Label" theme="light"/>
  </>
)

export const BottomNavigationItemDark: Story<NavigationItemProps> = () => (
  <>
    <GlobalStyle />
    <NavigationItem theme="dark" icon={<Bag />} text="Label" />
  </>
)

export const BottomNavigationItemLightActive: Story<NavigationItemProps> = () => (
  <>
    <GlobalStyle />
    <NavigationItem icon={<Bag />} text="Label" theme="light" active="active"/>
  </>
)

export const BottomNavigationItemDarkActive: Story<NavigationItemProps> = () => (
  <>
    <GlobalStyle />
    <NavigationItem theme="dark" icon={<Bag />} text="Label" active="active"/>
  </>
)