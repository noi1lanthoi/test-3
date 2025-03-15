import * as React from "react";
import { memo } from "react";

const NewIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="36"
    height="22"
    fill="none"
    viewBox="0 0 36 22"
    {...props}
  >
    <g clipPath="url(#clip0_3163_735)">
      <path
        fill="#111315"
        d="M3 5.27a1.5 1.5 0 0 1 1.364-1.493l30-2.728A1.5 1.5 0 0 1 36 2.543V14.39a1.5 1.5 0 0 1-1.288 1.485L3 20.4z"
        opacity="0.2"
      ></path>
      <path fill="#048A5A" d="M0 18.9v-1.5l3 .75v3.75L.75 19.65z"></path>
      <path
        fill="url(#paint0_linear_3163_735)"
        d="M0 5.28a1.5 1.5 0 0 1 1.375-1.494l33-2.75A1.5 1.5 0 0 1 36 2.53v11.99a1.5 1.5 0 0 1-1.376 1.495L0 18.9z"
      ></path>
      <path
        fill="#fff"
        d="m11.292 6.44-.361 5.273-5.387-5.091-.589 8.915 1.635-.168.36-5.285 5.388 5.103.59-8.916zm3.853 8.047 4.118-.424.102-1.47-4.118.424zm.47-7.033 4.118-.424.102-1.47-4.118.424zm-.222 3.232 3.891-.401.106-1.434-3.892.4zm-.75-4.591-.56 8.502 1.611-.166.584-8.505zm13.936 3.86-1.982-5.539-2.59 5.998-1.447-5.135-1.933.2 2.954 8.646 2.858-5.856 2.273 5.315 3.875-9.338-2.005.206z"
      ></path>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_3163_735"
        x1="0"
        x2="32.69"
        y1="4.65"
        y2="13.528"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#00CF84"></stop>
        <stop offset="1" stopColor="#01AF70"></stop>
      </linearGradient>
      <clipPath id="clip0_3163_735">
        <path fill="#fff" d="M0 .9h36v21H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default memo(NewIcon);
