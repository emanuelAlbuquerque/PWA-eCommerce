import * as React from "react"
import { Theme } from "../../../styles/Theme"
import { IconProps } from "../Product/SkinCare"

export function Hearth({ color = 'none' }: IconProps) {
  return (
    <svg
      width={22}
      height={20}
      viewBox="0 0 22 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 18.25S1.625 13 1.625 6.625A4.876 4.876 0 0111 4.747h0a4.876 4.876 0 019.375 1.878C20.375 13 11 18.25 11 18.25z"
        stroke={color !== 'none' ? color : Theme.Colors.dark}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
