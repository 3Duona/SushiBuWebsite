import React from "react";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
        hoverable
        variant="outlined"
        style={{ backgroundColor: "grey", transition: "background-color 0.3s" }}
        sx={{ "&:hover": { backgroundColor: "lightgrey" } }}
      >
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
    </div>
  );
}

const MenuSelector = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <CreateCard
            name="Sushi"
            desc=""
            price=""
            img=""
            redirect="/MenuSushi"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CreateCard
            name="Sushi Sets"
            desc=""
            price=""
            img=""
            redirect="/MenuSet"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CreateCard
            name="Bowls and Bao"
            desc=""
            price=""
            img=""
            redirect="/MenuBowlBao"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <CreateCard
            name="Wok and Snacks"
            desc=""
            price=""
            img=""
            redirect="/MenuWokSnack"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default MenuSelector;
