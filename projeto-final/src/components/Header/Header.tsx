import { useState } from "react";
import { HeaderIcon } from "../../assets/Icons/General/HeaderIcon";
import { Profile } from "../../assets/Icons/General/Profile";
import { SearchIcon } from "../../assets/Icons/General/SearchIcon";
import { Bag } from "../../assets/Icons/Navigation/Bag";
import { Hearth } from "../../assets/Icons/Navigation/Heath";
import { Theme } from "../../styles/Theme";
import { NavBar } from "./NavBar/Navbar";
import { ContainerNavBar, ContainerPesquisa, HeaderContainer } from "./styles";

interface HeaderProps{
  setModalBagOn?: React.Dispatch<React.SetStateAction<boolean>>
}

export function Header({  setModalBagOn }: HeaderProps){

  const handleClickBag = () => {
    if (setModalBagOn){
      setModalBagOn(true)
    }
  }

  const [value, setValue] = useState('')

  return(
    <HeaderContainer>
      <ContainerNavBar>
        <HeaderIcon />
        <NavBar />
      </ContainerNavBar>

      <ContainerPesquisa>
        <div className="container_input_pesquisa">
          <SearchIcon />
          <input 
            type="text" 
            className="input_pesquisa" 
            placeholder="Search for products or brands....."
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <div className="container_icons">
          <button className="icons">
            <Hearth color={Theme.Colors.primary} />
          </button>
          <button className="icons">
            <Profile color={Theme.Colors.primary} />
          </button>
          <button className="icons" onClick={handleClickBag}>
            <Bag color={Theme.Colors.primary} />
          </button>
        </div>
      </ContainerPesquisa>
    </HeaderContainer>
  )
}