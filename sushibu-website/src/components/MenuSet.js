import React from "react";
import { Box, Grid} from "@mui/material";
// import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import CreateCard from "./CreateCard";
import CreateCardSeparator from "./CreateCardSeparator";

import iconVegan from "../contents/Icons/Icon_Vegan.png";

import sushiSet_1 from "../contents/SushiSet_Bu1.jpg";
import sushiSet_2 from "../contents/SushiSet_Bu2.jpg";
import sushiSet_3 from "../contents/SushiSet_Bu3.jpg";
import sushiSet_4 from "../contents/SushiSet_Bu4.jpg";
import sushiSet_5 from "../contents/SushiSet_Bu5.jpg";

const MenuSet = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} l={12}>
          <CreateCardSeparator
            name="SUSHI RINKINIAI"
            desc=""
            titleVariant="h4" // Override just for this instance
          ></CreateCardSeparator>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ-1; (16 vnt)"
            desc="Philadelphia 4 vnt, California 4 vnt, Ebi 8 vnt"
            price="15.00"
            img={sushiSet_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ-2; (16 vnt)"
            desc="Philadelphia 4 vnt, California 4 vnt, Aliaska 4 vnt, Sezame Maguro 4 vnt"
            price="18.00"
            img={sushiSet_3}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ-3; (16 vnt)"
            desc="Sake 4 vnt, Teka 4 vnt, Ebi 4 vnt, Kani 4 vnt"
            price="13.00"
            img={sushiSet_2}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ-4; (16 vnt)"
            desc="Wakame 4 vnt, Avocado 4 vnt, Yasai 8 vnt"
            price="15.00"
            img={sushiSet_4}
            icon={iconVegan}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ-5; (24 vnt)"
            desc="Sake Wakame 8 vnt, Sezame Maguro 8 vnt, Kani 8 vnt"
            price="23.00"
            img={sushiSet_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ-6; (24 vnt)"
            desc="Tataki Sake 8 vnt, Ebi Avocado 8 vnt, Ebi 8 vnt"
            price="25.00"
            img={sushiSet_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ-7; (40 vnt)"
            desc="Sake 8 vnt, Wakame 8 vnt, California 8 vnt, Sake Wakame 8 vnt, Ebi Avocado 8 vnt"
            price="40.00"
            img={sushiSet_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ-8; (48 vnt)"
            desc="Ebi 4 vnt, Kani 4 vnt, Tekka 4 vnt, Sake 4 vnt, Philadelphia 8 vnt, California 8 vnt, Alaska 8 vnt, Sezame Maguro 8 vnt"
            price="50.00"
            img={sushiSet_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BŪ Draugų; (48 vnt)"
            desc="(Alaska 8 vnt, California 8 vnt, Sake Wakame 8 vnt, Traškios Krevetės 4 vnt, Sūrio Spurgytės 4 vnt, Spring Rolls 4 vnt, Kalmarų Žiedai 4 vnt"
            price="50.00"
            img={sushiSet_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="BIG BŪ; (64 vnt)"
            desc="Alaska 8 vnt, Philadelphia 8 vnt, California 8 vnt, Ebi Avocado 8 vnt, Sezame Maguro 8 vnt, Sake Wakame 8 vnt, Tataki Sake 8 vnt, Tori 8 vnt"
            price="70.00"
            img={sushiSet_5}
          ></CreateCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuSet;