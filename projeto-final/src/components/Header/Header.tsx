import { HeaderIcon } from "../../assets/Icons/General/HeaderIcon";
import { Profile } from "../../assets/Icons/General/Profile";
import { Search } from "../../assets/Icons/General/Search";
import { Bag } from "../../assets/Icons/Navigation/Bag";
import { Hearth } from "../../assets/Icons/Navigation/Heath";
import { Theme } from "../../styles/Theme";
import { NavBar } from "./NavBar/Navbar";
import { ContainerNavBar, ContainerPesquisa, HeaderContainer } from "./styles";

export function Header(){
  return(
    <HeaderContainer>
      <ContainerNavBar>
        <HeaderIcon />
        <NavBar />
      </ContainerNavBar>

      <ContainerPesquisa>
        <div className="container_input_pesquisa">
          <Search />
          <input type="text" className="input_pesquisa" placeholder="Search for products or brands....."/>
        </div>

        <div className="container_icons">
          <button className="icons">
            <Hearth color={Theme.Colors.primary} />
          </button>
          <button className="icons">
            <Profile color={Theme.Colors.primary} />
          </button>
          <button className="icons">
            <Bag color={Theme.Colors.primary} />
          </button>
        </div>
      </ContainerPesquisa>
    </HeaderContainer>
  )
}