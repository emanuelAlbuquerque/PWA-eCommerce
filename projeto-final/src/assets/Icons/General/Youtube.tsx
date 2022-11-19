import { Theme } from "../../../styles/Theme";
import { IconProps } from "../Product/SkinCare";

export function Youtube({ color = 'none' }: IconProps) {
  return (
    <svg
      width={26}
      height={18}
      viewBox="0 0 26 18"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.992 1.686c.383.383.66.86.8 1.382.816 3.28.628 8.458.017 11.864a3.1 3.1 0 01-2.184 2.182c-1.915.522-9.622.522-9.622.522s-7.707 0-9.622-.522a3.103 3.103 0 01-2.183-2.183c-.82-3.264-.596-8.446-.016-11.847A3.1 3.1 0 013.366.901C5.28.38 12.987.364 12.987.364s7.707 0 9.622.522c.523.141 1 .417 1.383.8zM16.702 9l-6.17 3.701V5.3l6.17 3.7z"
        fill={color !== 'none' ? color : Theme.Colors.primary}
      />
    </svg>
  )
}