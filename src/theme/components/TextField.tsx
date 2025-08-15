import { Components, Theme } from "@mui/material/styles";

export const MuiDarkTextField: Components<Theme>["MuiTextField"] = {
  styleOverrides: {
    root: ({ theme }) => ({
      // 🟢 Borde normal + radio
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.beige500.main,
        borderRadius: "8px",
      },

      // 🟢 Hover (estado base)
      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.beige500.light,
      },

      // 🟢 Focus (estado base)
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.beige500.dark,
      },

      // 🟢 Label en focus (estado base)
      "& .MuiInputLabel-root.Mui-focused": {
        color: theme.palette.beige500.main,
      },

      // 🟢 Iconos (adornment) normal
      "& .MuiInputAdornment-root .MuiSvgIcon-root": {
        color: theme.palette.grey900.main,
      },

      // 🟢 Texto normal, caret y placeholder
      "& .MuiOutlinedInput-input": {
        color: theme.palette.grey900.main,
        caretColor: theme.palette.grey900.main,
        "&::placeholder": {
          color: theme.palette.beige500.main,
          opacity: 1,
        },
      },

      // 🔴 Disabled → todo beige100.dark
      "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline":
        {
          borderColor: theme.palette.beige100.dark,
        },
      "& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-input": {
        color: `${theme.palette.beige100.dark} !important`,
        WebkitTextFillColor: theme.palette.beige100.dark,
        opacity: 1,
        "&::placeholder": {
          color: theme.palette.beige100.dark,
          opacity: 1,
        },
      },
      "& .MuiOutlinedInput-root.Mui-disabled .MuiInputAdornment-root .MuiSvgIcon-root":
        {
          color: `${theme.palette.beige100.dark} !important`,
        },
      "& .MuiInputLabel-root.Mui-disabled": {
        color: `${theme.palette.beige100.dark} !important`,
      },

      /* ===========================
         🔺 ESTADO ERROR (clave)
         =========================== */

      // Borde rojo base cuando hay error (MUI ya lo hace, pero lo fijamos por si tu base pisa)
      "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.error.main,
      },

      // Hover en error → rojo (usa dark para diferenciar; cambia a main si quieres plano)
      "& .MuiOutlinedInput-root.Mui-error:hover .MuiOutlinedInput-notchedOutline":
        {
          borderColor: theme.palette.error.dark,
        },

      // Focus en error → rojo dark
      "& .MuiOutlinedInput-root.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline":
        {
          borderColor: theme.palette.error.dark,
        },

      // Label en error
      "& .MuiInputLabel-root.Mui-error": {
        color: theme.palette.error.main,
      },
      "& .MuiInputLabel-root.Mui-error.Mui-focused": {
        color: theme.palette.error.dark,
      },

      // ❌ Si está disabled + error, mantenemos la paleta de disabled
      "& .MuiOutlinedInput-root.Mui-disabled.Mui-error .MuiOutlinedInput-notchedOutline":
        {
          borderColor: theme.palette.beige100.dark,
        },
      "& .MuiOutlinedInput-root.Mui-disabled.Mui-error:hover .MuiOutlinedInput-notchedOutline":
        {
          borderColor: theme.palette.beige100.dark,
        },
    }),
  },
};
