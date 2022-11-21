import { Theme } from "../../../styles/Theme";
import { IconProps } from "../Product/SkinCare";

export function Star({className}: IconProps){
  return(
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11.414 16.881l4.728 2.996c.604.383 1.355-.187 1.175-.892l-1.366-5.374a.821.821 0 01.266-.832l4.24-3.53c.557-.463.27-1.388-.446-1.434l-5.537-.36a.79.79 0 01-.68-.501l-2.065-5.2a.78.78 0 00-1.458 0l-2.065 5.2a.79.79 0 01-.68.501l-5.537.36c-.716.046-1.003.97-.446 1.435l4.24 3.529a.82.82 0 01.266.832l-1.267 4.983c-.215.847.685 1.53 1.41 1.071l4.394-2.784a.77.77 0 01.828 0z"
        fill={Theme.Colors.lightText}
        stroke={Theme.Colors.lightText}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}