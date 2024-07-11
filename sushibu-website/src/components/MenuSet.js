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
            <Typography variant="body2" style={{ whiteSpace: "pre-line" }}>
              {props.desc}
            </Typography>
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
        <Grid item xs={12} md={12} l={12}>
          <CreateCard
            name="SUSHI RINKINIAI"
            desc=""
            price=""
            img=""
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ-1 (16 vnt.)"
            desc={"Philadelphia 4 vnt.\n California 4 vnt.\n Ebi 8 vnt.\n"}
            price="15.00"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ-2"
            desc="16 vnt. (Philadelphia 4 vnt. California 4 vnt. Aliaska 4 vnt. Sezame Maguro 4 vnt.)"
            price="18.00"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ-3"
            desc="16 vnt. (Sake 4 vnt. Teka 4 vnt. Ebi 4 vnt. Kani 4 vnt.)"
            price="13.00"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ-4"
            desc="16 vnt. (Wakame 4 vnt. Avocado 4 vnt. Yasai 8 vnt.)"
            price="15.00"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ-5"
            desc="24 vnt. (Sake Wakame 8 vnt. Sezame Maguro 8 vnt. Kani 8 vnt.)"
            price="23.00"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ-6"
            desc="24 vnt. (Tataki Sake 8 vnt. Ebi Avocado 8 vnt. Ebi 8 vnt.)"
            price="25.00"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ-7"
            desc="40 vnt. (Sake 8 vnt. Wakame 8 vnt. California 8 vnt. Sake Wakame 8 vnt. Ebi Avocado 8 vnt.)"
            price="40.00"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ-8"
            desc="48 vnt. (Ebi 4 vnt. Kani 4 vnt. Tekka 4 vnt. Sake 4 vnt. Philadelphia 8 vnt. California 8 vnt. Alaska 8 vnt. Sezame Maguro 8 vnt.)"
            price="50.00"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ Draugų"
            desc="48 vnt. (Alaska 8 vnt. California 8 vnt. Sake Wakame 8 vnt. Traškios Krevetės 4 vnt. Sūrio Spurgytės 4 vnt. Spring Rolls 4 vnt. Kalmarų Žiedai 4 vnt.)"
            price="50.00"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BIG BŪ"
            desc="64 vnt. (Alaska 8 vnt. Philadelphia 8 vnt. California 8 vnt. Ebi Avocado 8 vnt. Sezame Maguro 8 vnt. Sake Wakame 8 vnt. Tataki Sake 8 vnt. Tori 8 vnt.)"
            price="70.00"
            img={sushi_1}
          ></CreateCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuSet;
