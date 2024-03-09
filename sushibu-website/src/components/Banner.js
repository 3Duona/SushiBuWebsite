import React from "react";
import { Container, Link } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";

const Banner = () => {
  return (
    <Container
      disableGutters={true}
      style={{
        textAlignVertical: "center",
        textAlign: "center",
        backgroundColor: "cyan",
      }}
    >
      <p>SUSHI BŪ Kaunas</p>
      <p>
        <Link href="https://www.facebook.com/people/Sushi-B%C5%AB/100072549185858/">
          <FacebookIcon />
        </Link>
        <Link href="https://www.instagram.com/sushi.bu/">
          <InstagramIcon />
        </Link>
        <Link href="https://www.google.com/maps/place/Sushi+b%C5%AB/@54.899158,23.9327669,15.18z/data=!4m14!1m7!3m6!1s0x46e71f23388b6189:0xd190ca1e7c816ff0!2zU3VzaGkgYsWr!8m2!3d54.8999296!4d23.9324133!16s%2Fg%2F11ry5gs0b4!3m5!1s0x46e71f23388b6189:0xd190ca1e7c816ff0!8m2!3d54.8999296!4d23.9324133!16s%2Fg%2F11ry5gs0b4?entry=ttu">
          <GoogleIcon />
        </Link>
      </p>
      <p>Telefonas užsakymams</p>
      <a href="tel:867796967">+370 677 96967</a>
      <p>Adresas: K. Petrausko g. 39, 44162 Kaunas</p>
    </Container>
  );
};

export default Banner;
