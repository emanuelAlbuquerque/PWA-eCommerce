import { GlobalStyle } from "../../../styles/Global";
import { BannerWide, BannerWideProps } from "./BannerWide";
import { Meta, Story } from "@storybook/react";

import bannerDefault from '../../../assets/img/bannerDefault.png'

export default {
  title: 'Banner/BannerWide',
  component: BannerWide,
} as Meta<BannerWideProps>

export const Default: Story<BannerWideProps> = () => (
    <>
      <GlobalStyle />
      <BannerWide variant="default" background={bannerDefault}/>
      <BannerWide variant="funk" />
      <BannerWide variant="makeup"/>
      <BannerWide variant="spring"/>
    </>
)