import * as React from "react"
import { Theme } from "../../../styles/Theme"
import { IconProps } from "./SkinCare"

export function Watch({ color = '#17494D'}: IconProps) {
  return (
    <svg
      width={24}
      height={34}
      viewBox="0 0 24 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.242 2.513a.237.237 0 00-.234.195l-.935-.17.935.17-1.01 5.574a.95.95 0 11-1.87-.339l1.01-5.574A2.137 2.137 0 018.242.613h7.516a2.137 2.137 0 012.104 1.756l1.01 5.574a.95.95 0 11-1.87.34l-1.01-5.575.935-.17-.935.17a.237.237 0 00-.234-.195H8.242zM15.758 32.1a.237.237 0 00.234-.195l.935.17-.935-.17 1.01-5.574a.95.95 0 111.87.338l-1.01 5.575A2.138 2.138 0 0115.759 34H8.241a2.138 2.138 0 01-2.104-1.756l-1.01-5.575a.95.95 0 011.87-.338l1.01 5.574-.935.17.935-.17a.237.237 0 00.234.195h7.516z"
        fill="#17494D"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.362 17C.362 10.573 5.572 5.363 12 5.363c6.427 0 11.637 5.21 11.637 11.637 0 6.427-5.21 11.637-11.637 11.637C5.573 28.637.362 23.427.362 17z"
        fill="url(#paint0_linear_134_696)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7.263c-5.378 0-9.738 4.36-9.738 9.737 0 5.378 4.36 9.738 9.738 9.738 5.378 0 9.737-4.36 9.737-9.738 0-5.378-4.36-9.737-9.737-9.737zM.362 17C.362 10.573 5.572 5.363 12 5.363c6.427 0 11.637 5.21 11.637 11.637 0 6.427-5.21 11.637-11.637 11.637C5.573 28.637.362 23.427.362 17z"
        fill="#17494D"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 10.113a.95.95 0 01.95.95v4.987h4.987a.95.95 0 010 1.9H12a.95.95 0 01-.95-.95v-5.938a.95.95 0 01.95-.95z"
        fill="#17494D"
      />
      <defs>
        <linearGradient
          id="paint0_linear_134_696"
          x1={11.3533}
          y1={2.77644}
          x2={14.6947}
          y2={28.3594}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor={color} stopOpacity={0.57} />
        </linearGradient>
      </defs>
    </svg>
  
  )
}

