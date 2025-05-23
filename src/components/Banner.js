import React from "react";
import { Container, Link, Box, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

import iconWolt from "../content/Icons/wolt.png";
import iconBolt from "../content/Icons/bolt.png";

const Banner = () => {
  return (
    <Container
      disableGutters={true}
      style={{
        padding: "16px",
        textAlign: "center",
        backgroundColor: "none",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
        }}
      >
        {/* Social Media Links */}
        <Link
          href="https://www.facebook.com/people/Sushi-B%C5%AB/100072549185858/"
          style={{ color: "white" }}
        >
          <FacebookIcon />
        </Link>
        <Link
          href="https://www.instagram.com/_sushi_bu_"
          style={{ color: "white" }}
        >
          <InstagramIcon />
        </Link>
        <Link
          href="https://www.google.com/maps/place/Sushi+b%C5%AB/@54.899158,23.9327669,15.18z/data=!4m14!1m7!3m6!1s0x46e71f23388b6189:0xd190ca1e7c816ff0!2zU3VzaGkgYsWr!8m2!3d54.8999296!4d23.9324133!16s%2Fg%2F11ry5gs0b4!3m5!1s0x46e71f23388b6189:0xd190ca1e7c816ff0!8m2!3d54.8999296!4d23.9324133!16s%2Fg%2F11ry5gs0b4?entry=ttu"
          style={{ color: "white" }}
        >
          <GoogleIcon />
        </Link>

        {/* Wolt Link */}
        <Link
          href="https://wolt.com/lt/ltu/kaunas/restaurant/sushibu"
          target="_blank"
          style={{ color: "white" }}
        >
          <img
            src={iconWolt}
            alt="Wolt"
            style={{
              height: "25px",
              width: "25px",
              borderRadius: "5px",
              objectFit: "contain",
            }}
          />
        </Link>

        {/* Bolt Link */}
        <Link
          href="https://food.bolt.eu/lt-LT/13-kaunas/p/30241/info"
          target="_blank"
          style={{ color: "white" }}
        >
          <img
            src={iconBolt}
            alt="Bolt"
            style={{
              height: "25px",
              width: "25px",
              borderRadius: "5px",
              objectFit: "contain",
            }}
          />
        </Link>
      </Box>

      {/* Contact Info */}
      <Typography sx={{ fontWeight: "bold", fontSize: "24px" }}>
        Telefonas užsakymams:{" "}
        <a
          href="tel:+37067796967"
          style={{ color: "white", textDecoration: "none" }}
        >
          <span style={{ whiteSpace: "nowrap" }}>+370 677 96967</span>
        </a>
      </Typography>
      <Typography>Adresas: K. Petrausko g. 39, 44162 Kaunas</Typography>
    </Container>
  );
};

export default Banner;

// sx={{ fontSize: "16px"}}
