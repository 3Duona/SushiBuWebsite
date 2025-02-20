import React from "react";
import { Box, Grid} from "@mui/material";
// import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
// import { useMediaQuery, useTheme } from "@mui/material";
import CreateCard from "./CreateCard";
import CreateCardSeparator from "./CreateCardSeparator";

import sushi_1 from "../contents/TestSushi.png";

// function CreateCard(props) {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if screen is xs (mobile)

//   return (
//     <Card
//       variant="outlined"
//       style={{
//         backgroundColor: 'rgba(52, 52, 52, 0.5)',
//         margin: 0,
//         padding: 0,
//         border: "1px solid white",
//         borderRadius: "20px",
//       }}
//     >
//       <CardContent style={{ padding: 0 }}>
//         <Grid container spacing={0}>
//           {/* Product Image - No Margins or Padding, Fully Stretched */}
//           <Grid item xs={12} md={6} style={{ padding: 0, margin: 0, position: "relative" }}>
//           <img
//             src={props.img}
//             alt="Not loading"
//             style={{
//               width: "100%",
//               height: "auto",
//               objectFit: "cover",
//               display: "block",
//               maxHeight: isMobile ? "200px" : "500px", // Mobile: 200px, Desktop: 500px
//             }}
//           />
//           </Grid>
//           {/* Product Description */}
//           <Grid
//             item
//             xs={12}
//             md={6}
//             sx={{
//               padding: "16px",
//               color: "white",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               height: "100%",
//             }}
//           >
//             {/* Name at the top, aligned left */}
//             <Typography variant="h5" align="left">
//               {props.name}
//             </Typography>

//             {/* Description - Different for mobile and desktop */}
//             {isMobile ? (
//               // Mobile view - inline text
//               <Typography variant="body2">
//                 {props.desc}
//               </Typography>
//             ) : (
//               // Desktop view - listed items
//               <ul style={{ paddingLeft: "20px", marginTop: "8px", marginBottom: "8px" }}>
//                 {props.desc.split(",").map((item, index) => (
//                   <li key={index}>
//                     <Typography variant="body2">{item.trim()}</Typography>
//                   </li>
//                 ))}
//               </ul>
//             )}
            
//             <Typography variant="h5" align="left" sx={{ marginTop: "auto" }}>
//               {props.price} €
//             </Typography>
//           </Grid>
//         </Grid>
//       </CardContent>
//     </Card>
//   );
// }

const MenuSushi = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} l={12}>
          <CreateCardSeparator
            name="SUSHI"
            desc="Sushi gali būti apkepti, kaina 1eur už apkepimą"
          ></CreateCardSeparator>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="1. SAKE"
            desc="Lašiša, Agurkas, Sezamas"
            price="4.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="2. SAKE AVOCADO"
            desc="Lašiša, Avokadas, Majonezo padažas"
            price="4.70"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="3. TEKKA"
            desc="Tunas, Agurkas, Karai padažas"
            price="4.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="4. EBI"
            desc="Traški tigrinė krevetė, Avokadas, Karai padažas"
            price="4.80"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="5. KANI"
            desc="Krabų lazdelės, Agurkas, Majonezo padažas"
            price="4.30"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="6. UNAGI"
            desc="Ungurys, Teriyaki padažas, Agurkas, Sezamas"
            price="6.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="7. WAKAME"
            desc="Jūros dumbliai, Agurkas, Sezamas, Karai padažas"
            price="4.20"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="8. KAPPA"
            desc="Agurkas, Sezamas"
            price="3.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="9. AVOCADO"
            desc="Avokadas, Sezamas"
            price="4.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="10. ALASKA"
            desc="Kepta lašiša, Karai padažas, Paprika, Agurkas, Svogūnų traškučiai, Teriyaki padažas"
            price="7.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="11. SEZAME MAGURO"
            desc="Tunas, Agurkas, Svogūnų traškučiai, Sezamas, Karai padažas"
            price="7.90"
            img={sushi_1}
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
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="24. YASAI TEMPURA"
            desc="Tempuroje keptas baklažanas, Sūrio kremas, Svogūnų traškučiai, Iceberg salota, Teriyaki padažas"
            price="6.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="25. MAX Testing"
            desc="Tempuroje keptas baklažanas Tempuroje keptas baklažanas Tempuroje keptas baklažanas Tempuroje keptas baklažanas Tempuroje keptas baklažanas, Sūrio kremas, Svogūnų traškučiai, Iceberg salota, Teriyaki padažas, Svogūnų traškučiai, Iceberg salota, Teriyaki padažas, Svogūnų traškučiai, Iceberg salota, Teriyaki padažas, Svogūnų traškučiai, Iceberg salota, Teriyaki padažas"
            price="7000000000000000000000000.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuSushi;
