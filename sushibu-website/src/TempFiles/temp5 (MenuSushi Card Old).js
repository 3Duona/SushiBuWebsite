import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";

import sushi_1 from "../contents/TestSushi.png";

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

const MenuSushi = () => {
  return (
    <Box>
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
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="8. KAPPA"
            desc="(Agurkas, sezamas)"
            price="3.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="9. AVOCADO"
            desc="(Avokadas, sezamas)"
            price="4.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="10. ALASKA"
            desc="(Kepta lašiša, karai padažas, paprika, agurkas, svogūnų traškučiai, teriyaki padažas)"
            price="7.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="11. SEZAME MAGURO"
            desc="(Tunas, agurkas, svogūnų traškučiai, sezamas, karai padažas)"
            price="7.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="12. PHILADELPHIA"
            desc="(Lašiša, sūrio kremas, krabų lazdelės, agurkas, avokadas)"
            price="7.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="13. CALIFORNIA"
            desc="(Krabų lazdelės, sūrio kremas, avokadas, masago ikrai, agurkas)"
            price="7.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="14. MAGURO"
            desc="(Tunas, sūrio kremas, agurkas, iceberg salota, masago ikrai, karai padažas)"
            price="8.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="15. SAKE WAKAME"
            desc="(Lašiša, sūrio kremas, agurkas, wakame, sezamas)"
            price="7.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="16. TORI"
            desc="(Traški vištiena, čederio sūris, agurkas, iceberg salota, majonezo padažas, teriyaki padažas)"
            price="7.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="17. CALIFORNIA EBI"
            desc="(Traški tigrinė krevetė, sūrio kremas, avokadas, agurkas, masago ikrai)"
            price="7.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="18. EBI AVOCADO"
            desc="(Traški tigrinė krevetė, avokadas, agurkas, sezamas, sūrio kremas, teriyaki padažas, masago ikrai)"
            price="8.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="19. RAINBOW"
            desc="(Lašiša, tunas, traški tigrinė krevetė, avokadas, sezamas, karai padažas, masago ikrai)"
            price="8.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="20. TATAKI SAKE"
            desc="(Grill lašiša, traški tigrinė krevetė, sūrio kremas, svogūnų traškučiai, sezamas, teriyaki padažas, krapų padažas)"
            price="8.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="21. TATAKI MAGURA"
            desc="(Grill tunas, traški tigrinė krevetė, agurkas, avokadas, masago ikrai, sezamas, karai padažas)"
            price="9.20"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="22. UNAGI DRAGON"
            desc="(Grill ungurys, agurkas, traški tigrinė krevetė, masago ikrai, karai padažas, sezamas, teriyaki padažas)"
            price="9.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="23. YASAI"
            desc="(Avokadas, paprika, agurkas, morka, iceberg salota, sezamas, krapų padažas)"
            price="6.50"
            img={sushi_1}
          ></CreateCard>
        </Grid>
        <Grid item xs={12} md={6} l={4}>
          <CreateCard
            name="24. YASAI TEMPURA"
            desc="(Tempuroje keptas baklažanas, sūrio kremas, svogūnų traškučiai, iceberg salota, teriyaki padažas)"
            price="6.90"
            img={sushi_1}
          ></CreateCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuSushi;




// working latest version
function CreateCard(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check if screen is xs (mobile)

  return (
    <Card
      variant="outlined"
      style={{
        backgroundColor: 'rgba(52, 52, 52, 0.5)',
        margin: 0,
        padding: 0,
        border: "1px solid white",
        borderRadius: "20px",
      }}
    >
      <CardContent style={{ padding: 0 }}>
        <Grid container spacing={0}>
          {/* Product Description */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              padding: "16px",
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            {/* Name at the top, aligned left */}
            <Typography variant="h5" align="left">
              {props.name}
            </Typography>

            {/* Description - Different for mobile and desktop */}
            {isMobile ? (
              // Mobile view - inline text
              <Typography variant="body2">
                {props.desc}
              </Typography>
            ) : (
              // Desktop view - listed items
              <ul style={{ paddingLeft: "20px", marginTop: "8px", marginBottom: "8px" }}>
                {props.desc.split(",").map((item, index) => (
                  <li key={index}>
                    <Typography variant="body2">{item.trim()}</Typography>
                  </li>
                ))}
              </ul>
            )}

            <Typography variant="h5" align="left" sx={{ marginTop: "auto" }}>
              {props.price} €
            </Typography>
          </Grid>

          {/* Product Image - No Margins or Padding, Fully Stretched */}
          <Grid item xs={12} md={6} style={{ padding: 0, margin: 0, position: "relative" }}>
          <img
            src={props.img}
            alt="Not loading"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              display: "block",
              maxHeight: isMobile ? "200px" : "500px", // Mobile: 200px, Desktop: 500px
            }}
          />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}