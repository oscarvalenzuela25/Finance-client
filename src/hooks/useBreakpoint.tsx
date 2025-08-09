import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { Breakpoint } from "@mui/material/styles";

const useBreakpoint = (): Breakpoint => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.between("xs", "mobile"));
  const tablet = useMediaQuery(theme.breakpoints.between("mobile", "tablet"));
  const laptop = useMediaQuery(theme.breakpoints.up("tablet"));

  if (laptop) return "laptop";
  if (tablet) return "tablet";
  if (mobile) return "mobile";
  return "xs";
};

export default useBreakpoint;
