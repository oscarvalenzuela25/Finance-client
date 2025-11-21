import { PaletteOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    beige100: Palette["primary"];
    beige500: Palette["primary"];
    grey100: Palette["primary"];
    grey300: Palette["primary"];
    grey500: Palette["primary"];
    grey900: Palette["primary"];
    green: Palette["primary"];
    yellow: Palette["primary"];
    cyan: Palette["primary"];
    navy: Palette["primary"];
    red: Palette["primary"];
    purpleSecondary: Palette["primary"];
    purpleTertiary: Palette["primary"];
    turquoise: Palette["primary"];
    brown: Palette["primary"];
    magenta: Palette["primary"];
    blue: Palette["primary"];
    navyGrey: Palette["primary"];
    armyGreen: Palette["primary"];
    gold: Palette["primary"];
    orange: Palette["primary"];
  }
  interface PaletteOptions {
    beige100?: PaletteOptions["primary"];
    beige500?: PaletteOptions["primary"];
    grey100?: PaletteOptions["primary"];
    grey300?: PaletteOptions["primary"];
    grey500?: PaletteOptions["primary"];
    grey900?: PaletteOptions["primary"];
    green?: PaletteOptions["primary"];
    yellow?: PaletteOptions["primary"];
    cyan?: PaletteOptions["primary"];
    navy?: PaletteOptions["primary"];
    red?: PaletteOptions["primary"];
    purpleSecondary?: PaletteOptions["primary"];
    purpleTertiary?: PaletteOptions["primary"];
    turquoise?: PaletteOptions["primary"];
    brown?: PaletteOptions["primary"];
    magenta?: PaletteOptions["primary"];
    blue?: PaletteOptions["primary"];
    navyGrey?: PaletteOptions["primary"];
    armyGreen?: PaletteOptions["primary"];
    gold?: PaletteOptions["primary"];
    orange?: PaletteOptions["primary"];
  }
}

export const darkPalette: PaletteOptions = {
  mode: "dark",
  beige100: {
    main: "#F8F4F0",
    light: "rgb(249, 246, 243)",
    dark: "rgb(198, 195, 192)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  beige500: {
    main: "#98908B",
    light: "rgb(172, 166, 162)",
    dark: "rgb(121, 115, 111)",
    contrastText: "#fff",
  },
  grey100: {
    main: "#F2F2F2",
    light: "rgb(244, 244, 244)",
    dark: "rgb(193, 193, 193)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  grey300: {
    main: "#B3B3B3",
    light: "rgb(194, 194, 194)",
    dark: "rgb(143, 143, 143)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  grey500: {
    main: "#696868",
    light: "rgb(135, 134, 134)",
    dark: "rgb(84, 83, 83)",
    contrastText: "#fff",
  },
  grey900: {
    main: "#201F24",
    light: "rgb(76, 75, 79)",
    dark: "rgb(25, 24, 28)",
    contrastText: "#fff",
  },
  green: {
    main: "#277C78",
    light: "rgb(82, 150, 147)",
    dark: "rgb(31, 99, 96)",
    contrastText: "#fff",
  },
  yellow: {
    main: "#F2CDAC",
    light: "rgb(244, 215, 188)",
    dark: "rgb(193, 164, 137)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  cyan: {
    main: "#82C9D7",
    light: "rgb(155, 211, 223)",
    dark: "rgb(104, 160, 172)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  navy: {
    main: "#626070",
    light: "rgb(129, 127, 140)",
    dark: "rgb(78, 76, 89)",
    contrastText: "#fff",
  },
  red: {
    main: "#C94736",
    light: "rgb(211, 107, 94)",
    dark: "rgb(160, 56, 43)",
    contrastText: "#fff",
  },
  purpleSecondary: {
    main: "#826CB0",
    light: "rgb(155, 137, 191)",
    dark: "rgb(104, 86, 140)",
    contrastText: "#fff",
  },
  purpleTertiary: {
    main: "#AF81BA",
    light: "rgb(191, 154, 199)",
    dark: "rgb(140, 103, 148)",
    contrastText: "#fff",
  },
  turquoise: {
    main: "#597C7C",
    light: "rgb(122, 150, 150)",
    dark: "rgb(71, 99, 99)",
    contrastText: "#fff",
  },
  brown: {
    main: "#93674F",
    light: "rgb(168, 133, 114)",
    dark: "rgb(117, 82, 63)",
    contrastText: "#fff",
  },
  magenta: {
    main: "#934F6F",
    light: "rgb(168, 114, 139)",
    dark: "rgb(117, 63, 88)",
    contrastText: "#fff",
  },
  blue: {
    main: "#3F82B2",
    light: "rgb(101, 155, 193)",
    dark: "rgb(50, 104, 142)",
    contrastText: "#fff",
  },
  navyGrey: {
    main: "#97A0AC",
    light: "rgb(171, 179, 188)",
    dark: "rgb(120, 128, 137)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  armyGreen: {
    main: "#7F9161",
    light: "rgb(152, 167, 128)",
    dark: "rgb(101, 116, 77)",
    contrastText: "#fff",
  },
  gold: {
    main: "#CAB361",
    light: "rgb(212, 194, 128)",
    dark: "rgb(161, 143, 77)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  orange: {
    main: "#BE6C49",
    light: "rgb(203, 137, 109)",
    dark: "rgb(152, 86, 58)",
    contrastText: "#fff",
  },
  action: {
    disabled: "#A0A0A0",
    disabledBackground: "#404040",
    disabledOpacity: 1,
  },
};

export const lightPalette: PaletteOptions = {
  mode: "light",
  beige100: {
    main: "#F8F4F0",
    light: "rgb(249, 246, 243)",
    dark: "rgb(198, 195, 192)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  beige500: {
    main: "#98908B",
    light: "rgb(172, 166, 162)",
    dark: "rgb(121, 115, 111)",
    contrastText: "#fff",
  },
  grey100: {
    main: "#F2F2F2",
    light: "rgb(244, 244, 244)",
    dark: "rgb(193, 193, 193)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  grey300: {
    main: "#B3B3B3",
    light: "rgb(194, 194, 194)",
    dark: "rgb(143, 143, 143)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  grey500: {
    main: "#696868",
    light: "rgb(135, 134, 134)",
    dark: "rgb(84, 83, 83)",
    contrastText: "#fff",
  },
  grey900: {
    main: "#201F24",
    light: "rgb(76, 75, 79)",
    dark: "rgb(25, 24, 28)",
    contrastText: "#fff",
  },
  green: {
    main: "#277C78",
    light: "rgb(82, 150, 147)",
    dark: "rgb(31, 99, 96)",
    contrastText: "#fff",
  },
  yellow: {
    main: "#F2CDAC",
    light: "rgb(244, 215, 188)",
    dark: "rgb(193, 164, 137)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  cyan: {
    main: "#82C9D7",
    light: "rgb(155, 211, 223)",
    dark: "rgb(104, 160, 172)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  navy: {
    main: "#626070",
    light: "rgb(129, 127, 140)",
    dark: "rgb(78, 76, 89)",
    contrastText: "#fff",
  },
  red: {
    main: "#C94736",
    light: "rgb(211, 107, 94)",
    dark: "rgb(160, 56, 43)",
    contrastText: "#fff",
  },
  purpleSecondary: {
    main: "#826CB0",
    light: "rgb(155, 137, 191)",
    dark: "rgb(104, 86, 140)",
    contrastText: "#fff",
  },
  purpleTertiary: {
    main: "#AF81BA",
    light: "rgb(191, 154, 199)",
    dark: "rgb(140, 103, 148)",
    contrastText: "#fff",
  },
  turquoise: {
    main: "#597C7C",
    light: "rgb(122, 150, 150)",
    dark: "rgb(71, 99, 99)",
    contrastText: "#fff",
  },
  brown: {
    main: "#93674F",
    light: "rgb(168, 133, 114)",
    dark: "rgb(117, 82, 63)",
    contrastText: "#fff",
  },
  magenta: {
    main: "#934F6F",
    light: "rgb(168, 114, 139)",
    dark: "rgb(117, 63, 88)",
    contrastText: "#fff",
  },
  blue: {
    main: "#3F82B2",
    light: "rgb(101, 155, 193)",
    dark: "rgb(50, 104, 142)",
    contrastText: "#fff",
  },
  navyGrey: {
    main: "#97A0AC",
    light: "rgb(171, 179, 188)",
    dark: "rgb(120, 128, 137)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  armyGreen: {
    main: "#7F9161",
    light: "rgb(152, 167, 128)",
    dark: "rgb(101, 116, 77)",
    contrastText: "#fff",
  },
  gold: {
    main: "#CAB361",
    light: "rgb(212, 194, 128)",
    dark: "rgb(161, 143, 77)",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  orange: {
    main: "#BE6C49",
    light: "rgb(203, 137, 109)",
    dark: "rgb(152, 86, 58)",
    contrastText: "#fff",
  },
  action: {
    disabled: "#A0A0A0",
    disabledBackground: "#404040",
    disabledOpacity: 1,
  },
};

// Generador de paleta de colores
// import { createTheme } from "@mui/material/styles";

// const mains = {
//   beige100: "#F8F4F0",
//   beige500: "#98908B",
// } as const;

// const theme = createTheme({
//   palette: {
//     mode: "dark",
//     contrastThreshold: 3,
//     tonalOffset: { light: 0.2, dark: 0.2 },
//   },
// });

// const out: Record<string, any> = {};
// for (const [name, main] of Object.entries(mains)) {
//   const c = theme.palette.augmentColor({ color: { main } });
//   out[name] = {
//     main: c.main,
//     light: c.light,
//     dark: c.dark,
//     contrastText: c.contrastText,
//   };
// }
// console.info(JSON.stringify(out, null, 2));
