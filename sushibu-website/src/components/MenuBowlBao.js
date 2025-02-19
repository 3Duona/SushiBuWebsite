import React from "react";
import { Box, Grid} from "@mui/material";
// import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import CreateCard from "./CreateCard";
import CreateCardSeparator from "./CreateCardSeparator";

import sushi_1 from "../contents/TestSushi.png";

// function CreateCard(props) {
//   return (
//     <Card variant="outlined" style={{ backgroundColor: "grey" }}>
//       <CardContent>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={9}>
//             <Grid container justifyContent="space-between">
//               <Grid item>
//                 <Typography variant="h5" align="left">
//                   {props.name}
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <Typography variant="h5" align="right">
//                   {props.price}
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Typography variant="body2">{props.desc}</Typography>
//           </Grid>
//           <Grid item xs={12} md={3}>
//             <img
//               src={props.img}
//               alt={"Not loading"}
//               style={{ width: "100%", height: "100%", objectFit: "cover" }}
//             />
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }

const MenuBowl = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} l={12}>
          <CreateCardSeparator
            name="Visi dubenėliai ruošiami su VIENODAIS PREIDAIS: ryžiai, agurkas, edamame pupelės, sweet čili morkos, wakame, marinuotas imbieras, citrina, nori lapai, iceberg salota"
            desc="Pasirinktinai padažas: Sweet čili, teriyaki, krapų, čili, karai"
          ></CreateCardSeparator>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="25. SAKE POKE"
            desc="(Su lašiša)"
            price="8.00"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="26. MAGURO POKE"
            desc="(Su tunu)"
            price="8.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="27. EBI POKE"
            desc="(Su tunu ir lašiša)"
            price="8.20"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="28. YAKI EBI POKE"
            desc="(Su traškia krevete)"
            price="8.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="29. CRUNCHY TORI POKE"
            desc="(Su traškia vištiena)"
            price="7.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="30. NASU PANKO POKE"
            desc="(Su traškiu baklažanu)"
            price="7.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={12} l={12}>
          <CreateCardSeparator
            name="BAO BANDELES"
            desc="Kaina 1vnt/2vnt"
          ></CreateCardSeparator>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="34. TORI"
            desc="(Traški vištiena, sweet čili morka, iceberg, karai padažas, sezamas)"
            price="4.40/8.30"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="35. EBI"
            desc="(Traški tigrinė krevetė, ikrai, avokadas, svogūnų traškučiai, teriyaki padažas, sezamas)"
            price="4.70/8.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="36. NASU"
            desc="(Traškus baklažanas, sweet čili morka, sūrio kremas, sezamas, teriyaki padažas)"
            price="4.00/7.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="Trijų bao rinkinys"
            desc="(Tori bao, ebi bao, nasu bao)"
            price="12.00"
            img={sushi_1}
          ></CreateCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuBowl;
