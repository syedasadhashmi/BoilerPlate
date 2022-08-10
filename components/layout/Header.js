import React, { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FastfoodIcon from "@mui/icons-material/Fastfood";
const pages = [
  {
    title: "Home",
    link: "../Home/",
  },
  {
    title: "Orders",
    link: "../Orders/",
  },
  {
    title: "Users",
    link: "../Users/",
  },
  {
    title: "Restaurants",
    link: "../Restaurants/",
  },
];
const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const logoutHandler = () => {
    localStorage.removeItem("tokenDetails");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <FastfoodIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
        <Link href="../Home">
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FooPanda
          </Typography>
        </Link>
        <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link href={page.link}>{page.title}</Link>
                </Typography>
              </MenuItem>
            ))}
            <MenuItem key="logout" onClick={handleCloseNavMenu}>
              <Typography textAlign="center">
                <Link href="../Login">
                  <span onClick={logoutHandler}>Logout</span>
                </Link>
              </Typography>
            </MenuItem>
          </Menu>
        </Box>

        <FastfoodIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
        <Link href="../Home">
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            FooPanda
          </Typography>
        </Link>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page.title}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link href={page.link}>{page.title}</Link>
            </Button>
          ))}
          <Button
            key="logout"
            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: "white", display: "block" }}
          >
            <Link href="../Login">
              <span onClick={logoutHandler}>Logout</span>
            </Link>
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
