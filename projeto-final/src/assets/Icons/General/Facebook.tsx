import { Theme } from "../../../styles/Theme";
import { IconProps } from "../Product/SkinCare";

export function Facebook({ color = 'none' }: IconProps) {
  return (
    <svg
      width={14}
      height={27}
      viewBox="0 0 14 27"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M.509 14.708h2.84V26.4c0 .231.187.418.418.418h4.815c.23 0 .418-.187.418-.418V14.763h3.265c.212 0 .39-.159.415-.37l.496-4.304a.418.418 0 00-.415-.466H9V6.925c0-.813.437-1.226 1.3-1.226h2.46c.23 0 .418-.187.418-.418v-3.95a.418.418 0 00-.418-.419H9.372A3.322 3.322 0 009.217.91c-.588 0-2.632.116-4.246 1.6-1.789 1.647-1.54 3.617-1.48 3.959v3.155H.508a.418.418 0 00-.418.418v4.25c0 .23.187.417.418.417z"
        fill={color !== 'none' ? color : Theme.Colors.primary}
      />
    </svg>
  )
}