import * as React from "react";

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="31"
    fill="none"
    viewBox="0 0 30 31"
    {...props}
  >
    <path
      fill="url(#paint0_linear_3113_3101)"
      d="M15 26.41c6.213 0 11.25-5.037 11.25-11.25S21.213 3.91 15 3.91 3.75 8.947 3.75 15.16 8.787 26.41 15 26.41"
    ></path>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M8.856 15.032a534 534 0 0 1 6.537-2.834c3.113-1.303 3.76-1.53 4.182-1.537.092-.002.3.021.434.13a.48.48 0 0 1 .16.306c.014.088.033.288.018.445-.169 1.784-.898 6.113-1.27 8.11-.157.846-.466 1.13-.766 1.157-.65.06-1.145-.433-1.775-.849-.987-.65-1.544-1.056-2.502-1.69-1.107-.735-.39-1.138.242-1.797.165-.173 3.033-2.799 3.088-3.037.007-.03.014-.14-.052-.2-.066-.058-.162-.038-.232-.022q-.15.034-4.728 3.145-.671.465-1.216.452c-.4-.008-1.17-.227-1.742-.415-.702-.23-1.26-.35-1.212-.74q.039-.306.834-.624"
      clipRule="evenodd"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_3113_3101"
        x1="15"
        x2="15"
        y1="3.91"
        y2="26.243"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2AABEE"></stop>
        <stop offset="1" stopColor="#229ED9"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default React.memo(TelegramIcon);
