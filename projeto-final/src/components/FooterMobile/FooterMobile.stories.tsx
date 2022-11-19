import { GlobalStyle } from "../../styles/Global";
import { Accordian } from "../Accordian/Accordian";
import { FooterMobile } from "./FooterMobile";

export default {
  title: 'Footer/FooterMobile',
  component: FooterMobile,
}

export const Default = () => (
  <>
    <GlobalStyle />
    <Accordian>
      <FooterMobile />
    </Accordian>
  </>
)