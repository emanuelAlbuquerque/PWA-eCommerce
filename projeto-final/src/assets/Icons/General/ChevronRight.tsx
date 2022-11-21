import { IconProps } from "../Product/SkinCare";


export function ChevronRight({className}: IconProps) {
  return(
    <svg
      width={10}
      height={18}
      viewBox="0 0 10 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 1.5L8.5 9 1 16.5"
        stroke="#13101E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}