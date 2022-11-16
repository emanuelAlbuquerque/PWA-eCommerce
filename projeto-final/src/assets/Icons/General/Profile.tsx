import { Theme } from "../../../styles/Theme";
import { IconProps } from "../Product/SkinCare";


export function Profile({ color = 'none', className }: IconProps) {
  return (
    <svg
      width={20}
      height={19}
      viewBox="0 0 20 19"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M.272 17.314a1 1 0 101.456 1.372L.272 17.314zm18 1.372a1 1 0 001.456-1.372l-1.456 1.372zM13.5 5.5A3.5 3.5 0 0110 9v2a5.5 5.5 0 005.5-5.5h-2zM10 9a3.5 3.5 0 01-3.5-3.5h-2A5.5 5.5 0 0010 11V9zM6.5 5.5A3.5 3.5 0 0110 2V0a5.5 5.5 0 00-5.5 5.5h2zM10 2a3.5 3.5 0 013.5 3.5h2A5.5 5.5 0 0010 0v2zM1.728 18.686C3.893 16.389 6.808 15 10 15v-2c-3.795 0-7.222 1.656-9.728 4.314l1.456 1.372zM10 15c3.191 0 6.107 1.389 8.272 3.686l1.456-1.372C17.222 14.656 13.795 13 10 13v2z"
        fill={color !== 'none' ? color : Theme.Colors.dark}
        className="icon"
      />
    </svg>
  )
}
