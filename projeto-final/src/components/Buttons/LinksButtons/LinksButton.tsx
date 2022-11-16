import { ButtonProps } from "../Types";
import { Ancora, corVariantes } from "./styles";

export const LinkButton = ({ children, variant }: ButtonProps) => {

  const { bgColor, bgBorder, color, mouseHover, focusMouse } = corVariantes[variant]

  return (
    <Ancora href="www.google.com"
      bgColor={bgColor}
      bgBorder={bgBorder}
      color={color}
      hoverBgBorder={mouseHover.hoverBgBorder}
      hoverBgColor={mouseHover.hoverBgColor}
      hoverColor={mouseHover.hoveColor}
      focusBgColor={focusMouse.focusBgColor}
      focusBgBorder={focusMouse.focusBgBorder}
      focusColor={focusMouse.focusColor}
    >
      {children}
    </Ancora>
  )
}