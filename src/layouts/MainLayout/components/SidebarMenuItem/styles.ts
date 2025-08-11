import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export const StyledMenuItemContainerLaptop = styled("div")<{
  selected?: boolean;
}>(({ theme, selected = false }) => {
  if (selected) {
    return {
      cursor: "pointer",
      display: "flex",
      gap: "16px",
      alignItems: "center",
      padding: "16px 32px",
      borderRadius: "0px 12px 12px 0px",
      backgroundColor: theme.palette.beige100.main,
      borderLeft: `4px solid ${theme.palette.green.main}`,
    };
  }
  return {
    cursor: "pointer",
    display: "flex",
    gap: "16px",
    alignItems: "center",
    padding: "16px 32px",
    borderRadius: "0px 12px 12px 0px",
    color: theme.palette.grey300.main,
    backgroundColor: theme.palette.grey900.main,
    transition: "color 0.3s ease",
    "&:hover": {
      color: theme.palette.grey100.main,
    },
  };
});

export const StyledTextLaptop = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "isMinimized" && prop !== "selected",
})<{
  selected?: boolean;
  isMinimized?: boolean;
}>(({ theme, selected = false, isMinimized = false }) => ({
  color: selected ? theme.palette.grey900.main : "inherit",
  whiteSpace: "nowrap",
  overflow: "hidden",

  // Estado visual
  opacity: isMinimized ? 0 : 1,
  transform: isMinimized ? "translateX(-4px)" : "translateX(0)",

  // Animaciones
  transition: "all 200ms ease",
  // Espera a que termine la animación de width (300ms) antes de mostrar el texto
  transitionDelay: isMinimized ? "0ms" : "300ms",

  // Evita clicks/tab en modo minimizado
  pointerEvents: isMinimized ? "none" : "auto",
}));

export const StyledMenuItemContainerTablet = styled("div")<{
  selected?: boolean;
}>(({ theme, selected = false }) => {
  if (selected) {
    return {
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      alignItems: "center",
      textAlign: "center",
      padding: "8px 17.5px 12px 17.5px",
      borderRadius: "8px 8px 0px 0px",
      backgroundColor: theme.palette.beige100.main,
      borderBottom: `4px solid ${theme.palette.green.main}`,
    };
  }
  return {
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    alignItems: "center",
    textAlign: "center",
    padding: "8px 17.5px 12px 17.5px",
    borderRadius: "8px 8px 0px 0px",
    color: theme.palette.grey300.main,
    backgroundColor: theme.palette.grey900.main,
    transition: "color 0.3s ease",
    "&:hover": {
      color: theme.palette.grey100.main,
    },
  };
});

export const StyledTextTablet = styled(Typography)<{ selected?: boolean }>(
  ({ theme, selected = false }) => ({
    color: selected ? theme.palette.grey900.main : "inherit",
  })
);

export const StyledMenuItemContainerMobile = styled("div")<{
  selected?: boolean;
}>(({ theme, selected = false }) => {
  if (selected) {
    return {
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "8px 22.3px 12px 22.3px",
      borderRadius: "8px 8px 0px 0px",
      backgroundColor: theme.palette.beige100.main,
      borderBottom: `4px solid ${theme.palette.green.main}`,
    };
  }
  return {
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "8px 22.3px 12px 22.3px",
    borderRadius: "8px 8px 0px 0px",
    color: theme.palette.grey300.main,
    backgroundColor: theme.palette.grey900.main,
    transition: "color 0.3s ease",
    "&:hover": {
      color: theme.palette.grey100.main,
    },
  };
});
