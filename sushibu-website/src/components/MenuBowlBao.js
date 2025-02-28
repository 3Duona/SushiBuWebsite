import React from "react";
import { Box, Grid} from "@mui/material";
import CreateCard from "./CreateCard";
import CreateCardSeparator from "./CreateCardSeparator";

import iconVegan from "../content/Icons/Icon_Vegan.png";
import iconHot from "../content/Icons/Icon_Hot.png";
import iconHotVegan from "../content/Icons/Icon_HotVegan.png";
import iconHotDefault from "../content/Icons/Icon_HotDefault.png";
import iconVeganDefault from "../content/Icons/Icon_VeganDefault.png";

import bowl_1 from "../content/BowlBao_Bowl1.jpg";
import bao_1 from "../content/BowlBao_Bao.png";

const MenuBowl = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} l={12}>
          <CreateCardSeparator
            name="BOWL"
            desc={"Visi Bowl dubenėliai ruošiami su VIENODAIS PRIEDAIS: ryžiai, agurkas, edamame pupelės, sweet čili morkos, wakame, marinuotas imbieras, citrina, nori lapai, iceberg salota \n Pasirinktinai padažas: Sweet čili, Teriyaki, Krapų, Čili, Karai"}
          ></CreateCardSeparator>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="25. SAKE POKE"
            desc="Su Lašiša"
            price="8.00"
            img={bowl_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="26. MAGURO POKE"
            desc="Su Tunu"
            price="8.50"
            img={bowl_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="27. EBI POKE"
            desc="Su Tunu ir Lašiša"
            price="8.20"
            img={bowl_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="28. YAKI EBI POKE"
            desc="Su Traškia Krevete"
            price="8.50"
            img={bowl_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="29. CRUNCHY TORI POKE"
            desc="Su Traškia Vištiena"
            price="7.90"
            img={bowl_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="30. NASU PANKO POKE"
            desc="Su Traškiu Baklažanu"
            price="7.50"
            img={bowl_1}
            icon={iconVegan}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={12} l={12}>
          <CreateCardSeparator
            name="BAO BANDELES"
            desc="Kaina: 1vnt / 2vnt"
            titleVariant="h4"
          ></CreateCardSeparator>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="34. TORI"
            desc="Traški vištiena, Sweet čili morka, Iceberg, Karai padažas, Sezamas"
            price="4.40/8.30"
            img={bao_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="35. EBI"
            desc="Traški tigrinė krevetė, Ikrai, Avokadas, Svogūnų traškučiai, Teriyaki padažas, Sezamas"
            price="4.70/8.90"
            img={bao_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="36. NASU"
            desc="Traškus baklažanas, Sweet čili morka, Sūrio kremas, Sezamas, Teriyaki padažas"
            price="4.00/7.50"
            img={bao_1}
            icon={iconVegan}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="Trijų bao rinkinys"
            desc="Tori bao, Ebi bao, Nasu bao"
            price="12.00"
            img={bao_1}
          ></CreateCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuBowl;
