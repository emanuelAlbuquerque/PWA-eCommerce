import { GlobalStyle } from "../../../styles/Global";
import { BannerSmall, BannerSmallProps } from "./BannerSmall";
import { Meta, Story } from "@storybook/react";


export default {
  title: 'Banner/BannerSmall',
  component: BannerSmall,
} as Meta<BannerSmallProps>

export const Facepacks: Story<BannerSmallProps> = () => (
  <>
    <GlobalStyle />
    <BannerSmall variant="facepacks" />
  </>
)

export const Skincare: Story<BannerSmallProps> = () => (
  <>
    <GlobalStyle />
    <BannerSmall variant="skincare" />
  </>
)