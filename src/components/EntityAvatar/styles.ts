import { styled, Typography } from "@mui/material";

export const StyledEntityAvatarContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "16px",
});

export const StyledEntityAvatarText = styled(Typography)(({ theme }) => ({
  ...theme.typography.textPreset4Bold,
  color: theme.palette.grey900.main,
}));
