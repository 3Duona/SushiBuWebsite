import React, { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";
import SushiTab from "./SushiTab";
import MenuTab from "./MenuTab";

const Menu = () => {
  const [tabValueMenu, setTabValue] = useState(0);

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div>
      <Tabs value={tabValueMenu} onChange={handleChange} centered>
        <Tab label="Sushi" />
        <Tab label="Menu" />
      </Tabs>
      <Box hidden={tabValueMenu !== 0}>
        <SushiTab />
      </Box>
      <Box hidden={tabValueMenu !== 1}>
        <MenuTab />
      </Box>
    </div>
  );
};

export default Menu;
