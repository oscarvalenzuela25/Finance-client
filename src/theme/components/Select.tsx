import { Components, Theme } from "@mui/material/styles";

export const MuiDarkSelect: Components<Theme>["MuiSelect"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      // 🟢 Borde normal + radio
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.beige500.main,
        borderRadius: "8px",
      },

      // 🟢 Hover (estado base)
      "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.beige500.light,
      },

      // 🟢 Focus (estado base)
      "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.beige500.dark,
      },

      // 🟢 Label en focus (cuando el Select está con InputLabel)
      "& .MuiInputLabel-root.Mui-focused": {
        color: theme.palette.beige500.main,
      },

      // 🟢 Texto normal
      "& .MuiSelect-select": {
        color: theme.palette.grey900.contrastText,
      },

      // 🔴 Disabled → todo beige100.dark
      "&.Mui-disabled .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.beige100.dark,
      },
      "&.Mui-disabled .MuiSelect-select": {
        color: `${theme.palette.beige100.dark} !important`,
        WebkitTextFillColor: theme.palette.beige100.dark,
        opacity: 1,
      },
      "&.Mui-disabled .MuiSvgIcon-root": {
        color: `${theme.palette.beige100.dark} !important`,
      },

      // Borde rojo base
      "&.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.error.main,
      },

      // Hover en error → rojo dark
      "&.Mui-error:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.error.dark,
      },

      // Focus en error → rojo dark
      "&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.error.dark,
      },

      // Label en error
      "& .MuiInputLabel-root.Mui-error": {
        color: theme.palette.error.main,
      },
      "& .MuiInputLabel-root.Mui-error.Mui-focused": {
        color: theme.palette.error.dark,
      },

      // ❌ Disabled + error → mantenemos beige100.dark
      "&.Mui-disabled.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.beige100.dark,
      },
      "&.Mui-disabled.Mui-error:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.beige100.dark,
      },
    }),
    icon: ({ theme }) => ({
      color: theme.palette.grey900.main,
      // Icono en disabled
      ".Mui-disabled &": {
        color: theme.palette.beige100.dark,
      },
      // Icono en error
      ".Mui-error &": {
        color: theme.palette.error.main,
      },
      ".Mui-error:hover &": {
        color: theme.palette.error.dark,
      },
    }),
  },
};
