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
          <Grid item xs={12} md={4}>
            <Grid container justifyContent="space-between">
                <Grid item sx={{color: "white"}}>
                  <Typography variant="h5" align="left">
                    {props.name}
                  </Typography>
              </Grid>
            </Grid>
            <Typography variant="body2" sx={{color: "white"}} style={{ whiteSpace: "pre-line" }}>
              {props.desc}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default CreateCardSeparator;
