import { NavLink, useNavigate } from "react-router-dom";
import { Profile } from "../../assets/Icons/General/Profile";
import { Bag } from "../../assets/Icons/Navigation/Bag";
import { Categories } from "../../assets/Icons/Navigation/Categories";
import { HomeIcon } from "../../assets/Icons/Navigation/HomeIcon";
import { NavigationItem } from "./ButtonNavigationItem/NavigationItem";
import { Nav } from "./style";

export interface BottomNavigationProps{
  theme?: 'dark' | 'light'
}

export function BottomNavigation({ theme = 'light' }: BottomNavigationProps){
  const navigate = useNavigate()

  const onClickHome = () => navigate('/')
  const onClickCategoryPage = () => navigate('/categoryPage')

  return(
    <Nav theme={theme}>
          <NavigationItem 
            className="home" 
            icon={<HomeIcon />} 
            text="Home"
            id="home" 
            theme={theme}
            onClick={onClickHome}
          />
        
        <NavigationItem 
          className="categories" 
          icon={<Categories />} 
          text="Categories" 
          id="categories"
          theme={theme}
        />

        <NavigationItem 
          className="profile" 
          icon={<Profile className="icon_profile"/>} 
          text="Profile" 
          id="profile"
          theme={theme}
        />

          <NavigationItem 
            className="bag"  
            icon={<Bag />}
            text="Bag" 
            id="bag"
            theme={theme}
            onClick={onClickCategoryPage}
          />
    </Nav>
  )
}