import React from "react";
import { Box, Grid, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

import MenuSelector_Sushi from "../content/MenuSelector_Sushi.jpg";
import MenuSelector_SushiSet from "../content/MenuSelector_SushiSet.jpg";
import MenuSelector_BowlBao from "../content/MenuSelector_BowlBao.jpg";
import MenuSelector_WokSnack from "../content/MenuSelector_WokSnack.jpg";

function CreateCard(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (props.redirect) {
      navigate(props.redirect);
    } else {
      alert("Įvyko klaida.");
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <Card
        variant="outlined"
        style={{         
          margin: 0,
          padding: 0,
          border: "1px solid white",
          borderRadius: "20px",
        }}
      >
        <CardContent style={{ padding: 0, margin: 0, position: "relative" }}>
          <Grid container spacing={0}>
            {/* <Grid item xs={12} md={9}>
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
            </Grid> */}
            {/* <Grid item xs={12} md={12}>
              <img
                src={props.img}
                alt={"Not loading"}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Grid> */}
            <Grid item xs={12} md={12} style={{ padding: 0, margin: 0, position: "relative" }}>
              <img
                src={props.img}
                alt="Not loading"
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

const MenuSelector = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3}>
          <CreateCard
            name="Sushi"
            desc=""
            price=""
            img={MenuSelector_Sushi}
            redirect="/MenuSushi"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <CreateCard
            name="Sushi Sets"
            desc=""
            price=""
            img={MenuSelector_SushiSet}
            redirect="/MenuSet"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <CreateCard
            name="Bowls and Bao"
            desc=""
            price=""
            img={MenuSelector_BowlBao}
            redirect="/MenuBowlBao"
          />
        </Grid>
        <Grid item xs={6} md={3}>
          <CreateCard
            name="Wok and Snacks"
            desc=""
            price=""
            img={MenuSelector_WokSnack}
            redirect="/MenuWokSnack"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuSelector;
