import React from "react";
import { Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import { css } from "@emotion/react";

import menu_1 from "../contents/SushiMenu.jpg";
import menu_2 from "../contents/SushiSets.jpg";
import menu_3 from "../contents/BowlsSnacks.jpg";

const useStyles = () => {
  return {
    carousel: css`
      width: 100%;
      height: 50vh;
      @media (max-width: 600px) {
        height: 30vh;
      }
    `,
    item: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      color: white;
      font-size: 2rem;
      @media (max-width: 600px) {
        font-size: 1.5rem;
      }
    `,
  };
};

const MenuTab = () => {
  const classes = useStyles();

  const items = [
    {
      image: menu_1,
    },
    {
      image: menu_2,
    },
    {
      image: menu_3,
    },
  ];

  return (
    <div>
      <Carousel
        className={classes.carousel}
        autoPlay={false}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
      >
        {items.map((item, index) => (
          <div key={index} className={classes.item}>
            <img src={item.image} alt={item.name} style={{ width: "50%" }} />
            <Typography variant="h5">{item.name}</Typography>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MenuTab;
