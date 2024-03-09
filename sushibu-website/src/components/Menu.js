import React, { useState } from "react";
import {
  Tabs,
  Tab,
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
} from "@mui/material";

import sushi_1 from "../contents/TestSushi.png";

const Menu = () => {
  const [tabValueMenu, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

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

  return (
    <div>
      <Tabs value={tabValueMenu} onChange={handleChange} centered>
        <Tab label="Sušhiai" />
        <Tab label="Poke Dubenėliai" />
        <Tab label="Bao Bandelės" />
        <Tab label="Užkandžiai" />
      </Tabs>
      <Box hidden={tabValueMenu !== 0}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} l={4}>
            <CreateCard
              name="1. SAKE"
              desc="(Lašiša, agurkas, sezamas)"
              price="4.50"
              img={sushi_1}
            ></CreateCard>
          </Grid>
          <Grid item xs={12} md={6} l={4}>
            <CreateCard
              name="2. SAKE AVOCADO"
              desc="(Lašiša, avokadas, majonezo padažas)"
              price="4.70"
              img={sushi_1}
            ></CreateCard>
          </Grid>
          <Grid item xs={12} md={6} l={4}>
            <CreateCard
              name="3. TEKKA"
              desc="(Tunas, agurkas, karai padažas)"
              price="4.90"
              img={sushi_1}
            ></CreateCard>
          </Grid>
          <Grid item xs={12} md={6} l={4}>
            <CreateCard
              name="4. EBI"
              desc="(Traški tigrinė krevetė, avokadas, karai padažas)"
              price="4.80"
              img={sushi_1}
            ></CreateCard>
          </Grid>
          <Grid item xs={12} md={6} l={4}>
            <CreateCard
              name="5. KANI"
              desc="(Krabų lazdelės, agurkas, majonezo padažas)"
              price="4.30"
              img={sushi_1}
            ></CreateCard>
          </Grid>
          <Grid item xs={12} md={6} l={4}>
            <CreateCard
              name="6. UNAGI"
              desc="(Ungurys, teriyaki padažas, agurkas, sezamas)"
              price="6.50"
              img={sushi_1}
            ></CreateCard>
          </Grid>
          <Grid item xs={12} md={6} l={4}>
            <CreateCard
              name="7. WAKAME"
              desc="(Jūros dumbliai, agurkas, sezamas, karai padažas)"
              price="4.20"
              img={sushi_1}
            ></CreateCard>
          </Grid>
        </Grid>
      </Box>
      <Box hidden={tabValueMenu !== 1}>
        <p>B</p>
      </Box>
      <Box hidden={tabValueMenu !== 2}>
        <p>C</p>
      </Box>
      <Box hidden={tabValueMenu !== 3}>
        <p>D</p>
      </Box>
    </div>
  );
};

export default Menu;
