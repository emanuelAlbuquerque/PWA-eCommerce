import { Placeholder } from "../../assets/Icons/General/Placeholder";
import { GlobalStyle } from "../../styles/Global";
import { Offers, OffersProps } from "./Offers";

export default {
  title: 'Offers/Offers',
  component: Offers,
}

export const Default = () => (
  <>
    <GlobalStyle />
    <Offers descricaoCupom="Get upto 30% Off on order value above $100" codigo="ORDER100"/>
  </>
)