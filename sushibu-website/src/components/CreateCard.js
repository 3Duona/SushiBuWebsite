import React from "react";
import { Card, CardContent, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";

function CreateCard({ name, price, img, icon, desc }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if screen is xs (mobile)

  return (
    <Card
      variant="outlined"
      style={{
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        margin: 0,
        padding: 0,
        border: "1px solid white",
        borderRadius: "20px",
      }}
    >
      <CardContent style={{ padding: 0 }}>
        <Grid container spacing={0}>
            {/* Product Image */}
            <Grid 
              item 
              xs={12} 
              md={6} 
              style={{ padding: 0, margin: 0, position: "relative" }} // Ensure positioning context
            >
              {/* Main Product Image */}
              <img
                src={img}
                alt="Not loading"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                  maxHeight: isMobile ? "200px" : "500px", // Mobile: 200px, Desktop: 500px
                }}
              />

              {/* Overlay Icons */}
              {icon && (
              <img
                  src={icon}
                  alt=""
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    width: isMobile ? "50px" : "60px",
                    height: "auto",
                    opacity: 0.8,
                  }}
                />
              )}
            </Grid>

          {/* Product Description */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: "16px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Typography variant="h5" align="left" >
              {name.split(";").map((part, index) => (
                <span key={index} style={{ fontWeight: index === 0 ? "bold" : "normal" }}>
                  {part}
                  {/* <br /> */}
                </span>
              ))}
            </Typography>

            {isMobile ? (
              <Typography variant="body2">{desc}</Typography>
            ) : (
              <ul style={{ paddingLeft: "20px", marginTop: "8px", marginBottom: "8px" }}>
                {desc.replace(/[()]/g, '').split(",").map((item, index) => (
                  <li key={index}>
                    <Typography variant="body2">{item.trim()}</Typography>
                  </li>
                ))}
              </ul>
            )}

            <Typography variant="h5" align="left" sx={{ marginTop: "auto" }}>
              {price} €
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CreateCard;
