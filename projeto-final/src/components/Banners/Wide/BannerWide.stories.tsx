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
    </>
)
export const Funk: Story<BannerWideProps> = () => (
    <>
      <GlobalStyle />
      <BannerWide variant="funk" />
    </>
)
export const Makeup: Story<BannerWideProps> = () => (
    <>
      <GlobalStyle />
      <BannerWide variant="makeup"/>
    </>
)
export const Spring: Story<BannerWideProps> = () => (
    <>
      <GlobalStyle />
      <BannerWide variant="spring"/>
    </>
)