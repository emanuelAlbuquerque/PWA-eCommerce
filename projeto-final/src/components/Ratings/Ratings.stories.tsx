import { GlobalStyle } from "../../styles/Global";
import { Ratings, RatingsProps } from "./Ratings";

export default {
  title: 'Ratings/Ratings',
  component: Ratings,
}

export const Default = () => (
  <>
    <GlobalStyle />
    <Ratings defaultValue={0}/>
  </>
)
export const OneStar = () => (
  <>
    <GlobalStyle />
    <Ratings defaultValue={1}/>
  </>
)
export const TwoStar = () => (
  <>
    <GlobalStyle />
    <Ratings defaultValue={2}/>
  </>
)
export const ThreeStar = () => (
  <>
    <GlobalStyle />
    <Ratings defaultValue={3}/>
  </>
)
export const ForStar = () => (
  <>
    <GlobalStyle />
    <Ratings defaultValue={4}/>
  </>
)
export const FiveStar = () => (
  <>
    <GlobalStyle />
    <Ratings defaultValue={5}/>
  </>
)
