import * as React from "react"
import { Theme } from "../../../styles/Theme"
import { IconProps } from "../Product/SkinCare"

export function Bag({ color = 'none', isWeb = true, className }: IconProps) {
  return (
    <svg
      width={22}
      height={21}
      viewBox="0 0 22 21"
      fill={isWeb ? 'none' : color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      
      <path
        d="M18.579 5.75H3.42a.75.75 0 00-.745.667l-1.334 12a.75.75 0 00.746.833h17.824a.75.75 0 00.745-.833l-1.333-12a.75.75 0 00-.745-.667zM7.25 4.75a3.75 3.75 0 017.5 0"
        stroke={color !== 'none' ? color : Theme.Colors.dark}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}