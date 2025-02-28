import React from "react";
import { Box, Grid} from "@mui/material";
import CreateCard from "./CreateCard";
import CreateCardSeparator from "./CreateCardSeparator";

import iconVegan from "../content/Icons/Icon_Vegan.png";
import iconHot from "../content/Icons/Icon_Hot.png";
import iconHotVegan from "../content/Icons/Icon_HotVegan.png";
import iconHotDefault from "../content/Icons/Icon_HotDefault.png";
import iconVeganDefault from "../content/Icons/Icon_VeganDefault.png";

import Sushi_1 from "../content/Sushi/1.Sake.JPG";
import Sushi_2 from "../content/Sushi/2.SakeAvocado.JPG";
import Sushi_3 from "../content/Sushi/3.Tekka.JPG";
import Sushi_4 from "../content/Sushi/4.Ebi.JPG";
import Sushi_5 from "../content/Sushi/5.Kani.JPG";
import Sushi_6 from "../content/Sushi/6.Unagi.JPG";
import Sushi_7 from "../content/Sushi/7.Wakame.JPG";
import Sushi_8 from "../content/Sushi/8.Kappa.JPG";
import Sushi_9 from "../content/Sushi/9.Avocado.JPG";
import Sushi_10 from "../content/Sushi/10.Alaska.JPG";
import Sushi_11 from "../content/Sushi/11.SezameMaguro.JPG";
import Sushi_12 from "../content/Sushi/12.Philadelphia.JPG";
import Sushi_13 from "../content/Sushi/13.California.JPG";
import Sushi_14 from "../content/Sushi/14.Maguro.JPG";
import Sushi_15 from "../content/Sushi/15.SakeWakame.JPG";
import Sushi_16 from "../content/Sushi/16.Tori.JPG";
import Sushi_17 from "../content/Sushi/17.CaliforniaEbi.JPG";
import Sushi_18 from "../content/Sushi/18.EbiAvocado.JPG";
import Sushi_19 from "../content/Sushi/19.Rainbow.JPG";
import Sushi_20 from "../content/Sushi/20.TatakiSake.JPG";
import Sushi_21 from "../content/Sushi/21.TatakiMaguro.JPG";
import Sushi_22 from "../content/Sushi/22.UnagiDragon.JPG";
import Sushi_23 from "../content/Sushi/23.Yasai.JPG";
import Sushi_24 from "../content/Sushi/24.YasaiTempura.JPG";

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
            img={Sushi_1}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="2. SAKE AVOCADO"
            desc="Lašiša, Avokadas, Majonezo padažas"
            price="4.70"
            img={Sushi_2}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="3. TEKKA"
            desc="Tunas, Agurkas, Karai padažas"
            price="4.90"
            img={Sushi_3}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="4. EBI"
            desc="Traški tigrinė krevetė, Avokadas, Karai padažas"
            price="4.80"
            img={Sushi_4}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="5. KANI"
            desc="Krabų lazdelės, Agurkas, Majonezo padažas"
            price="4.30"
            img={Sushi_5}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="6. UNAGI"
            desc="Ungurys, Teriyaki padažas, Agurkas, Sezamas"
            price="6.50"
            img={Sushi_6}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="7. WAKAME"
            desc="Jūros dumbliai, Agurkas, Sezamas, Karai padažas"
            price="4.20"
            img={Sushi_7}
            icon={iconHotVegan}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="8. KAPPA"
            desc="Agurkas, Sezamas"
            price="3.90"
            img={Sushi_8}
            icon={iconHotVegan}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="9. AVOCADO"
            desc="Avokadas, Sezamas"
            price="4.50"
            img={Sushi_9}
            icon={iconHotVegan}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="10. ALASKA"
            desc="Kepta lašiša, Karai padažas, Paprika, Agurkas, Svogūnų traškučiai, Teriyaki padažas"
            price="7.50"
            img={Sushi_10}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="11. SEZAME MAGURO"
            desc="Tunas, Agurkas, Svogūnų traškučiai, Sezamas, Karai padažas"
            price="7.90"
            img={Sushi_11}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="12. PHILADELPHIA"
            desc="Lašiša, Sūrio kremas, Krabų lazdelės, Agurkas, Avokadas"
            price="7.90"
            img={Sushi_12}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="13. CALIFORNIA"
            desc="Krabų lazdelės, Sūrio kremas, Avokadas, Masago ikrai, Agurkas"
            price="7.90"
            img={Sushi_13}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="14. MAGURO"
            desc="Tunas, Sūrio kremas, Agurkas, Iceberg salota, Masago ikrai, Karai padažas"
            price="8.50"
            img={Sushi_14}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="15. SAKE WAKAME"
            desc="Lašiša, Sūrio kremas, Agurkas, Wakame, Sezamas"
            price="7.90"
            img={Sushi_15}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="16. TORI"
            desc="Traški vištiena, Čederio sūris, Agurkas, Iceberg salota, Majonezo padažas, Teriyaki padažas"
            price="7.90"
            img={Sushi_16}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="17. CALIFORNIA EBI"
            desc="Traški tigrinė krevetė, Sūrio kremas, Avokadas, Agurkas, Masago ikrai"
            price="7.90"
            img={Sushi_17}
            icon={iconHot}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="18. EBI AVOCADO"
            desc="Traški tigrinė krevetė, Avokadas, Agurkas, Sezamas, Sūrio kremas, Teriyaki padažas, Masago ikrai"
            price="8.90"
            img={Sushi_18}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="19. RAINBOW"
            desc="Lašiša, Tunas, Traški tigrinė krevetė, Avokadas, Sezamas, Karai padažas, Masago ikrai"
            price="8.90"
            img={Sushi_19}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="20. TATAKI SAKE"
            desc="Grill lašiša, Traški tigrinė krevetė, Sūrio kremas, Svogūnų traškučiai, Sezamas, Teriyaki padažas, Krapų padažas"
            price="8.50"
            img={Sushi_20}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="21. TATAKI MAGURA"
            desc="Grill tunas, Traški tigrinė krevetė, Agurkas, Avokadas, Masago ikrai, Sezamas, Karai padažas"
            price="9.20"
            img={Sushi_21}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="22. UNAGI DRAGON"
            desc="Grill ungurys, Agurkas, Traški tigrinė krevetė, Masago ikrai, Karai padažas, Sezamas, Teriyaki padažas"
            price="9.50"
            img={Sushi_22}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="23. YASAI"
            desc="Avokadas, Paprika, Agurkas, Morka, Iceberg salota, Sezamas, Krapų padažas"
            price="6.50"
            img={Sushi_23}
            icon={iconHotVegan}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="24. YASAI TEMPURA"
            desc="Tempuroje keptas baklažanas, Sūrio kremas, Svogūnų traškučiai, Iceberg salota, Teriyaki padažas"
            price="6.90"
            img={Sushi_24}
            icon={iconHotVegan}
          ></CreateCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuSushi;
