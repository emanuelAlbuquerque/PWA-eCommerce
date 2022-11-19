import { useState } from "react";
import { Profile } from "../../assets/Icons/General/Profile";
import { Bag } from "../../assets/Icons/Navigation/Bag";
import { Categories } from "../../assets/Icons/Navigation/Categories";
import { Home } from "../../assets/Icons/Navigation/Home";
import { NavigationItem } from "./ButtonNavigationItem/NavigationItem";
import { Nav } from "./style";

export interface BottomNavigationProps{
  theme?: 'dark' | 'light'
}

export function BottomNavigation({ theme = 'light' }: BottomNavigationProps){
  return(
    <Nav theme={theme}>
        <NavigationItem 
          className="home" 
          icon={<Home />} 
          text="Home"
          id="home" 
          theme={theme}
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
        />
    </Nav>
  )
}