import React from "react";
import { Box, Grid} from "@mui/material";
import CreateCard from "./CreateCard";
import CreateCardSeparator from "./CreateCardSeparator";

import iconVegan from "../content/Icons/Icon_Vegan.png";
import iconHot from "../content/Icons/Icon_Hot.png";
import iconHotVegan from "../content/Icons/Icon_HotVegan.png";
import iconHotDefault from "../content/Icons/Icon_HotDefault.png";
import iconVeganDefault from "../content/Icons/Icon_VeganDefault.png";

import Wok31 from "../content/WokSnack/31.ToriWok.JPG";
import Wok32 from "../content/WokSnack/32.EbiWok.JPG";
import Wok33 from "../content/WokSnack/33.NasuWok.JPG";
import Snack37 from "../content/WokSnack/37.Wakame.jpg";
import Snack38 from "../content/WokSnack/38.YakiEbi.JPG";
import Snack39 from "../content/WokSnack/39.KatsuTori.JPG";
import Snack40 from "../content/WokSnack/40.CheeseDonuts.jpg";
import Snack41 from "../content/WokSnack/41.SquidRings.JPG";
import Snack42 from "../content/WokSnack/42.SpringRolls.jpg";
import Snack43 from "../content/WokSnack/43.SnackSet.jpg";

const MenuBao = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} l={12}>
          <CreateCardSeparator 
            name="WOK" 
            desc={"Visi Wok pateikiami su VIENODAIS PRIEDAIS: morka, česnakas, cukinija, edamame pupelės, paprika, pievagrybiai, imbieras, citrina, svogūnų traškučiai, sezamas, sojų padažas \n Pasirinkite su Ryžiais ar Makaronais \n Pasirinkite padažą: Sweet čili, Aštrus,Teriyaki"}>
          </CreateCardSeparator>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="31. TORI"
            desc="Su Vištiena"
            price="8.50"
            img={Wok31}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="32. EBI"
            desc="Su Krevetėm"
            price="8.90"
            img={Wok32}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="33. NASU"
            desc="Su Traškiu Baklažanu"
            price="7.90"
            img={Wok33}
            icon={iconVegan}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={12} l={12}>
          <CreateCardSeparator 
            name="UŽKANDŽIAI" 
            desc="Pasirinkite padažą: Sweet čili, Aštrus, Teriyaki, Krapų, Sojos, Majonezo"
            titleVariant="h4"
          ></CreateCardSeparator>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="37. WAKAME"
            desc="Wakame, Agurkas, Sweet čili morka, Edamame pupelės, Sezamas, Iceberg salota"
            price="5.50"
            img={Snack37}
            icon={iconVegan}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="38. YAKI EBI"
            desc="Traškios tigrinės krevetės 6 vnt"
            price="6.90"
            img={Snack38}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="39. KATSU TORI"
            desc="Traškios vištienos juostelės 6 vnt"
            price="5.90"
            img={Snack39}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="40. SŪRIO SPURGYTĖS"
            desc="Sūrio spurgytės 6 vnt"
            price="5.90"
            img={Snack40}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="41. KALMARŲ ŽIEDAI"
            desc="Kalmarų žiedai 8 vnt"
            price="5.50"
            img={Snack41}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="42. SPRING ROLLS"
            desc="Daržovės tešloje 8 vnt"
            price="5.20"
            img={Snack42}
            icon={iconVegan}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="43. UŽKANDŽIŲ RINKINYS"
            desc="Traškios tigrinės krevetės 4 vnt, Sūrio spurgytės 4vnt, Spring rolls 4vnt, Kalmarų žiedai 4vnt"
            price="12.50"
            img={Snack43}
          ></CreateCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuBao;
