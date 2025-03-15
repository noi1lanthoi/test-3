import React, { memo } from "react";

const MenuBurger = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      fill="none"
      viewBox="0 0 28 28"
      {...props}
    >
      <g id="Component 1">
        <path
          id="Vector"
          fill="#fff"
          d="M20.426 7.875q.246 0 .41-.164A.56.56 0 0 0 21 7.3v-.602q0-.245-.164-.41a.56.56 0 0 0-.41-.164H.574q-.245 0-.41.164A.56.56 0 0 0 0 6.7v.602q0 .245.164.41.165.165.41.164zm-5.25 6.426q0 .246-.178.41a.6.6 0 0 1-.424.164h-14a.56.56 0 0 1-.41-.164A.56.56 0 0 1 0 14.3v-.602q0-.246.164-.41a.56.56 0 0 1 .41-.164h14q.246 0 .424.164.178.165.178.41zm5.824 7q0 .246-.164.41a.56.56 0 0 1-.41.164H.574a.56.56 0 0 1-.41-.164A.56.56 0 0 1 0 21.3v-.602q0-.246.164-.41a.56.56 0 0 1 .41-.164h19.852q.246 0 .41.164.165.164.164.41z"
        ></path>
      </g>
    </svg>
  );
};

export default memo(MenuBurger);
