import React from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Map from "./components/Map";
import { Container, Box, CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router";
import Banner from "./components/Banner";
import MenuSelector from "./components/MenuSelector";
import MenuSushi from "./components/MenuSushi";
import MenuBowl from "./components/MenuBowlBao";
import MenuBao from "./components/MenuWokSnack";
import MenuSet from "./components/MenuSet";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import HeaderLogo from "../src/content/Icons/HelmetIcon.svg";

// Create a custom theme
const theme = createTheme({
  typography: {
    fontFamily: "'Quicksand', sans-serif",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ✅ Outer wrapper for full-height flex layout */}
      <Box
        display="flex"
        flexDirection="column"
        minHeight="100vh"
        fontFamily="'Quicksand', sans-serif"
      >
        {/* ✅ Keep layout margins with Container */}
        <Container maxWidth="lg" disableGutters={false} style={{ flex: 1 }}>
          <Helmet>
            <title>Sushi bū</title>
            <link rel="icon" type="image/png" href={HeaderLogo} sizes="16x16" />
          </Helmet>

          <Header />
          <Banner />

          {/* ✅ Make this area expand to fill space */}
          <Box flex={1}>
            <Routes>
              <Route path="/" element={<MenuSelector />} />
              <Route path="/MenuSushi" element={<MenuSushi />} />
              <Route path="/MenuBowlBao" element={<MenuBowl />} />
              <Route path="/MenuWokSnack" element={<MenuBao />} />
              <Route path="/MenuSet" element={<MenuSet />} />
            </Routes>
          </Box>
        </Container>

        <Container>
          <Map />
        </Container>

        {/* ✅ Footer placed outside Container but still styled with it */}
        <Container maxWidth="lg" disableGutters={false}>
          <Footer />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
