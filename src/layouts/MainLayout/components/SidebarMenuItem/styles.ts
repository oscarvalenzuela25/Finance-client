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

export const StyledTextLaptop = styled(Typography)<{ selected?: boolean }>(
  ({ theme, selected = false }) => ({
    color: selected ? theme.palette.grey900.main : "inherit",
  })
);

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
