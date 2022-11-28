import { Star } from "../../assets/Icons/General/Star";
import { Theme } from "../../styles/Theme";
import { Container } from "./style";

export function RatingsMobile(){
  return(
    <Container>
      <div>
        <p>4.5</p>
        <Star color={Theme.Colors.highLight}/>
      </div>
      <div>
        <h2>Average Rating</h2>
        <p>43 Ratings & 23 Reviews</p>
      </div>
    </Container>
  )
}