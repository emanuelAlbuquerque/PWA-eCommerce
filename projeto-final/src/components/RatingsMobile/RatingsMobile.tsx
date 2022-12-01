import { Star } from "../../assets/Icons/General/Star";
import { Theme } from "../../styles/Theme";
import { Container } from "./style";

export interface RatingsMobile{
  totalRatings: number
  ratings: number
}

export function RatingsMobile({ ratings, totalRatings }: RatingsMobile){
  return(
    <Container>
      <div>
        <p>{ratings}</p>
        <Star color={Theme.Colors.highLight}/>
      </div>
      <div>
        <h2>Average Rating</h2>
        <p>{totalRatings} Ratings & 23 Reviews</p>
      </div>
    </Container>
  )
}