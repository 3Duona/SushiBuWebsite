import React from "react";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Map from "./components/Map";
import { Container } from "@mui/material";
import { Route, Routes, Navigate } from "react-router";
import Banner from "./components/Banner";
import MenuSushi from "./components/MenuSushi";
import MenuBowl from "./components/MenuBowl";
import MenuBao from "./components/MenuBao";
import MenuSnack from "./components/MenuSnack";

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
        <Route path="/" element={<Navigate to="/MenuSushi" />} />
        <Route path="/MenuSushi" element={<MenuSushi />} />
        <Route path="/MenuBowl" element={<MenuBowl />} />
        <Route path="/MenuBao" element={<MenuBao />} />
        <Route path="/MenuSnack" element={<MenuSnack />} />
      </Routes>

      <Map />
      <Footer />
    </Container>
  );
}

export default App;
