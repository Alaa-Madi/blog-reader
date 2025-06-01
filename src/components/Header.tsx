// Header.js
import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SendIcon from "@mui/icons-material/Send";
import ExploreIcon from "@mui/icons-material/Explore";
import PersonIcon from "@mui/icons-material/Person";

export default function Header() {
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

        <Typography variant="h5" fontWeight="bold" >
           Blog Reader
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton color="inherit"><HomeIcon /></IconButton>
          <IconButton color="inherit"><SendIcon /></IconButton>
          <IconButton color="inherit"><ExploreIcon /></IconButton>
          <IconButton color="inherit"><PersonIcon /></IconButton>
          <Avatar alt="User" src="https://i.pravatar.cc/40" sx={{ width: 32, height: 32 }} />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
