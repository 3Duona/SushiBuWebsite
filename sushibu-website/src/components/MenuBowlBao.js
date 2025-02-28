import React from "react";
import { Box, Grid} from "@mui/material";
import CreateCard from "./CreateCard";
import CreateCardSeparator from "./CreateCardSeparator";

import iconVegan from "../content/Icons/Icon_Vegan.png";
import iconHot from "../content/Icons/Icon_Hot.png";
import iconHotVegan from "../content/Icons/Icon_HotVegan.png";
import iconHotDefault from "../content/Icons/Icon_HotDefault.png";
import iconVeganDefault from "../content/Icons/Icon_VeganDefault.png";

import bowl_1 from "../content/BowlBao_Bowl1.jpg"

import Bowl_25 from "../content/BowlBao/25.SakePoke.jpg";
import Bowl_26 from "../content/BowlBao/26.MagoroPoke.jpg";
import Bowl_28 from "../content/BowlBao/28.YakiEbiPoke.jpg";
import Bowl_29 from "../content/BowlBao/29.CrunchyToriPoke.jpg";
import Bowl_30 from "../content/BowlBao/30.NasuPankoPoke.jpg";
import Bao_34 from "../content/BowlBao/34.BaoTori.JPG";
import Bao_35 from "../content/BowlBao/35.BaoEbi.JPG";
import Bao_36 from "../content/BowlBao/36.BaoNasu.JPG";
import BaoTrio from "../content/BowlBao/BaoTrio.jpg";

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
            img={Bowl_25}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="26. MAGURO POKE"
            desc="Su Tunu"
            price="8.50"
            img={Bowl_26}
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
            img={Bowl_28}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="29. CRUNCHY TORI POKE"
            desc="Su Traškia Vištiena"
            price="7.90"
            img={Bowl_29}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="30. NASU PANKO POKE"
            desc="Su Traškiu Baklažanu"
            price="7.50"
            img={Bowl_30}
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
            img={Bao_34}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="35. EBI"
            desc="Traški tigrinė krevetė, Ikrai, Avokadas, Svogūnų traškučiai, Teriyaki padažas, Sezamas"
            price="4.70/8.90"
            img={Bao_35}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="36. NASU"
            desc="Traškus baklažanas, Sweet čili morka, Sūrio kremas, Sezamas, Teriyaki padažas"
            price="4.00/7.50"
            img={Bao_36}
            icon={iconVegan}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="Trijų bao rinkinys"
            desc="Tori bao, Ebi bao, Nasu bao"
            price="12.00"
            img={BaoTrio}
          ></CreateCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuBowl;
