import React from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Map from "./components/Map";
import { Container } from "@mui/material";
import { Route, Routes } from "react-router";
import Banner from "./components/Banner";
import MenuSelector from "./components/MenuSelector";
import MenuSushi from "./components/MenuSushi";
import MenuBowl from "./components/MenuBowlBao";
import MenuBao from "./components/MenuWokSnack";
import MenuSet from "./components/MenuSet";

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';  // To apply global styles

import HeaderLogo from "../src/contents/MainLogoSushiBu.jpg";

// Create a custom theme
const theme = createTheme({
  typography: {
    fontFamily: "'Quicksand', sans-serif",  // Set Quicksand as the default font
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />  {/* This applies default MUI styles and resets CSS */}
      <Container
      disableGutters={true}
      style={{
        alignItems: "center",
        fontFamily: "'Quicksand', sans-serif"
      }}
    >
      <Helmet>
        <title>Sushi bū</title>
        <link rel="icon" type="image/png" href={HeaderLogo} sizes="16x16" />
      </Helmet>
      <Header />
      <Banner />
      <Routes>
        <Route path="/" element={<MenuSelector />} />
        <Route path="/MenuSushi" element={<MenuSushi />} />
        <Route path="/MenuBowlBao" element={<MenuBowl />} />
        <Route path="/MenuWokSnack" element={<MenuBao />} />
        <Route path="/MenuSet" element={<MenuSet />} />
      </Routes>

      <Map />
      <Footer />
    </Container>
    </ThemeProvider>
  );
}

export default App;
