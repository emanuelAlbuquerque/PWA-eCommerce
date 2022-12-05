import { GlobalStyle } from "../../styles/Global";
import { RatingsMobile } from "./RatingsMobile";

export default {
  title: 'RatingsMobile/RatingsMobile',
  component: RatingsMobile,
}

export const Default = () => (
  <>
    <GlobalStyle />
    <RatingsMobile ratings={3} totalRatings={35}/>
  </>
)