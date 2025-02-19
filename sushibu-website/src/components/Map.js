import React from "react";
import { Box } from "@mui/material";

const Map = () => {
  return (
    <Box sx={{ marginTop: "16px", marginBottom: "8px" }}>
      <div className="navmap">
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2294.1703255616944!2d23.929833012409976!3d54.89993265724367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e71f23388b6189%3A0xd190ca1e7c816ff0!2zU3VzaGkgYsWr!5e0!3m2!1slt!2slt!4v1706309909770!5m2!1slt!2slt"
          width="100%"
          height="250"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </Box>
  );
};

export default Map;
