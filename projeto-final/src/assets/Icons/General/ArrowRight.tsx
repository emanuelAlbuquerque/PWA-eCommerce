import { IconProps } from "../Product/SkinCare";


export function ArrowRight({className}: IconProps){
  return(
    <svg
      width={16}
      height={11}
      viewBox="0 0 16 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 5.5h14m0 0L10.5 1M15 5.5L10.5 10"
        stroke="#13101E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}