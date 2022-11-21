import { useState } from "react";
import { Star } from "../../assets/Icons/General/Star";
import { Container } from "./style";

export interface RatingsProps{
  defaultValue: number
}

export function Ratings({ defaultValue }: RatingsProps){
  if(defaultValue > 5){
    defaultValue = 5
  }else if(defaultValue < 0){
    defaultValue = 0
  }
  const [rating, setRating] = useState(defaultValue);
  
  return (
    <Container>
      {[...Array(5)].map((star, index) => {
        index += 1
        return (
          <button
            type="button"
            key={index}
            onClick={(e) => {
              if(e.currentTarget.children[0].classList.contains('on')){
                setRating(index - 1)
              }else{
                setRating(index)
              }
            } 
          } 
          >
            <Star className={index <= rating ? "on" : "off"} />
          </button>
        );
      })}
    </Container>
  );
}