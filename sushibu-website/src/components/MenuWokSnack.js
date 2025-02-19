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

const MenuBao = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} l={12}>
          <CreateCardSeparator
            name="Visi wok pateikiami su VIENODAIS PREIDAIS: morka, česnakas, cukinija, edamame pupelės, paprika, pievagrybiai, imbieras, citrina, svogūnų traškučiai, sezamas, sojų padažas"
            desc={"Pasirinkite su Ryžiais ar makaronais \n Pasirinkite padažą: sweet čili, aštrus, teriyaki"}
          ></CreateCardSeparator>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="31. TORI"
            desc="(Su vištiena)"
            price="8.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="32. EBI"
            desc="(Su krevetėm)"
            price="8.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="33. TORI"
            desc="(Su traškiu baklažanu)"
            price="7.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={12} l={12}>
          <CreateCardSeparator 
            name="UŽKANDŽIAI" 
            desc="Pasirinkite padažą: sweet čili, aštrus, teriyaki, krapų, sojos, majonezo">
          </CreateCardSeparator>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="37. WAKAME"
            desc="(Wakame, agurkas, sweet čili morka, edamame pupelės, sezamas, iceberg salota)"
            price="5.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="38. YAKI EBI"
            desc="(Traškios tigrinės krevetės 6 vnt.)"
            price="6.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="39. KATSU TORI"
            desc="(Traškios vištienos juostelės 6 vnt.)"
            price="5.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="40. SŪRIO SPURGYTĖS"
            desc="(Sūrio spurgytės 6 vnt.)"
            price="5.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="41. KALMARŲ ŽIEDAI"
            desc="(Kalmarų žiedai 8 vnt.)"
            price="5.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="42. SPRING ROLLS"
            desc="(Daržovės tešloje 8 vnt.)"
            price="5.20"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="43. UŽKANDŽIŲ RINKINYS"
            desc="(Traškios tigrinės krevetės 4 vnt, Sūrio spurgytės 4vnt, Spring rolls 4vnt, Kalmarų žiedai 4vnt.)"
            price="12.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuBao;
