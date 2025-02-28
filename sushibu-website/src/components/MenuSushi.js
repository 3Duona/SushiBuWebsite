import React from "react";
import { Box, Grid} from "@mui/material";
import CreateCard from "./CreateCard";
import CreateCardSeparator from "./CreateCardSeparator";

import sushi_1 from "../content/TestSushi.png";
import sushi_2 from "../content/SAKE-A1.jpeg";

import iconVegan from "../content/Icons/Icon_Vegan.png";
import iconHot from "../content/Icons/Icon_Hot.png";
import iconHotVegan from "../content/Icons/Icon_HotVegan.png";
import iconHotDefault from "../content/Icons/Icon_HotDefault.png";
import iconVeganDefault from "../content/Icons/Icon_VeganDefault.png";

import iconW from "../content/Icons/wolt.svg";

const MenuSushi = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} l={12}>
          <CreateCardSeparator
            name="SUSHI"
            desc={
              <>
                Sushi pažymėti {" "}
                <img src={iconHotDefault} alt="Hot" style={{ width: "20px", height: "20px" }} />
                {" "} gali būti apkepti, kaina 1 € už apkepimą. <br></br>
                Sushi pažymėti {" "}
                <img src={iconVeganDefault} alt="Vegan" style={{ width: "20px", height: "20px" }} />
                {" "} yra vegetariški.
              </>
            }
          ></CreateCardSeparator>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="1. SAKE"
            desc="Lašiša, Agurkas, Sezamas"
            price="4.50"
            img={sushi_2}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="2. SAKE AVOCADO"
            desc="Lašiša, Avokadas, Majonezo padažas"
            price="4.70"
            img={sushi_2}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="3. TEKKA"
            desc="Tunas, Agurkas, Karai padažas"
            price="4.90"
            img={sushi_2}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="4. EBI"
            desc="Traški tigrinė krevetė, Avokadas, Karai padažas"
            price="4.80"
            img={sushi_1}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="5. KANI"
            desc="Krabų lazdelės, Agurkas, Majonezo padažas"
            price="4.30"
            img={sushi_1}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="6. UNAGI"
            desc="Ungurys, Teriyaki padažas, Agurkas, Sezamas"
            price="6.50"
            img={sushi_1}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="7. WAKAME"
            desc="Jūros dumbliai, Agurkas, Sezamas, Karai padažas"
            price="4.20"
            img={sushi_1}
            icon={iconHotVegan}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="8. KAPPA"
            desc="Agurkas, Sezamas"
            price="3.90"
            img={sushi_1}
            icon={iconHotVegan}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="9. AVOCADO"
            desc="Avokadas, Sezamas"
            price="4.50"
            img={sushi_1}
            icon={iconHotVegan}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="10. ALASKA"
            desc="Kepta lašiša, Karai padažas, Paprika, Agurkas, Svogūnų traškučiai, Teriyaki padažas"
            price="7.50"
            img={sushi_1}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="11. SEZAME MAGURO"
            desc="Tunas, Agurkas, Svogūnų traškučiai, Sezamas, Karai padažas"
            price="7.90"
            img={sushi_1}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="12. PHILADELPHIA"
            desc="Lašiša, Sūrio kremas, Krabų lazdelės, Agurkas, Avokadas"
            price="7.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="13. CALIFORNIA"
            desc="Krabų lazdelės, Sūrio kremas, Avokadas, Masago ikrai, Agurkas"
            price="7.90"
            img={sushi_1}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="14. MAGURO"
            desc="Tunas, Sūrio kremas, Agurkas, Iceberg salota, Masago ikrai, Karai padažas"
            price="8.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="15. SAKE WAKAME"
            desc="Lašiša, Sūrio kremas, Agurkas, Wakame, Sezamas"
            price="7.90"
            img={sushi_1}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="16. TORI"
            desc="Traški vištiena, Čederio sūris, Agurkas, Iceberg salota, Majonezo padažas, Teriyaki padažas"
            price="7.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="17. CALIFORNIA EBI"
            desc="Traški tigrinė krevetė, Sūrio kremas, Avokadas, Agurkas, Masago ikrai"
            price="7.90"
            img={sushi_1}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="18. EBI AVOCADO"
            desc="Traški tigrinė krevetė, Avokadas, Agurkas, Sezamas, Sūrio kremas, Teriyaki padažas, Masago ikrai"
            price="8.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="19. RAINBOW"
            desc="Lašiša, Tunas, Traški tigrinė krevetė, Avokadas, Sezamas, Karai padažas, Masago ikrai"
            price="8.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="20. TATAKI SAKE"
            desc="Grill lašiša, Traški tigrinė krevetė, Sūrio kremas, Svogūnų traškučiai, Sezamas, Teriyaki padažas, Krapų padažas"
            price="8.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="21. TATAKI MAGURA"
            desc="Grill tunas, Traški tigrinė krevetė, Agurkas, Avokadas, Masago ikrai, Sezamas, Karai padažas"
            price="9.20"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="22. UNAGI DRAGON"
            desc="Grill ungurys, Agurkas, Traški tigrinė krevetė, Masago ikrai, Karai padažas, Sezamas, Teriyaki padažas"
            price="9.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="23. YASAI"
            desc="Avokadas, Paprika, Agurkas, Morka, Iceberg salota, Sezamas, Krapų padažas"
            price="6.50"
            img={sushi_1}
            icon={iconHotVegan}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="24. YASAI TEMPURA"
            desc="Tempuroje keptas baklažanas, Sūrio kremas, Svogūnų traškučiai, Iceberg salota, Teriyaki padažas"
            price="6.90"
            img={sushi_1}
            icon={iconHotVegan}
          ></CreateCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuSushi;
