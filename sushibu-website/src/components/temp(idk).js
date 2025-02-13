import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";

function CreateCard(props) {
  return (
    <div
      onClick={() => {
        alert("Hello from here");
      }}
    >
      <Card hoverable variant="outlined" style={{ backgroundColor: "grey" }}>
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={9}>
              <Grid container justifyContent="space-between">
                <Grid item>
                  <Typography variant="h5" align="left">
                    {props.name}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h5" align="right">
                    {props.price}
                  </Typography>
                </Grid>
              </Grid>
              <Typography variant="body2">{props.desc}</Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <img
                src={props.img}
                alt={"Not loading"}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

const MenuSelector = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard name="Sushi" desc="" price="" img=""></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard name="Bowls and Bao" desc="" price="" img=""></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="Wok and Snacks"
            desc=""
            price=""
            img=""
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard name="Sushi Sets" desc="" price="" img=""></CreateCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuSelector;
