import React from "react";
import { AppBar, Toolbar, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" color="primary" className="footer">
      <Toolbar>
        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} Sushi bū / Visos teisės saugomos
          Sprendimas: 
          <Link href="http://bliumberg.lt/portfolio/">bliumberg.lt</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
