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
import styles from "../../styles/Header.module.css";
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
      <Toolbar className={styles.toolBarDirection}>
        <Link href="../Home">
          <Typography
            className={styles.link}
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: "flex",
              justifyContent: "center",
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            HN JOBS
          </Typography>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
