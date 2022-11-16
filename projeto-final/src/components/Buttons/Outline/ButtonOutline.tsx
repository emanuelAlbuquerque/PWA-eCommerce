import { ButtonProps } from "../Types";
import { Button, corVariantes } from "./styles";

export const ButtonOutline = ({ children, variant }: ButtonProps) => {

  const { bgColor, bgBorder, color, mouseHover, focusMouse } = corVariantes[variant]

  return (
    <Button
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
    </Button>
  )
}