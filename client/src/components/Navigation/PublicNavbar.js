import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Link } from "react-router-dom";
import "../Navigation/PublicNavbar.css"
let pages = [
  <Link to="/products" style={{ textDecoration: "none", color: "currentColor" }}>
    PRODUCTS
  </Link>,
   <Link to="/category" style={{ textDecoration: "none", color: "currentColor" }}>
   CATEGORIES
 </Link>,
  <Link to="/about" style={{ textDecoration: "none", color: "currentColor" }}>
    ABOUT US
  </Link>,
];

const styles = {
  largeIcon: {
    width: 55,
    height: 55,
  },
  background: "linear-gradient(to right, #3CA55C, #B5AC49)",
};

const PublicNavbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" style={styles}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocalFloristIcon
            style={styles.largeIcon}
            sx={{ display: { xs: "none", md: "flex" }, mr: 3 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Roboto",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            EL MANBET
          </Typography>
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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Typography
            component="a"
            href="/register"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Sign Up
          </Typography>
          <Typography
            component="a"
            href="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Login
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default PublicNavbar;
