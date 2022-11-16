import * as React from "react"
import { Theme } from "../../../styles/Theme"
import { IconProps } from "../Product/SkinCare"

export function Home({color = 'none'}: IconProps) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.25 17.5V13a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75v4.5a.75.75 0 01-.75.75H2.5a.75.75 0 01-.75-.75V8.832a.75.75 0 01.245-.555l7.5-6.82a.75.75 0 011.009 0l7.5 6.82a.75.75 0 01.246.555V17.5a.75.75 0 01-.75.75H13a.75.75 0 01-.75-.75v0z"
        stroke={color !== 'none' ? color : Theme.Colors.dark}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

