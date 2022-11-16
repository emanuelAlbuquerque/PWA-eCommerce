import * as React from "react"
import { Theme } from "../../../styles/Theme"
import { IconProps } from "../Product/SkinCare"

export function Categories({ color = 'none' }: IconProps) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.875 18.25a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zM5.125 8.5a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zM5.125 18.25a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75zM14.875 8.5a3.375 3.375 0 100-6.75 3.375 3.375 0 000 6.75z"
        stroke={color !== 'none' ? color : Theme.Colors.dark}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
