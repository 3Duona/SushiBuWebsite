import React from "react";
import { Card, CardContent, Grid, Typography} from "@mui/material";

function CreateCardSeparator(props) {
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
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12} md={2} container justifyContent="center" alignItems="center">
            <Typography variant={props.titleVariant || "h4"} align="center" sx={{ color: "white" }}>
              {props.name}
            </Typography>
          </Grid>

          <Grid item xs={12} md={10} container justifyContent="left" alignItems="center">
            <Typography variant="body2" sx={{ whiteSpace: "pre-line", paddingLeft: "20px", color: "white", fontSize: "16px"}} style={{ whiteSpace: "pre-line" }}>
              {props.desc}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CreateCardSeparator;
