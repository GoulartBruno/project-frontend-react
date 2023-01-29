import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import Body from "./components/Body/Body";
import { Container } from "./style";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}
