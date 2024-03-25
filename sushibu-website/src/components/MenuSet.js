import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";

import sushi_1 from "../contents/TestSushi.png";

function CreateCard(props) {
  return (
    <Card variant="outlined" style={{ backgroundColor: "grey" }}>
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
  );
}

const MenuSet = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="1. SNACKS"
            desc="(Lašiša)"
            price="10"
            img={sushi_1}
          ></CreateCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuSet;
