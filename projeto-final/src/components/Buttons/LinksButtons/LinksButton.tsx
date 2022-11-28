import { Link, NavLink } from "react-router-dom";
import { ButtonProps } from "../Types";
import { Ancora, corVariantes } from "./styles";

export const LinkButton = ({ text, icon, variant, onClick, className }: ButtonProps) => {

  const { bgColor, bgBorder, color, mouseHover, focusMouse } = corVariantes[variant]

  return (
    <Ancora
      bgColor={bgColor}
      bgBorder={bgBorder}
      color={color}
      hoverBgBorder={mouseHover.hoverBgBorder}
      hoverBgColor={mouseHover.hoverBgColor}
      hoverColor={mouseHover.hoveColor}
      focusBgColor={focusMouse.focusBgColor}
      focusBgBorder={focusMouse.focusBgBorder}
      focusColor={focusMouse.focusColor}
      onClick={onClick}
      className={className}
    > 
      {icon}
      {text}
    </Ancora>
  )
}