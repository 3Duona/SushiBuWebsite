import React from "react";
import { AppBar, Grid, Toolbar, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="static" color="primary" className="footer">
      <Toolbar>
        <Grid container direction="column">
          <Grid item>
            <Typography variant="body2" color="inherit">
            Dėl alergenų kreiptis į aptarnaujantį personalą
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()} Sushi bū / Visos teisės saugomos,
            Sprendimas:
              <Link style={{ textDecoration: "none", fontWeight: "bold" }} href="http://bliumberg.lt/portfolio/"> bliumberg.lt</Link>
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
