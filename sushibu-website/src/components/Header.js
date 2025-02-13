import * as React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";

const pages = {
  SUSHI: "MenuSushi",
  "SUSHI SETS": "MenuSet",
  "BOWL & BAO": "MenuBowlBao",
  "WOK & SNACK": "MenuWokSnack",
};

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  // Function to generate menu items
  const renderMenuItems = (color) =>
    Object.entries(pages).map(([displayName, routePath]) => (
      <MenuItem key={routePath} onClick={handleCloseNavMenu}>
        <Typography textAlign="center">
          <Link style={{ textDecoration: "none", color }} to={`/${routePath}`}>
            {displayName}
          </Link>
        </Typography>
      </MenuItem>
    ));

  return (
    <AppBar position="sticky" className="navbar">
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: "flex", alignItems: "center" }}>
          {/* MOBILE: Burger Menu on the Left */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
  id="menu-appbar"
  anchorEl={anchorElNav}
  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
  keepMounted
  transformOrigin={{ vertical: "top", horizontal: "left" }}
  open={Boolean(anchorElNav)}
  onClose={handleCloseNavMenu}
  sx={{
    display: { xs: "block", md: "none" },
    "& .MuiPaper-root": {
      backgroundColor: "black",  // Set the dropdown background color to black
    },
    "& .MuiMenuItem-root": {
      color: "white",  // Set text color inside the dropdown to white
    },
  }}
>
  {renderMenuItems("white")}
</Menu>
          </Box>

          {/* LOGO + NAME + MENU ITEMS CONTAINER (LEFT-ALIGNED) */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <AdbIcon sx={{ mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                mr: 3, // Adds spacing between logo and menu
              }}
            >
              SUSHI BŪ
            </Typography>

            {/* DESKTOP MENU ITEMS (ALIGNED LEFT) */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>{renderMenuItems("white")}</Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
