import * as React from "react"
import { IconProps } from "./SkinCare"

export function Handbags({ color = '#17494D' }: IconProps) {
  return (
    <svg
      width={33}
      height={35}
      viewBox="0 0 33 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4.5 11.5L1 30.5l3 3 26-.5 1-3.5L28.5 12l-2-2h-20l-2 1.5z"
        fill="url(#paint0_linear_134_649)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.2 11.035a.958.958 0 00-.942.785L2.067 29.192a2.873 2.873 0 002.826 3.392h22.5a2.873 2.873 0 002.835-3.336l-2.842-17.41a.958.958 0 00-.945-.803H6.2zm-2.826.439A2.873 2.873 0 016.2 9.12h20.24a2.873 2.873 0 012.836 2.41l2.843 17.41a4.789 4.789 0 01-4.727 5.56h-22.5a4.789 4.789 0 01-4.71-5.654l3.192-17.372z"
        fill="#17494D"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.576 2.415c-3.546 0-6.633 2.603-7.45 6.226h14.9c-.818-3.623-3.905-6.226-7.45-6.226zm9.403 6.226C25.128 4.003 21.241.5 16.576.5 11.91.5 8.023 4.003 7.172 8.64c-.114.62-.174 1.261-.174 1.916h19.155c0-.655-.06-1.295-.174-1.915zM7.488 15.2a.958.958 0 01.947-.813h13.408a.958.958 0 110 1.916H9.257L7.466 27.94a.958.958 0 11-1.893-.29l1.915-12.452zM17.533 28.275c0-.53.429-.958.958-.958h6.704a.958.958 0 010 1.915h-6.704a.958.958 0 01-.958-.957z"
        fill="#17494D"
      />
      <defs>
        <linearGradient
          id="paint0_linear_134_649"
          x1={15.1667}
          y1={7.38889}
          x2={17.8267}
          y2={33.3877}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0} />
          <stop offset={1} stopColor={color} stopOpacity={0.57} />
        </linearGradient>
      </defs>
    </svg>
  )
}

