import { Container } from "./styles";
import { NavLink } from "react-router-dom";


export function NavBar(){
  return(
    <Container>
      <ul>
        <li>
          <NavLink to="/categoryPage">
            Handbags
          </NavLink>  
        </li>
        <li>
          <a href="">Watches</a>
        </li>
        <li>
          <a href="">Skincare</a>
        </li>
        <li>
          <a href="">Jewellery</a>
        </li>
        <li>
          <a href="">Apparels</a>
        </li>
      </ul>
    </Container>
  )
}