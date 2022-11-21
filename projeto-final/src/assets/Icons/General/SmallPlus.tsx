import { IconProps } from "../Product/SkinCare";


export function SmallPlus({className}:IconProps){
  return(
    <svg
      width={12}
      height={12}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11 6H1M6 1v10"
        stroke="#13101E"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        
      />
    </svg>
  )
}