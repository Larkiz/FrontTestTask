export const CloseButton = ({ backgroundColor = "white", color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="88"
      height="52"
      viewBox="0 0 88 52"
      fill="none"
    >
      <g clipPath="url(#clip0_190_36761)">
        <rect
          width="88"
          height="52"
          transform="matrix(1 0 0 -1 0 52)"
          fill={backgroundColor}
        />
        <line
          x1="34.3448"
          y1="14.9407"
          x2="54.6264"
          y2="35.2223"
          stroke={color}
          strokeWidth="3"
        />
        <line
          x1="33.6576"
          y1="35.2223"
          x2="53.9392"
          y2="14.9407"
          stroke={color}
          strokeWidth="3"
        />
      </g>
      <rect x="1" y="1" width="86" height="50" stroke="black" strokeWidth="2" />
      <defs>
        <clipPath id="clip0_190_36761">
          <rect width="88" height="52" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
