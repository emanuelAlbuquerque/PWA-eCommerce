import { Theme } from "../../../styles/Theme";
import { IconProps } from "../Product/SkinCare";

export function Placeholder({color = Theme.Colors.dark}: IconProps) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 1.5a1 1 0 011-1h3.75a1 1 0 010 2H2.5v2.75a1 1 0 01-2 0V1.5zM16.5 11.75a1 1 0 011 1v3.75a1 1 0 01-1 1h-3.75a1 1 0 110-2h2.75v-2.75a1 1 0 011-1zM1.5 11.75a1 1 0 011 1v2.75h2.75a1 1 0 110 2H1.5a1 1 0 01-1-1v-3.75a1 1 0 011-1zM11.75 1.5a1 1 0 011-1h3.75a1 1 0 011 1v3.75a1 1 0 11-2 0V2.5h-2.75a1 1 0 01-1-1z"
        fill={color !== Theme.Colors.dark ? color : Theme.Colors.dark}
        className="icon"
      />
    </svg>
  )
}
