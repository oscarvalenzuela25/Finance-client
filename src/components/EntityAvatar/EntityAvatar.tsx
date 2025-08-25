import React, { CSSProperties, FC } from "react";
import { StyledEntityAvatarContainer, StyledEntityAvatarText } from "./styles";
import { Avatar, useTheme } from "@mui/material";
import useServices, { ServiceImgs } from "@/hooks/useServices";
import useColors from "@/hooks/useColors";

type Props = {
  type: "user" | "service";
  name: string;
  category?: keyof ServiceImgs;
  imgUrl?: string;
  imgPosition?: "left" | "right";
  sxText?: CSSProperties;
};

const EntityAvatar: FC<Props> = ({
  type,
  name,
  category,
  imgUrl,
  imgPosition = "left",
  sxText = {},
}) => {
  const theme = useTheme();
  const { serviceImgs } = useServices();
  const { pickAvatarBg } = useColors();

  let newImgUrl = imgUrl;
  if (category && type === "service") {
    newImgUrl = serviceImgs[category]?.src || "";
  }

  const { bg, text } =
    type === "user"
      ? pickAvatarBg(name, theme.palette.grey900.main)
      : { bg: "#cccccc", text: "#000000" };

  const avatar = (
    <Avatar
      alt={name}
      src={newImgUrl}
      slotProps={{
        img: {
          draggable: "false",
        },
      }}
      sx={{
        width: 40,
        height: 40,
        "&.MuiAvatar-root": {
          backgroundColor: bg,
          color: text,
        },
      }}
    />
  );

  return (
    <StyledEntityAvatarContainer>
      {imgPosition === "left" && avatar}
      <StyledEntityAvatarText sx={{ ...sxText }}>{name}</StyledEntityAvatarText>
      {imgPosition === "right" && avatar}
    </StyledEntityAvatarContainer>
  );
};

export default EntityAvatar;
