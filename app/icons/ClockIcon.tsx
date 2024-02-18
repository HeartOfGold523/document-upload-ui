import { SvgIcon } from "@mui/material";

const ClockIcon = (): JSX.Element => (
  <SvgIcon>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <circle r="10" cx="12" cy="12" />
      <line x1="12" y1="12" x2="7" y2="12" />
      <line x1="12" y1="12" x2="17" y2="17" />
    </svg>
  </SvgIcon>
);

export default ClockIcon;
