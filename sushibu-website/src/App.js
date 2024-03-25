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

function App() {
  return (
    <Container
      disableGutters={true}
      style={{
        alignItems: "center",
      }}
    >
      <Helmet>
        <title>Sushi bū</title>
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
  );
}

export default App;
