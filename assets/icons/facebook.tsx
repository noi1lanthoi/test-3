import * as React from "react";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="31"
    fill="none"
    viewBox="0 0 30 31"
    {...props}
  >
    <path
      fill="#0062E0"
      d="M13.125 26.285C7.812 25.348 3.75 20.723 3.75 15.16 3.75 8.973 8.813 3.91 15 3.91s11.25 5.063 11.25 11.25c0 5.563-4.062 10.188-9.375 11.125l-.625-.5h-2.5z"
    ></path>
    <path
      fill="#fff"
      d="m19.375 18.285.5-3.125h-3v-2.187c0-.875.313-1.563 1.688-1.563H20V8.535c-.812-.125-1.687-.25-2.5-.25-2.562 0-4.375 1.563-4.375 4.375v2.5h-2.812v3.125h2.812v7.938a9.5 9.5 0 0 0 3.75 0v-7.938z"
    ></path>
  </svg>
);

export default React.memo(FacebookIcon);
