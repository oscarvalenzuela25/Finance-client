declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    mobile: true;
    tablet: true;
    laptop: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

const breakpoints = {
  values: {
    mobile: 375,
    tablet: 768,
    laptop: 1440,
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

export default breakpoints;
