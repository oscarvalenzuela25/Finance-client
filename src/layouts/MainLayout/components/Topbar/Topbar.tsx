import React, { MouseEvent, useState } from "react";
import { StyledContainerRoot } from "./styles";
import EntityAvatar from "@/components/EntityAvatar/EntityAvatar";
import { Button, Menu, MenuItem, useTheme } from "@mui/material";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const Topbar = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledContainerRoot>
      <Button variant="text" onClick={handleClick}>
        <EntityAvatar
          type="user"
          name="Tsuna el Chambeador"
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6WnJI-VSX01ebIg5hpD2vJbop9hVkgdvOEx9nQevt6PHZ0eNdSLrCuYeG4K-mARhgdj8&usqp=CAU"
          imgPosition="right"
          sxText={{ color: theme.palette.common.white }}
        />
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>
          <MeetingRoomIcon />
          Logout
        </MenuItem>
      </Menu>
    </StyledContainerRoot>
  );
};

export default Topbar;
